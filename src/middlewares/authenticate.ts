import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/config";
import User from "../models/userModel";

interface CustomRequest extends Request {
  user?: User; // Replace 'any' with the type of your user object
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "") || "";

  try {
    const decoded = jwt.verify(token, jwtSecret);
    console.log("decoded :", decoded);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
