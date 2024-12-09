import { Request, Response } from "express";
import UserModel from "../schemas/user";
import * as argon2 from "argon2";
import { createJWT } from "../middlewares/createJWT";

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({ username: username });

    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await argon2.hash(password);

    const user = new UserModel({
      username: username,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ success: true, message: "User created" });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username: username });
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }
    if (await argon2.verify(user.password, password)) {
      const token = createJWT({ username: user.username });
      res
        .status(200)
        .json({ success: true, message: "Logged in", token: token });
      return;
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
      return;
    }
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};
