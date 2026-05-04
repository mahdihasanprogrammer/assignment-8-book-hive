"use client"

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


const BorrowBook = () => {
    const router = useRouter();
    const { data: session } = authClient.useSession();

    const handleBorrow = () => {
        if (!session) {
            router.push('/auth/login')
        }
        else {
            toast.warning('you are already logged in');
        }
    }
    return (
        <Button onClick={handleBorrow}
            className=' bg-[#16ad7b] hover:bg-[#05835b] 
                     transition duration-300'>
            Borrow This Book
        </Button>
    );
};

export default BorrowBook;