import SideBar from "@/components/allBooksPage/SideBar";
import BookCard from "@/components/shared/BookCard";
import { getAllBooks } from "@/lib/data";
import { SearchBAr } from "@/ui/SearchBar";

const AllBooksPage = async () => {
    const books = await getAllBooks();

    return (
        <div>
            <SearchBAr/>
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-5 justify-between  my-15 rounded-2xl">
                <SideBar />

                <div className="bg-[#0f1512] lg:col-span-3 lg:p-8 rounded-2xl">
                    <h1 className="text-2xl  font-bold mb-5">All books</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 ">
                        {
                            books.map(book =>
                                <BookCard key={book.id}
                                    book={book} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooksPage;