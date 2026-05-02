"use client";
import { authClient } from "@/lib/auth-client";
import SkeletonFile from "@/ui/SkeletonFile";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router =useRouter();
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login"); // redirect to login page
                },
            },
        });
    }

    return (
        <div className="container mx-auto  border-b border-[#1c2f26] animate__animated animate__slideInDown">
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

                <ul className="flex items-center gap-8 text-sm">
                    <Link href={'/'}>
                        <li className="hover:text-[#10b981] cursor-pointer">Home</li>
                    </Link>

                    <Link href={'/all-books'}>
                        <li className="hover:text-[#10b981] cursor-pointer">All Books</li></Link>

                    <Link href={'/my-profile'}>
                        <li className="hover:text-[#10b981] cursor-pointer">My Profile</li>
                    </Link>
                </ul>

                {isPending ?
                    <SkeletonFile /> :

                    user ?
                        <div className="flex items-center gap-4">
                            <div className="text-xs">
                                <span>hello !</span>
                                <p>{user?.name || 'user'}</p>
                            </div>
                           
                                <Button onClick={handleLogout}
                                    className="hover:bg-[#ef4444] bg-[#dc2626]   transition duration-300 rounded-md"
                                    size="sm"> Logout
                                </Button>
                        </div>
                        :
                        <Button className="hover:bg-[#10b981] bg-[#059669] 
                     transition duration-300 rounded-md"
                            size="sm">
                            <Link href={'/auth/login'}>Login</Link>
                        </Button >}

            </nav>
        </div>
    );
};

export default Navbar;