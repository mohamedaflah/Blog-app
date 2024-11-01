"use client";
import { ArrowTopRightIcon, LogoImage } from "@/constants/assets";
import useUserStore from "@/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { axiosInstance } from "@/api/api.config";
import { IUser } from "@/types";
import { toast } from "sonner";
export default function Header() {
  const router = useRouter();

  const { user, loading, setUser } = useUserStore();
  const handleLogout = async () => {
    await axiosInstance.delete("/user/logout");
    setUser(null as unknown as IUser);
    toast.success("Logout successful");
    router.push("/login");
  };
  return (
    <section>
      <header className="container-width  flex-center h-14 gap-3">
        <p className=" text-grayText md:text-[15px] text-[12px]">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
        <Image src={ArrowTopRightIcon} width={20} height={20} alt="Arrow-top" />
      </header>
      <nav className="w-full h-16 border-y border-borderColor bg-cardBackground">
        <div className="container-width h-full flex items-center justify-between">
          <Image
            src={LogoImage}
            width={100}
            className="cursor-pointer"
            height={70}
            alt=""
            onClick={() => router.push("/")}
          />
          <div className="flex items-center gap-2 h-10">
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button className="bg-primaryYellow rounded-[13px]">
                      Account
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem> */}
                    <button
                      className="flex px-2 text-sm items-center justify-between gap-3"
                      onClick={handleLogout}
                    >
                      Logout <LogOut className="w-4" />
                    </button>
                    {/* </DropdownMenuItem> */}
                    <DropdownMenuItem
                      className="my-1 cursor-pointer"
                      onClick={() => router.push("/my-blogs")}
                    >
                      My Blogs
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="my-1 cursor-pointer"
                      onClick={() => router.push("/create-blog")}
                    >
                      Create Blog
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="my-1 cursor-pointer"
                      onClick={() => router.push("/my-account")}
                    >
                      Manage My Account
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                {!loading && (
                  <>
                    <Button
                      className="bg-transparent border-2 rounded-[3px] border-borderColor text-white hover:bg-transparent"
                      onClick={() => router.push("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="bg-primaryYellow rounded-[3px]"
                      onClick={() => router.push("/signup")}
                    >
                      Signup
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
}
