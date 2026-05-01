import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const BookCard = ({ book }) => {
    return (
        <div className="bg-[#15221c] hover:bg-[#1c2f26] p-5 transition duration-200 flex flex-col space-y-4 rounded-2xl shadow-2xl">

            <div className="bg-[#111a16] md:px-5  py-6  w-auto flex-1  h-auto rounded-2xl grow relative aspect-square">
                <Image className="rounded-2xl object-center mx-auto"
                    src={book.image_url} alt={book.title}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <div className="space-y-2 border-b border-[#34d399]/30 pb-4">
                <h1 className="font-bold">{book.title}</h1>
                <p className="text-[#9ca3af] text-sm">by {book.author}</p>
            </div>

            <div className="flex justify-between gap-5 items-center">
                <p className="text-sm text-[#d1d5db]">
                    Quantity: <span className="font-bold">{book.available_quantity}</span>
                </p>
                <Chip className={`${book.category === 'Tech' ? 'bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30'
                    : book.category === 'Story' ? "bg-[#fbbf24]/15 text-[#fbbf24] border border-[#fbbf24]/30" : "bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30"
                    }`}
                >{book.category}</Chip>
            </div>

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