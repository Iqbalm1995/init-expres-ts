// middlewares/generateToken.ts
import jwt from "jsonwebtoken";
import { jwtSecret, jwtExpiration } from "../config/config";

export const generateToken = (payload: any) => {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiration });
};
