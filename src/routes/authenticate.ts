import express from "express";
import { authenticate } from "../middlewares/authenticate";
import { login } from "../controllers/authController";

const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate user and generate a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post("/login", login);

// Protected route
// router.get("/profile", authenticate, profileController.getProfile);

export default router;
