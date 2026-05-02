"use client";


import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaEdit, FaUserEdit } from "react-icons/fa";

export function UpdateProfile() {

    const handleUpdateUser = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log('name', name)

        await authClient.updateUser({
            name: name,
            image: image
        })

    }

    return (
        <Modal>
            <Button className={'hover:bg-[#10b981] bg-[#059669] backdrop-blur-md mt-3'}><FaEdit /> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-sm bg-[#111a16]/80 backdrop-blur-md border border-[#1c2f26]">

                        <Modal.CloseTrigger className="bg-[#059669]/10 backdrop-blur-md border border-[#1c2f26] text-[#e7f5ee]" />
                        <Modal.Header>
                            <Modal.Icon className="bg-[#059669]/10  backdrop-blur-md text-[#059669]">
                                <FaUserEdit />
                            </Modal.Icon>
                            <Modal.Heading className="mb-3 text-lg text-[#e7f5ee]">update information</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <Surface variant="none">
                                <form onSubmit={handleUpdateUser}
                                    className="flex flex-col gap-4 ">

                                    <TextField
                                    className="w-full" name="name" type="text">
                                        <Label className="text-[#9ca3af]">Name</Label>
                                        <Input className='bg-[#0f1512] border border-[#1c2f26] focus:border-[#10b981] outline-none text-[#e7f5ee]'
                                            placeholder="Enter your Name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label className="text-[#9ca3af]">Photo url</Label>
                                        <Input className='bg-[#0f1512] border border-[#1c2f26] focus:border-[#10b981] outline-none text-[#e7f5ee]'
                                            placeholder="photo url" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="danger">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit"
                                            className={'hover:bg-[#10b981] bg-[#059669] backdrop-blur-3xl'}>Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}