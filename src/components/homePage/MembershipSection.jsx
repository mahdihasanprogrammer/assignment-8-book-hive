import MembershipCard from "../shared/MembershipCard";


const MembershipSection = () => {
    const membershipCards = [
        {
            "id": 1,
            "title": "Free Reader",
            "price": "0$",
            "description": "Perfect for casual readers who just want to explore and enjoy books occasionally.",
            "features": [
                "Browse all books",
                "Basic search access",
                "Limited borrowing (1 book at a time)"
            ],
            "buttonText": "Get Started",
            "highlight": false
        },
        {
            "id": 2,
            "title": "Premium Reader",
            "price": "5$ / month",
            "description": "For passionate readers who want unlimited access and faster borrowing experience.",
            "features": [
                "Unlimited book borrowing",
                "Priority access to new arrivals",
                "Category filters unlocked",
                "Bookmark favorite books"
            ],
            "buttonText": "Go Premium",
            "highlight": true
        },
        {
            "id": 3,
            "title": "Student Plan",
            "price": "2$ / month",
            "description": "Special plan designed for students who read daily and need affordable access.",
            "features": [
                "Borrow up to 3 books",
                "Access to Tech + Science books",
                "Study-friendly recommendations"
            ],
            "buttonText": "Join Student Plan",
            "highlight": false
        }
    ]



    return (
        <div className="my-10 p-5 md:my-10 md:px-6 md:py-10 rounded-2xl space-y-12 bg-[#0c1411]">
            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">Join Book Hive Membership</h1>
                <p className="md:max-w-md mx-auto text-[#9ca3af] ">Read more books, borrow faster, and unlock a better reading experience built for book lovers like you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
               {
                membershipCards.map(member =><MembershipCard key={member.id}
                member={member}/>)
               }

            </div>
        </div>
    );
};

export default MembershipSection;