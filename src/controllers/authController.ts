import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../middlewares/generateToken";
import User from "../models/userModel";
import { sendResponse } from "../constants/response";
import { HttpStatus } from "../constants/constants";

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log("oakwoakwokaowkoakwokawokaowkoakwoka");
  // Find the user in your database based on the provided username
  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Compare the provided password with the hashed password stored in the database
  //   const isPasswordValid = await bcrypt.compare(password, user.password);

  //   if (!isPasswordValid) {
  //     return res.status(401).json({ message: "Invalid credentials" });
  //   }

  // Generate a JWT token with the user ID as the payload
  const token = generateToken({ userId: user.id });

  // Return the token in the response
  res.json({ token });

  // const counting = 1;
  // const countTotal = 1;

  // sendResponse(res, HttpStatus.OK, "Success", user, counting, countTotal);
};
