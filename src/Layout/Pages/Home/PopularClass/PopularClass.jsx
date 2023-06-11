import React from 'react';

const PopularClass = ({ singleclass }) => {
    // const {image,classname,instructorname,seats} = singleclass || {};

    return (
        <div className="card card-compact w-full border border-purple-300  bg-base-100 drop-shadow-lg ">
            <figure><img className='w-full h-64' src={singleclass?.image} alt="classimage" /></figure>
            <div className="card-body">
                <h2 className='text-lg font-semibold font-sans '>Class Name : {singleclass?.classname}</h2>
                <p className='text-lg font-semibold font-sans '>Instructor name : {singleclass?.instructorname}</p>
                <p className='text-lg font-semibold font-sans '>Available seats: {singleclass?.seats}</p>
                <p className='text-lg font-semibold font-sans '>Price: ${singleclass?.price}</p>             
            </div>
        </div>
    );
};

export default PopularClass;