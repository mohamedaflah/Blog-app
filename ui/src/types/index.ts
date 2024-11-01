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

export interface IUserStore {
  user: IUser|null;
  loading: boolean;
  error: boolean|string;
  setUser: (user: IUser) => void;
  setLoading: (loading: boolean) => void;
  setError:(error: string) => void;
}
