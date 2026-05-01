"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="container mx-auto  border-b border-[#1c2f26]">
            <nav className="bg-[#0a0f0d]/70 backdrop-blur-md flex flex-wrap justify-between items-center px-5 md:px-8 lg:px-12  py-3">
                <div className="flex gap-2 items-center">
                    {/* <Image
            src={"/logo.svg"}
            alt="logo"
            loading="eager"
            width={20}
            height={20}
            className="object-cover h-auto w-auto"
          /> */}
                    <Link href={'/'}>
                        <h3 className="font-black text-lg text-[#10b981]">BookHive</h3>
                    </Link>
                </div>

                <ul className="flex items-center gap-5 text-sm">
                    <Link href={'/'}>
                        <li className="hover:text-[#10b981] cursor-pointer">Home</li>
                    </Link>

                    <Link href={'/all-books'}>
                        <li className="hover:text-[#10b981] cursor-pointer">All Books</li></Link>

                    <Link href={'/my-profile'}>
                        <li className="hover:text-[#10b981] cursor-pointer">My Profile</li>
                    </Link>
                </ul>

                <div className="flex gap-4">
                    <div className="flex items-center gap-4 text-sm">

                        <Button  className="bg-[#10b981] hover:bg-[#059669] 
                     transition duration-300">
                            <Link href={'/auth/login'}>Login</Link>
                        </Button >

                        <Button className="bg-[#ef4444] hover:bg-[#dc2626]   transition duration-300">
                            <Link href={"/"}>Logout</Link>
                        </Button>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;