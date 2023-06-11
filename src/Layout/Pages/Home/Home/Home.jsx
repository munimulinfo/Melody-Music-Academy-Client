import React from 'react';
import Slider from '../../Shared/Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: popularclasses = [] } = useQuery(['popularclasses'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    console.log(popularclasses);

    return (
        <div>
            <Slider></Slider>
            <div className='lg:px-8 px-1'>
                <h1 className='text-4xl  text-center mt-24 font-semibold font-sans'>Melody Music Academy Popular Classes</h1>
                <div className='grid lg:grid-cols-3 gap-10 mt-24 mb-24'>
                    {
                        popularclasses?.map(singleclass => <PopularClass
                            key={singleclass?._id}
                            singleclass={singleclass}
                        ></PopularClass>)
                    }
                </div>
            </div>
            <PopularInstructor></PopularInstructor>

        </div>
    );
};

export default Home;