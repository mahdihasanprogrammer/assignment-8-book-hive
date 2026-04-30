import { Button } from '@heroui/react';
import Image from 'next/image';


const Hero = () => {
    return (
        <div className="bg-[#0f1f18] px-5 rounded-2xl justify-center items-center
         my-15 py-15 md:px-15 grid grid-cols-1 md:grid-cols-2 gap-15 ">
            <div className='space-y-3'>
                <h1 className='text-3xl md:text-5xl font-bold'>Find Your Next Great Read</h1>
                <p className='text-[#d1d5db]'>Discover thousands of books across stories, tech, and science  borrow anytime,</p>
                <Button className='mt-4 bg-[#10b981] hover:bg-[#059669] transition duration-300'>Browse Now</Button>
            </div>

            <div>
                <Image
                    src='/hero_img.jpg'
                    alt='banner image'
                    width={500}
                    height={500}
                    className='rounded-xl shadow-2xl'
                />

            </div>
        </div>
    );
};

export default Hero;