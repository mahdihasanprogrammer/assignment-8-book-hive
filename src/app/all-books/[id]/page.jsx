
import { getAllBooks } from "@/lib/data";
import { Chip } from "@heroui/react";
import Image from "next/image";
import BorrowBook from "@/ui/BorrowBook";


const BookDetailsPage = async ({ params }) => {
    const { id } = await params;

    const books = await getAllBooks();
    const book = books.find(b => b.id == id);
    console.log(book);


  

    return (
        <section className=" bg-[#15221c] hover:bg-[#1c2f26]
        my-6 px-5 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-center items-center  rounded-2xl gap-10">

            <div className=" md:w-66">
                <Image src={book.image_url}
                    width={320}
                    height={200}
                    alt={book.title}
                    sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <div className="flex-1 space-y-6">
                <div className="space-y-2 border-b border-[#34d399]/30 pb-6">
                    <h1 className="text-2xl font-bold">{book.title}</h1>
                    <p className="text-[#9ca3af] text-sm">by {book.author}</p>
                    <p className="text-justify">{book.description}</p>
                </div>

                <div className="flex  gap-10 items-center">
                    <p className="text-base text-[#d1d5db]">
                        Available Quantity: <span className="font-bold">{book.available_quantity}</span>
                    </p>
                    <Chip className={`${book.category === 'Tech' ? 'bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30'
                        : book.category === 'Story' ? "bg-[#fbbf24]/15 text-[#fbbf24] border border-[#fbbf24]/30" : "bg-[#34d399]/15 text-[#34d399] border border-[#34d399]/30"
                        }`}
                    >{book.category}</Chip>
                </div>


                <BorrowBook />

            </div>
        </section>
    );
};

export default BookDetailsPage;