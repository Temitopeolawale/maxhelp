import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { jwtSecretKey } from "./createJWT";

interface DecodedToken {
  username: string;
}

//
declare global {
  namespace Express {
    interface Request {
      decodedToken?: DecodedToken;
    }
  }
}

export function verifyJWT(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized access" });
    return;
  } else {
    try {
      const decoded = jwt.verify(token, jwtSecretKey) as DecodedToken;
      req.decodedToken = decoded;
      next();
    } catch (err) {
      console.log(err);
    }
  }
}
