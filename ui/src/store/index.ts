import { IUser, IUserStore } from "@/types";
import { create } from "zustand";

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  setUser: (user: IUser) => set({ user: user, error: false }),
  setLoading: (loading: boolean) =>
    set({
      loading,
    }),
  setError: (error: string) =>
    set({
      error,
    }),
  error: false,
  loading: false,
}));

export default useUserStore;
