import { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

type LoaderButtonProps = {
  isLoading: boolean;
  className?: string;
  type?: "submit" | "button";
} & PropsWithChildren;
export default function LoaderButton({
  isLoading,
  children,
  className,
  type = "submit",
  ...props
}: LoaderButtonProps) {
  return (
    <Button
      type={type}
      className={cn(
        "rounded-[4px] bg-primaryYellow text-black px-5 hover:bg-primaryYellow/20 flex flex-row gap-2 items-center",
        className,
        {
          "pointer-events-none bg-primaryYellow/80": isLoading,
        }
      )}
      {...props}
    >
      {children}
      {isLoading && (
        <>
          <LoaderCircle className="w-5 animate-spin" />
        </>
      )}
    </Button>
  );
}
