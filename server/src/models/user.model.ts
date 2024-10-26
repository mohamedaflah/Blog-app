import mongoose, { Document, Model, Schema } from "mongoose";

// Define the TypeScript interface for the User document
export interface IUser extends Document {
  fullname: string;
  email: string;
  designation: string;
  password: string;
  role: "admin" | "user";
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Define the schema with proper TypeScript typings
const userSchema: Schema<IUser> = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// Define and export the model
const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
