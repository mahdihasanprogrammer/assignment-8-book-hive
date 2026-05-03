"use client";
import { authClient } from "@/lib/auth-client";
import SkeletonFile from "@/ui/SkeletonFile";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const router = useRouter();
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

    const links = <>
        <Link href={'/'}>
            <li className="hover:text-[#10b981] cursor-pointer">Home</li>
        </Link>

        <Link href={'/all-books'}>
            <li className="hover:text-[#10b981] cursor-pointer">All Books</li></Link>

        <Link href={'/my-profile'}>
            <li className="hover:text-[#10b981] cursor-pointer">My Profile</li>
        </Link>
    </>

    return (
        <div className="container mx-auto  border-b border-[#1c2f26]">
            <nav className="bg-[#0a0f0d]/70  flex flex-wrap justify-between items-center px-4 md:px-8 lg:px-12  py-4">

                <div className="flex gap-3 items-center relative">

                    <div className="">

                        <span className="md:hidden">
                            {menu ?
                                <GrClose onClick={() => { setMenu(!menu) }}
                                    size={20} />

                                : <RiMenu2Line onClick={() => { setMenu(!menu) }}
                                    size={20} />}
                        </span>
                        {
                            menu &&
                            <ul className=" md:hidden w-40 p-5  absolute z-10 top-12  bg-[#111a16]/80 backdrop-blur-md border border-[#1c2f26] rounded-md flex flex-col gap-2">
                                {links}
                            </ul>
                        }
                    </div>
                    <Link href={'/'}>
                        <Image
                            src={"/logo-resize.png"}
                            alt="logo"
                            loading="eager"
                            width={100}
                            height={50}

                        />
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-8 text-sm ">
                    {links}
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