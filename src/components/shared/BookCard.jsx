import { Button} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const BookCard = ({ book }) => {
    return (
        <div className="bg-[#15221c] hover:bg-[#1c2f26] p-5 transition duration-200 flex flex-col space-y-4 rounded-2xl shadow-2xl">

            <div className="bg-[#111a16] md:px-5  py-6  w-auto flex-1  h-auto rounded-2xl grow relative aspect-square">
                <Image className="rounded-2xl object-center relative mx-auto"
                    src={book.image_url} alt={book.title}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <h1 className="font-bold">{book.title}</h1>

            <Link href={`/all-books/${book.id}`}>
                <Button
                    className='w-full bg-[#10b981] hover:bg-[#059669] 
                     transition duration-200 mt-2'>
                    View Details
                </Button>
            </Link>

        </div>
    );
};

export default BookCard;