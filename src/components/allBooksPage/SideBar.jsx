import { getCategories } from "@/lib/data";

const SideBar = async () => {
    const categories = await getCategories();

    return (
        <div className="rounded-2xl p-8 bg-[#0f1512] lg:bg-none">
            <h1 className="text-2xl mb-5 font-bold">Categories</h1>
            <ul className="space-y-4">
                {
                    categories.map(category => <li className="hover:text-[#10b981] cursor-pointer">{category.name}</li>)
                }
            </ul>
        </div>
    );
};

export default SideBar;