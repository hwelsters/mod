import { Request, Response } from "express";

const router = require("express").Router();

const authController = require("../controllers/authController");

// REGISTER
router.post("/register", authController.register_post);

// LOGIN
router.post("/login", authController.login_post);

export default router;