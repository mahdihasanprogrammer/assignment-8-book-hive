import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeDesign = () => {
    return (
        <div className='my-6 py-3 px-3 border-y border-[#059669]'>
            <Marquee
                pauseOnHover={true}
                gradient={true}
                gradientColor="#10b981"
            >
                📚 New Arrivals: Atomic Habits | Clean Code | The Alchemist ✨ Special Discount on Membership 🎉 Borrow Now!
            </Marquee>
        </div>
    );
};

export default MarqueeDesign;