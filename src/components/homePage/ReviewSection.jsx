import { reviews } from "@/lib/data";
import ReviewCard from "../shared/ReviewCard";


const ReviewSection =() => {

    const customerReview = reviews;
    console.log(customerReview, 'review')

    return (
        <div className="my-10 p-5 md:my-10 md:px-6 md:py-10 rounded-2xl space-y-12 bg-[#0f1512]">
            <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">What Readers Say</h1>
                <p className="md:max-w-md mx-auto text-[#9ca3af] ">See how readers are enjoying a smoother and smarter way to explore and borrow books.</p>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
            {
                customerReview.map(review => 
                <ReviewCard review={review}
                 key={review.id}/>)
            }
           </div>
        </div>
    );
};

export default ReviewSection;