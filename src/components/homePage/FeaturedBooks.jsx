import { getAllBooks } from "@/lib/data";
import BookCard from "../shared/BookCard";

const FeaturedBooks = async () => {
    const books = await getAllBooks();
    console.log(books)

    return (
        <div className="bg-[#111a16] my-15 p-4 rounded-2xl ">
            <h1 className="text-2xl font-bold mb-5">Top books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                {
                    books.slice(0, 4).map(book =>
                        <BookCard key={book.id}
                            book={book} />)
                }
            </div>
        </div>
    );
};

export default FeaturedBooks;