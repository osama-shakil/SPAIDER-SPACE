"use client";
import { LoginSchema } from "@/schemas/authSchema";
import { loginUser } from "@/store/user/userThunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ImSpinner6 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Input } from "../ui/input";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const { profileData } = useSelector((state) => state?.user);
  const { theme, setTheme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const handleLogin = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    dispatch(
      loginUser({
        payload,
        onSuccess: (data) => {
          router.push("/chatbot");
        },
      })
    );
  };

  const handleSignup = (e) => {
    router.push("/auth/register");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    router.push("/auth/reset-password");
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-github-secondary text-white  py-6 shadow">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="flex items-center justify-center mb-5">
          {/* <Image src={Logo} alt="logo" className="h-20 w-20" /> */}
          <div className="text-2xl font-bold">
            <span className="text-white hover:text-gray-300">
              <span className="text-github-linkcolor">Innovative</span>{" "}
              Solutions
            </span>
          </div>
        </CardTitle>
        <CardDescription className=" text-white   text-left text-3xl font-bold mb-8">
          Log In
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
          <div className="space-y-2">
            <Input
              placeholder="Email"
              {...register("email")}
              className=" bg-github-primary outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              {...register("password")}
              className="bg-github-primary outline-none focus:outline-none"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          {/* <p
            onClick={handleForgotPassword}
            className="cursor-pointer text-github-linkcolor"
          >
            Forgot Password?
          </p> */}
          <Button
            disabled={isLoading}
            type="submit"
            className="w-full text-base font-semibold bg-github-btnColor hover:bg-green-600 text-white"
          >
            {isLoading ? (
              <ImSpinner6 className="text-white animate-spin" />
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="border-none shadow-flex flex-col items-center justify-center">
        <p className=" pt-5">
          Don't have an account?{" "}
          <Link href="/auth/register">
            <span className="text-github-linkcolor cursor-pointer">
              Sign up
            </span>
          </Link>
        </p>
      </CardFooter>
    </div>
  );
};

export default Login;
