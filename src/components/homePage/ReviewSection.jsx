import { getCustomerReviews } from "@/lib/data";

const ReviewSection =async () => {

    const reviews =await getCustomerReviews();
    console.log(reviews, 'review')
    return (
        <div className="my-15 space-y-10">
            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">What Readers Say</h1>
                <p className="md:max-w-md mx-auto ">See how readers are enjoying a smoother and smarter way to explore and borrow books.</p>
            </div>

            <div>
                
            </div>
        </div>
    );
};

export default ReviewSection;