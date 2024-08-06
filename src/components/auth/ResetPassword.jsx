"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

import { resetPasswordSchema } from "@/schemas/authSchema";
import Image from "next/image";


const ResetPassword = () => {
    const router = useRouter();
    const [emailSent, setEmailSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(resetPasswordSchema),
    });

    const handleResetPassword = (data) => {
        setEmailSent(!emailSent);
        // navigate("/");
    };
    const handleBackToLogin = (data) => {
        // setEmailSent(!emailSent);
        router.push("/auth/login");
    };

    return (
        <>
            {emailSent ? (
                <Card className="w-full  max-w-md rounded-lg bg-white border shadow-none">
                    <CardHeader className="space-y-2 text-center">
                        <CardTitle className="flex items-center justify-center mb-5">
                        {/* <Image src={Logo} alt="logo" className="h-20 w-20" /> */}
                        </CardTitle>
                        <CardDescription className="text-black text-2xl font-bold mb-8">
                            Please check your email
                        </CardDescription>
                        <CardDescription className="text-black text-base font-normal mb-8">
                            We sent you an email, which contains a link to reset
                            your Skool password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit(handleBackToLogin)}
                        >
                            <Button
                                onClick={handleBackToLogin}
                                className="w-full text-base font-semibold bg-[#F8D481]  text-black"
                            >
                                BACK TO LOG IN
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            ) : (
                <Card className="w-full max-w-md rounded-lg bg-white border shadow-none">
                    <CardHeader className="space-y-2 text-center">
                        <CardTitle className="flex items-center justify-center mb-5">
                        <Image src={Logo} alt="logo" className="h-20 w-20" />

                        </CardTitle>
                        <CardDescription className="text-black text-2xl font-bold mb-8">
                            Forgot password
                        </CardDescription>
                        <CardDescription className="text-black text-base font-normal mb-8">
                            Enter your email address and we'll send you a link
                            to reset your password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit(handleResetPassword)}
                        >
                            <div className="space-y-2">
                                <Input
                                    placeholder="Email"
                                    {...register("email")}
                                    className="placeholder:text-gray-500 dark:placeholder:text-gray-400"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <Button
                                onClick={handleResetPassword}
                                className="w-full text-base font-semibold bg-[#F8D481]  text-black"
                            >
                                EMAIL ME
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </>
    );
};

export default ResetPassword;
