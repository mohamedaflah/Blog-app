/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { axiosInstance } from "@/api/api.config";
import LoaderButton from "@/components/custom/loader-button";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LoginIcons } from "@/constants/assets";
import { extractErrorMessage } from "@/lib/extractError";
import { signupSchema } from "@/lib/schemas/signup.schema";
import useUserStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { toast } from "sonner";
import { z } from "zod";
// /user/signup
export default function SignupPage() {
  type SignupSchema = z.infer<typeof signupSchema>;
  const {
    register,
    formState: { errors },
    ...rest
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      designation: "",
      fullname: "",
    },
  });
  const { setLoading, setUser, setError,loading } = useUserStore();

  const handleSignupSubmission = async (values: SignupSchema) => {
    console.log(values);
    setLoading(true);
    try {
      // fullname, email, designation, password, role
      // { status: true, message: "Successfull", user }
      // /signup
      const { data } = await axiosInstance.post(`/user/signup`, {
        ...values,
        role: "user",
      });
      const { user } = data;
      setUser(user);
      toast.success("Registration successfull");
    } catch (error) {
      toast.error(extractErrorMessage(error));
      setError(extractErrorMessage(error))
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="w-full flex-1 flex min-h-screen ">
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
            onSubmit={rest.handleSubmit(handleSignupSubmission)}
            className="w-full h-full flex flex-col lg:gap-10 gap-5"
          >
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="" className="text-sm font-kubsans-medium">
                Full Name
              </label>
              <Input
                type="text"
                placeholder="Enter your Full Name"
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2 border-borderColor  outline-borderColor"
                {...register("fullname")}
              />
              {errors && errors?.fullname && (
                <span className="text-sm text-red-500 ">
                  {errors?.fullname?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-kubsans-medium">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your Email address "
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2  border-borderColor  outline-borderColor"
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
                Designation
              </label>
              <Input
                type="text"
                placeholder="Enter your Designation"
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2  border-borderColor  outline-borderColor"
                {...register("designation")}
              />
              {errors && errors?.designation && (
                <span className="text-sm text-red-500 ">
                  {errors?.designation?.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="text-sm font-kubsans-medium">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your Password"
                className="text-sm h-12 w-full rounded-[5px] bg-cardBackground border-2  border-borderColor  outline-borderColor "
                {...register("password")}
              />
              {errors && errors?.password && (
                <span className="text-sm text-red-500 ">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <Checkbox className="rounded-[3px] bg-cardBackground" />
              <label htmlFor="" className="text-sm font-kubsans-medium">
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <div className="w-full flex flex-col md:gap-5  gap-4">
              <div className="w-full flex flex-center">
                <LoaderButton isLoading={loading} type="submit">
                  Sign up
                </LoaderButton>
                {/* <Button className="rounded-[4px] bg-primaryYellow text-black px-5 hover:bg-primaryYellow/20">
                  Sign Up
                </Button> */}
              </div>
              <div className="w-full flex flex-center">
                <span className="text-[#666666]">Or</span>
              </div>
              <div className="w-full flex flex-center">
                <span className="text-[#666666]">
                  Already have an account?{" "}
                  <Link
                    href={"/login"}
                    className="text-primaryYellow font-kubsans-medium"
                  >
                    Login here
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
