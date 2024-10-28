export interface IUser {
  fullname: string;
  email: string;
  designation: string;
  password: string;
  role: "admin" | "user";
  status: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
