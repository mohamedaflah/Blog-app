/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { axiosInstance } from "@/api/api.config";
import useUserStore from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PropsWithChildren, useEffect } from "react";

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
        // toast.error(er.message);
        if (
          (er.response?.data as unknown | any)?.message ==
          "User not authenticated."
        ) {
          localStorage.removeItem("user");
        }
        console.log(er);
      })
      .finally(() => setLoading(false));
  }, [setUser]);
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
