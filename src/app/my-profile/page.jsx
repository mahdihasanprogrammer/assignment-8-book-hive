"use client"
import { UpdateProfile } from "@/components/myProfilePage/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Spinner, } from "@heroui/react";

const MyProfilePage = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;
    console.log('user', user)
    return (
        <div className="flex justify-center items-center h-[80vh]">
            {
                isPending ?
                    <div className="flex flex-col items-center gap-2">
                        <Spinner size="xl" color="success" />
                    </div>
                    :
                    <Card
                        className="space-y-2 mx-auto max-w-96 p-10 bg-[#111a16]/80 backdrop-blur-md border border-[#1c2f26] ">

                        <Avatar className="size-30 mx-auto object-center object-cover">
                            <Avatar.Image alt={user?.name} src={user?.image} />
                            <Avatar.Fallback className="bg-[#1c2f26] text-2xl text-white">{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <div className="text-center space-y-1">
                            <p className="text-xl font-bold">{user?.name}</p>
                            <h1 className="text-muted">{user?.email}</h1>
                           <UpdateProfile/>
                        </div>

                    </Card>}
        </div>
    );
};

export default MyProfilePage;