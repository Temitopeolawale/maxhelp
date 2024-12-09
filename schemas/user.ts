import { Document, Schema, model } from "mongoose";

interface UserI extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema<UserI>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model<UserI>("User", UserSchema);

export default UserModel;
