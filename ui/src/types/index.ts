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
  user: IUser | null;
  loading: boolean;
  error: boolean | string;
  setUser: (user: IUser) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

export interface IBlogPost {
  title: string;
  subtitle: string;
  thumbnailImage: string;
  subImages: string[];
  searchKeyword: string;
  contents: { title: string; description: string }[];
  description: string;
  likedUsers: string[];
  viewedUsers: string[];
  user: string;
  createdAt?: Date;
  updatedAt?: Date;
  category: string;
  sharedUsers: string[];
  publishStatus: "published" | "unpublished";
}
