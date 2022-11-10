import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "../services/database";

import validatePassword from "../utils/validatePassword";
import validateEmail from "../utils/validateEmail";
import { sendMail } from "../services/nodemailer";
import { registerText } from "../data/authText";
import generateRandomCode from "../utils/generateRandomCode";

// SEND VERIFICATION EMAIL
const sendVerificationEmail = (email: string, verificationCode: string) => {
  sendMail(
    email,
    registerText.subject(verificationCode),
    registerText.body(verificationCode),
    registerText.htmlBody(verificationCode)
  );
};

// REGISTER
module.exports.register_post = (req: Request, res: Response) => {
  // Ensure email and password are valid
  if (!validateEmail(req.body.email))
    return res.status(400).json("Incorrectly formatted email address");
  if (!validatePassword(req.body.password))
    return res.status(400).json("Password is not strong enough");

  const q = "SELECT * FROM Users WHERE email = ?";
  db.query(q, [req.body.email, req.body.username], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json(data);

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "INSERT INTO Users(`username`,`email`,`password`, `verified`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash, false];
    db.query(q, [values], (err: any, data: any) => {
      if (err) return res.status(500).json(err);

      const q = "INSERT INTO Otp(`email`,`verificationCode`) VALUES(?)";
      const verificationCode = generateRandomCode(5);
      const values = [req.body.email, verificationCode];
      sendVerificationEmail(req.body.email, verificationCode);
      db.query(q, [values]);
      return res.status(200).json("User has been created.");
    });
  });
};

// LOGIN
module.exports.login_post = (req: Request, res: Response) => {
  const q = "SELECT * FROM Users WHERE email = ?";
  db.query(q, [req.body.email], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    if (data.length == 0) return res.status(404).json("User not found");

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong email or password");
    }

    const token = jwt.sign({ id: data[0].id }, process.env.SECRET_KEY || "super secret key");
    const { password, ...other } = data[0];

    res.status(200).json({ ...other, token });
  });
};

module.exports.verifyEmail_post = (req: Request, res: Response) => {
  const q1 = "SELECT * FROM Otp WHERE email = ?";
  db.query(q1, [req.body.email], (err1: any, data1: any) => {
    if (err1) return res.status(500).json("Something wrong happened");
    if (req.body.verificationCode === data1[0].verificationCode) {
      const q2 = "UPDATE Users SET verified = TRUE WHERE email = ?";
      db.query(q2, [req.body.email], (err2: any, _: any) => {
        if (err2) return res.status(500).json("Something wrong happened");
        if (data1[0].verificationCode === req.body.verificationCode) {
          return res.status(200).json("Email verified");
        } else return res.status(500).json("Email not verified");
      });
    } else return res.status(500).json("WRONK");
  });
};

module.exports.emailAlreadyExists_post = (req: Request, res: Response) => {
  const q = "SELECT * FROM Users WHERE email = ?";
  db.query(q, [req.body.email], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    if (data.length)
      return res
        .status(200)
        .json({ exists: true, verified: data[0].verified === 1 });
    else return res.status(200).json({ exists: false, verified: false });
  });
};
