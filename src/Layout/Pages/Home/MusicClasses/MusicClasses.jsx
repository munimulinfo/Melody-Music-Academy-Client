import React from 'react';
import img1 from '../../../../assets/removo image/istockphoto-1409923357-612x612-removebg-preview.png';
import img2 from '../../../../assets/removo image/istockphoto-1150731667-612x612-removebg-preview.png';
import img3 from '../../../../assets/removo image/istockphoto-1363771272-612x612-removebg-preview.png';
import img4 from '../../../../assets/removo image/istockphoto-1399610550-612x612-removebg-preview.png';
import img5 from '../../../../assets/removo image/istockphoto-1438363801-612x612-removebg-preview.png';
import img6 from '../../../../assets/removo image/istockphoto-186875718-612x612-removebg-preview.png';
import img7 from '../../../../assets/removo image/istockphoto-465860352-612x612-removebg-preview.png';
import img8 from '../../../../assets/removo image/istockphoto-470436859-612x612-removebg-preview.png';
import img9 from '../../../../assets/removo image/istockphoto-528068196-612x612-removebg-preview.png';
import img0 from '../../../../assets/removo image/istockphoto-628606042-612x612-removebg-preview.png';

const MusicClasses = () => {
    return (
        <div>
            <h1 className='text-center text-6xl font-bold font-sans uppercase'>Music Classes</h1>
            <h1 className='text-center text-lg mt-4'>EXPLORE OUR MUSIC CLASSES</h1>
            <div className='grid lg:grid-cols-5 justify-center gap-5 mt-16 mb-24 lg:px-8'>
                <div className='flex justify-center items-center flex-col '>
                    <div className='w-20 '>
                     
                       <img  className='w-full' src={img4} alt="music" />
                    </div>
                    <h1  className="text-lg mt-1 mb-1 text-pink-600">GUITER</h1>
                    <p className='text-center'>Classical guitar is typically Spanish-derived.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img2} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">PIANO</h1>
                    <p className='text-center'>The most versatile keyboard instrument.</p>
                </div>
                <div  className='flex justify-center items-center flex-col'>
                    <div className='w-24 p-4' >     
                       <img className='w-full' src={img3} alt="music" />
                    </div>
                    <h1 className='text-lg mt-1 mb-1 text-pink-600'>VIOLONCELLO</h1>
                    <p className='text-center'>Known as the bass of the violin family.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img0} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">SAXOPHONE</h1>
                    <p className='text-center'>From classical music to jazz, sax has it all.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img5} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">BALALAIKA</h1>
                    <p className='text-center'>A Russian stringed musical instrument.</p>
                </div>
                <div className='flex justify-center items-center flex-col '>
                    <div className='w-20 '>
                 
                    <img className='w-full' src={img7} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">FLUTE</h1>
                    <p className='text-center'>An aerophone with a storied past.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img1} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">VOCAL</h1>
                    <p className='text-center'>Improve your vocals: either solo or in a choir.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img8} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">TRUMPET</h1>
                    <p className='text-center'>One of the most ancient instruments.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img6} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">DRUM</h1>
                    <p className='text-center'>Find your place in the percussion section.</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div className='w-20 '>
                    <img className='w-full' src={img9} alt="music" />
                    </div>
                    <h1 className="text-lg mt-1 mb-1 text-pink-600">TUBA</h1>
                    <p className='text-center'>The lowest-pitched brass instrument.</p>
                </div>


            </div>
        </div>
    );
};

export default MusicClasses;