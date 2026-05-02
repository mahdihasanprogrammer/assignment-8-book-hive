"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField, } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginPage() {

    const [show, setShow]= useState(false)

    const onSubmit =async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log('email,pass', email, password);

        const {data, error} =await authClient.signIn.email({
            email,
            password,
            callbackURL:'/'
        })
        
        if(error){
            toast.error(error.message)
        }
        console.log('login',data,error)

    };

    return (
        <div className="min-h-screen flex justify-center items-center  py-10">
            <Form className="w-full flex max-w-sm flex-col mx-auto gap-4 bg-[#111a16]/80 backdrop-blur-md border border-[#1c2f26] rounded-2xl p-6 "
                onSubmit={onSubmit}>
                <h1 className="text-center text-2xl font-bold text-[#e7f5ee]">Login your account</h1>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label className="text-[#9ca3af]">Email</Label>
                    <Input className='bg-[#0f1512] border border-[#1c2f26] focus:border-[#10b981] outline-none text-[#e7f5ee]'
                        placeholder="Enter your email" />
                    <FieldError />
                </TextField>

                <TextField
                className={'relative'}
                    isRequired
                    minLength={8}
                    name="password"
                    type={show ? 'text':'password'}
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label className="text-[#9ca3af]">Password</Label>
                    <Input className='bg-[#0f1512] border border-[#1c2f26] focus:border-[#10b981] outline-none text-[#e7f5ee]' placeholder="Enter your password" />

                    <span onClick={() => { setShow(!show) }}
                        className=" absolute top-8.5 right-3">
                        {show ? <FaEye color="#9ca3af" /> : <FaEyeSlash color="#9ca3af" />}
                    </span>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button className={'hover:bg-[#10b981] bg-[#059669] text-white w-full'} type="submit">
                        Login
                    </Button>
                </div>
                <div className=" space-y-2 w-full">

                    <div className="flex justify-center items-center gap-3">
                        <div className="border w-full border-[#1c2f26]"></div>
                        <p className="flex items-center justify-center text-[#6b7280]">or</p>
                        <div className="border w-full border-[#1c2f26]"></div>
                    </div>

                    <Button className="bg-[#15221c] border border-[#1c2f26] text-[#e7f5ee] w-full py-5">
                        <FcGoogle />
                        Login with Google
                    </Button>

                </div>
                <p className="text-sm text-[#9ca3af] text-center">
                    Don't have an account?{" "}
                    <Link href={'/auth/register'}>
                        <span className="text-[#34d399] hover:underline cursor-pointer">
                            Register
                        </span>
                    </Link>
                </p>
            </Form>
        </div>
    );
}