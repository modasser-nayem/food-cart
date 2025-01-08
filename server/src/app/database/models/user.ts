import { model, Schema } from "mongoose";
import { IUser } from "../../interface/user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
    },
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const User = model<IUser>("User", userSchema);
