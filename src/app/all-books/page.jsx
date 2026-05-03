
import SideBar from "@/components/allBooksPage/SideBar";
import BookCard from "@/components/shared/BookCard";
import { getAllBooks } from "@/lib/data";
import { SearchBAr } from "@/ui/SearchBar";


const AllBooksPage = async ({ searchParams }) => {

    const { category, search } = await searchParams;
    console.log(category, 'this is category')

    const books = await getAllBooks();
    const filteredBooks = books.filter(book => {

        if (search) {
            return book.title.toLowerCase().includes(search.toLowerCase())
        }

        if (category) {
            return book.category.toLowerCase() === category.toLowerCase();
        }

        return books;

    })
    return (
        <div className="my-10">
            <SearchBAr />
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 justify-between rounded-2xl">
                <SideBar />

                <div className="bg-[#0f1512]  
                animate__animated animate__slideInUp 
                 lg:col-span-3 p-4 lg:p-8 rounded-2xl">

                    <h1 className="text-3xl  font-bold mb-5">All books</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
                        {
                            filteredBooks?.map(book =>
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