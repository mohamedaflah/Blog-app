/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

export const extractErrorMessage = (
  error: AxiosError | AxiosError<unknown, any> | any
): string => {
  if (error?.response?.data) {
    return (error.response.data as any)?.message;
  }
  return error.message;
};
