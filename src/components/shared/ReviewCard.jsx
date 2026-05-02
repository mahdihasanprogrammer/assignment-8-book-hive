
import { Avatar, Card } from "@heroui/react";


const ReviewCard = ({ review }) => {


    return (
        

            <Card
                className=" bg-[#15221c]/60 border border-[#1c2f26] rounded-xl p-6 hover:bg-[#1c2f26] transition backdrop-blur-3xl
                space-y-2 mx-auto max-w-96 flex flex-col">

                <Avatar className="size-25 mx-auto object-center object-cover">

                    <Avatar.Image
                        alt={review.name} src={review.image} />

                </Avatar>

                <div className="text-center space-y-1 grow">
                    <h1 className="text-lg font-bold">{review.name}</h1>
                    <p className="text-sm text-muted">{review.review}</p>
                </div>
                <div className="text-center"> <p>{review.stars}</p></div>
            </Card>

    );
};

export default ReviewCard;