"use client";

import { axiosInstance } from "@/api/api.config";
import useUserStore from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PropsWithChildren, useEffect } from "react";
import { toast } from "sonner";

export default function RectQueryWrapper({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();
  const { setUser, setLoading } = useUserStore();
  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")!));
    }
    axiosInstance
      .get(`/user/get-usr`)
      .then(({ data }) => {
        setUser(data?.user);
        delete data.user?.password;
        localStorage.setItem("user", JSON.stringify(data?.user));
      })
      .catch((er: AxiosError) => {
        toast.error(er.message);
      })
      .finally(() => setLoading(false));
  }, [setUser]);
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
