import { Button, Card } from '@heroui/react';
import { GrCheckmark } from 'react-icons/gr';


const MembershipCard = ({ member }) => {
    return (
        <Card
            className={` hover:-translate-y-2.5 duration-300 
                bg-[#15221c]/60 border border-[#1c2f26] rounded-xl p-6 hover:bg-[#1c2f26] transition backdrop-blur-3xl
                       space-y-2 mx-auto max-w-md flex flex-col
                       ${member.highlight && 'border-2 border-[#10b981]/90 shadow-[0_0_60px_rgba(16,185,129,0.2)]'}`}>

            <div className=" space-y-1 ">
                <h1 className="text-xl font-bold">{member.title}</h1>
                <p className="text-2xl text-[#10b981]">{member.price}</p>
            </div>
            <div className="text-[#9ca3af] grow"> <p>{member.description}</p></div>
            <ul className='text-[#d1d5db]'>
                {
                    member.features.map((feature, index) =>
                        <li className='flex items-center gap-3'
                            key={index}>
                          <GrCheckmark color='#10b981' />  {feature}
                        </li>)
                }
            </ul>
            <Button  className={`w-full
            ${member.highlight  ?'bg-[#10b981]' : "bg-[#10b981]/70"}`}
            >{member.buttonText}</Button>
        </Card>
    );
};

export default MembershipCard;