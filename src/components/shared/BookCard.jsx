import { Button, Card, Chip} from "@heroui/react";
import Image from "next/image";


const BookCard = ({ book }) => {
    return (
        <div>
            <Card className="bg-[#15221c] p-6 ">
                <div className="bg-[#111a16] md:px-5  py-6 w-auto h-auto rounded-2xl ">
                    <Image className="rounded-md w-auto   h-auto mx-auto"
                        src={book.image_url} alt={book.title}
                        width={180} height={100}/>
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

                <Button
                    className='w-full bg-[#10b981] mt-3'>
                    View Details
                </Button>
            </Card>
        </div>
    );
};

export default BookCard;