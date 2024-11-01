export interface IUser {
  _id?: string;
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
  user: IUser | null;
  loading: boolean;
  error: boolean | string;
  setUser: (user: IUser) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export interface IBlogPost {
  _id?: string;
  title: string;
  subTitle: string;
  thumbnailImage: string;
  subImages: string[];
  searchKeyword: string;
  contents: { title: string; description: string }[];
  description: string;
  likedUsers: string[];
  viewedUsers: string[];
  user: string;
  userDetail: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  sharedUsers: string[];
  publishStatus: "published" | "unpublished";
}
