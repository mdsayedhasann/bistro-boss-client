import React from 'react';

const SectionHeading = ({heading, subheading}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            
            <h4 className='text-base text-yellow-500 my-2'>
                ---{subheading}---
            </h4>
            <h2 className='text-3xl uppercase border-y-2 mb-4 py-3'>
                {heading}
            </h2>
            
        </div>
    );
};

export default SectionHeading;