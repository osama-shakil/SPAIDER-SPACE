"use client";
import { getFirebase } from "@/lib/firebaseUtils";
import { SignUpSchema } from "@/schemas/authSchema";
import { registerUser } from "@/store/user/userThunk";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner6 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Input } from "../ui/input";
import { VerificationModal } from "./modal/VerificationModal";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const [payload, setPayload] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "onChange",
  });

  const handleSignup = (data) => {
{}
    dispatch(
      registerUser({
        payload: data,
        onSuccess: () => {
          router.push("/auth/login");
        },
        onError: () => {},
      })
    );
   

  };
  const onVerify = () => {};
  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  const sendVerification = async () => {
    console.log("payload.email: ", payload.email);
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain for this URL must be in the authorized domains list in the Firebase Console.
      url: "http://localhost:3000/after-verification", // Adjust this as per your frontend setup
      handleCodeInApp: true,
    };
    const firebase = await getFirebase();
    try {
      await firebase
        .auth()
        .sendSignInLinkToEmail(payload.email, actionCodeSettings);

      toggle();
    } catch (error) {
      console.error("error: ", error);
      toast.error(error.message);
      //   setError({ message: error.message });
    }
  };
  return (
    <>
      <div className="w-full max-w-md rounded-lg bg-github-secondary text-white  border-zinc-200  shadow">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold flex items-center justify-center mb-5">
            Sign Up
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="First Name"
                {...register("firstName")}
                className=" bg-github-primary border-zinc-200  outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Last Name"
                {...register("lastName")}
                className=" bg-github-primary outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                type="email"
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
                type="password"
                placeholder="Password"
                {...register("password")}
                className=" bg-github-primary outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full text-base font-semibold bg-github-btnColor hover:bg-green-600 text-white"
            >
              {isLoading ? (
                <ImSpinner6 className="text-white animate-spin" />
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-none shadow-flex flex-col items-center justify-center">
          <p className="text-[#909090] text-sm">
            By signing up, you accept our{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => {}}
            >
              terms
            </span>{" "}
            and{" "}
            <span
              className="underline cursor-pointer"
              onClick={() =>{}}
            >
              privacy policy
            </span>
            .
          </p>
          <p className="text-whitw pt-5">
            Already have an account?{" "}
            <span
              className="text-[#2E6EF5] cursor-pointer"
              onClick={handleLogin}
            >
              Log in
            </span>
          </p>
        </CardFooter>
      </div>
      {isOpen && (
        <VerificationModal
          isOpen={isOpen}
          toggle={toggle}
          onVerify={onVerify}
          payload={payload}
        />
      )}
    </>
  );
};

export default SignUp;
