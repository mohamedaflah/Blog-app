import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";
// import { FieldErrors } from "react-hook-form";
// type ErrorMap = FieldErrors;
export default function FormErrorBorder({
  children,
  error,
}: // key,
{ error: string } & PropsWithChildren) {
  return (
    <div
      className={cn("", {
        "bg-red-600/90 p-3 rounded-[5px] flex flex-col": error,
      })}
    >
      {children}
      {error && <div className="text-gray-200">{error as ReactNode}</div>}
    </div>
  );
}
