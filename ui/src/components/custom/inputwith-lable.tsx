import { PropsWithChildren } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type InputWithLabelProp = {
  className?: string;
  placeHolder?: string;
  type: "number" | "text" | "password";
} & PropsWithChildren;
export default function InputWithLabel({
  className = "",
  placeHolder = "",
  type = "text",
  children,
  ...props
}: InputWithLabelProp) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="" className="text-sm">
        {children}
      </label>
      <Input
        className={cn("bg-background rounded-[5px]", className)}
        placeholder={placeHolder}
        type={type}
        {...props}
      />
    </div>
  );
}
