"use client"

import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { use, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiX } from "react-icons/fi";



export function SearchBAr() {

    const [value, setValue] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSearch = (e) => {
        e.preventDefault();


        const params = new URLSearchParams(searchParams);
        console.log('this is e', value)

        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }

        router.push(`?${params.toString()}`)
    }

    return (
        <form onSubmit={handleSearch}
            className=" mb-4 flex gap-2 justify-center items-center">

            <div className="flex  justify-center items-center relative w-full max-w-md ">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 z-50  text-[#9ca3af]" />
                <input
                    onChange={(e) => { setValue(e.target.value) }}
                    className="w-full bg-[#111a16] border border-[#1c2f26] focus:outline-2 focus:outline-[#10b981] text-[#e7f5ee] backdrop-blur-3xl rounded-md h-9 px-10 placeholder:px-6 "
                    type="text"
                    placeholder={`Search...`}
                    value={value}
                    name="search"
                />

                {
                    value &&
                    <FiX onClick={() => { setValue('') }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10" />
                }


            </div>
            <Button
                className='hover:bg-[#10b981] bg-[#059669] 
                transition duration-300 rounded-md h-8.5'
                type="submit">Search
            </Button>

        </form>
    );
}



