import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import db from "../services/database";

import validatePassword from "utils/validatePassword";
import validateEmail from "utils/validateEmail";
import { sendMail } from "services/nodemailer";
import { registerText } from "data/authText";

const sendVerificationEmail = (email: string, verificationCode: string) => {
  sendMail(
    email,
    registerText.subject(verificationCode),
    registerText.body(verificationCode),
    registerText.htmlBody(verificationCode)
  );
};

module.exports.verifyEmail_post = (req : Request, res: Response) => {
  
}

module.exports.register_post = (req: Request, res: Response) => {
  // Ensure email and password are valid
  if (!validateEmail(req.body.email))
    return res.status(400).json("Incorrectly formatted email address");
  if (!validatePassword(req.body.password))
    return res.status(400).json("Password is not strong enough");

  const q = "SELECT * FROM Users WHERE email = ?";
  db.query(q, [req.body.email, req.body.username], (err: any, data: any) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO Users(`username`,`email`,`password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err: any, data: any) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};

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

    const token = jwt.sign({ id: data[0].id }, "hi");
    const { password, ...other } = data[0];

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};
