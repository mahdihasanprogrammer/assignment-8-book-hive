import { getCategories } from "@/lib/data";
import Link from "next/link";

const SideBar = async () => {
    const categories = await getCategories();

    return (
        <div className="rounded-2xl p-8 bg-[#0f1512] lg:bg-none animate__animated animate__slideInLeft">
            <h1 className="text-2xl mb-5 font-bold">Categories</h1>
            <ul className="space-y-2">
                {
                    categories.map(category =>
                     <Link key={category.id} href={`?category=${category.name.toLowerCase()}`}
                     className="block">
                        <li className="hover:text-[#10b981] cursor-pointer">{category.name}</li>
                    </Link>)
                }
            </ul>
        </div>
    );
};

export default SideBar;