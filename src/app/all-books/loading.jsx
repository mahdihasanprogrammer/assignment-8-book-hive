import React from 'react';
import { PulseLoader } from 'react-spinners';

const AllBooksLoading = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <PulseLoader
                color="#10b981"
                size={20} />
        </div>
    );
};

export default AllBooksLoading;