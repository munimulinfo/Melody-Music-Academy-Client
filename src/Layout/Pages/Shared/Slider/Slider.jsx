import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import img3 from '../../../../assets/image/nnn.jpg';
import img4 from '../../../../assets/image/istockphoto-1153626393-612x612.jpg';
import img5 from '../../../../assets/image/istockphoto-872697992-170667a.webp';
import img6 from '../../../../assets/image/istockphoto-928088742-612x612.jpg';
const Slider = () => {
    return (
        <div className='mt-44 lg:mt-3 mb-16'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-96 lg:h-[600px]'>
                     <img className='w-full h-full  contrast-100 ' src={img3} alt="slideer" />
                     </div>
                </SwiperSlide>
                <SwiperSlide>
                    
                    <div className='flex justify-center items-center w-full h-96 lg:h-[600px] rounded-lg'>
                     <img className='w-full h-full contrast-100' src={img4} alt="slideer" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-96 lg:h-[600px]'>
                     <img className='w-full h-full contrast-100 ' src={img5} alt="slideer" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-96 lg:h-[600px]'>
                     <img className='w-full h-full contrast-100 ' src={img6} alt="slideer" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider;