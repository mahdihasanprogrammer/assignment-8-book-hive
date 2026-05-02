import React from 'react';
import { BeatLoader } from 'react-spinners';

const MyProfilePageLoading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <BeatLoader color='#10b981' size={20}/>
        </div>
    );
};

export default MyProfilePageLoading;