import { Request, Response } from "express";
import verify from "../utils/verifyToken";

const router = require("express").Router();

const authController = require("../controllers/authController");

// REGISTER
router.post("/register", authController.register_post);

// LOGIN
router.post("/login", authController.login_post);

// VERIFY EMAIL
router.post("/verifyEmail", authController.verifyEmail_post);

// EMAIL ALREADY EXISTS
router.post("/emailExists", authController.emailAlreadyExists_post);

// UPDATE PROFILE
router.post("/update", verify, authController.update_post);

export default router;