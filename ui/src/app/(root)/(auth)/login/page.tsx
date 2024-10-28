"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LoginIcons } from "@/constants/assets";
import { loginSchema } from "@/lib/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function LoginPage() {
  type LoginSchema = z.infer<typeof loginSchema>;
  const {
    register,
    formState: { errors },
    ...restof
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const handleLoginSubmission = (values: LoginSchema) => {
    console.log(values);
  };
  return (
    <main className="w-full flex-1 flex h-screen ">
      <section className="container-width h-full  grid grid-cols-1 lg:grid-cols-10">
        <div className="lg:col-span-4 h-full lg:border-r  border-borderColor lg:pt-14 pt-3 flex flex-col gap-5 lg:pr-16">
          <div className="w-full">
            <Image alt="" src={LoginIcons} className="size-14" />
          </div>
          <div>
            <h1
              className="text-white font-semibold xl:text-5xl text-3xl lg:text-3xl md:text-3xl    font-kubsans-medium capitalize "
              style={{ lineHeight: 1.3 }}
            >
              Welcome, <br /> Enter your details to stay logged in
            </h1>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-14 pt-3 lg:pl-16">
          <form
            action=""
            onSubmit={restof.handleSubmit(handleLoginSubmission)}
            className="w-full h-full flex flex-col lg:gap-10 gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-kubsans-medium">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your Email address "
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2 border-borderColor  outline-borderColor"
                {...register("email")}
              />
              {errors && errors?.email && (
                <span className="text-sm text-red-500 ">
                  {errors?.email?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-kubsans-medium">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your Email address "
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2  border-borderColor  outline-borderColor"
                {...register("password")}
              />
              {errors && errors?.password && (
                <span className="text-sm text-red-500 ">
                  {errors?.password?.message?.replace("String", "Password")}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Checkbox className="rounded-[3px] bg-cardBackground" />
              <label htmlFor="" className="text-sm font-kubsans-medium">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <div className="w-full flex flex-col md:gap-9 gap-4">
              <div className="w-full flex flex-center">
                <Button className="rounded-[4px] bg-primaryYellow text-black px-5 hover:bg-primaryYellow/20">
                  Log In
                </Button>
              </div>
              <div className="w-full flex flex-center">
                <span className="text-[#666666]">Or</span>
              </div>
              <div className="w-full flex flex-center">
                <span className="text-[#666666]">
                  Don’t have an acccount yet?{" "}
                  <Link
                    href={"/signup"}
                    className="text-primaryYellow font-kubsans-medium"
                  >
                    Register Here
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
