import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/IUser";
import { Role } from "../interfaces/roles.enum";

const userSchema = new Schema<IUser>(
  {
    name: String,
    email: { type: String, unique: true },
    password: String,

    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
    },

    isVerified: { type: Boolean, default: false },
    verificationToken: String,
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);