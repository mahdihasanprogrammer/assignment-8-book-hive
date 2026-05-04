import { Button } from '@heroui/react';


const BorrowBook = ({handleBorrow}) => {
    return (
        <Button onClick={handleBorrow}
            className=' bg-[#16ad7b] hover:bg-[#05835b] 
                     transition duration-300'>
            Borrow This Book
        </Button>
    );
};

export default BorrowBook;