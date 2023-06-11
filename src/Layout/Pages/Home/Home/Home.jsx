import React from 'react';
import Slider from '../../Shared/Slider/Slider';
import PopularClass from '../PopularClass/PopularClass';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import MusicClasses from '../MusicClasses/MusicClasses';
import Aboutus from '../Aboutus/Aboutus';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: popularclasses = [] } = useQuery(['popularclasses'], async () => {
        const res = await axiosSecure.get('/popularclasses')
        return res.data;
    })
    console.log(popularclasses);

    return (
        <div>
            <Helmet>
                <title>Melody Music/Home</title>
            </Helmet>
            <Slider></Slider>
            <div className='lg:px-8 px-1'>
                <h1 className='lg:text-5xl text-2xl text-center mt-24 font-extrabold font-sans'>Melody Music Academy<br/> Popular Classes</h1>
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
            <MusicClasses></MusicClasses>
            <Aboutus></Aboutus>
        </div>
    );
};

export default Home;