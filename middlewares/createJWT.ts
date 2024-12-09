import jwt from "jsonwebtoken";

export const jwtSecretKey: string = "$)npsbidjoblodbasljdow944p9nldjbudl";

// payload for Seller
interface userPayload {
  username: string;
}

export function createJWT(userPayload: userPayload) {
  //set Expiration
  const expiresIn = "90h";
  //create token
  const token = jwt.sign(userPayload, jwtSecretKey, { expiresIn });
  return token;
}
