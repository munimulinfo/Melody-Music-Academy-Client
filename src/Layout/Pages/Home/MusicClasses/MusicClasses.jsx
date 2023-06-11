import React from 'react';
import { FaGuitar } from 'react-icons/fa';

const MusicClasses = () => {
    return (
      <div>
          <div className='grid lg:grid-cols-5 gap-3 mt-24 mb-24 px-8'>
            <div className='flex justify-center items-center flex-col'>
                <div>
                     <FaGuitar></FaGuitar>
                </div>
                <h1>GUITER</h1>
                <p className='text-center'>Classical guitar is typically Spanish-derived.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>PIANO</h1>
                <p className='text-center'>The most versatile keyboard instrument.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>VIOLONCELLO</h1>
                <p className='text-center'>Known as the bass of the violin family.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>SAXOPHONE</h1>
                <p className='text-center'>From classical music to jazz, sax has it all.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>BALALAIKA</h1>
                <p>A Russian stringed musical instrument.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>FLUTE</h1>
                <p className='text-center'>An aerophone with a storied past.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>VOCAL</h1>
                <p className='text-center'>Improve your vocals: either solo or in a choir.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>TRUMPET</h1>
                <p className='text-center'>One of the most ancient instruments.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>DRUM</h1>
                <p className='text-center'>Find your place in the percussion section.</p>
            </div>
            <div  className='flex justify-center items-center flex-col'>
                <div>

                </div>
                <h1>TUBA</h1>
                <p className='text-center'>The lowest-pitched brass instrument.</p>
            </div>


        </div>
      </div>
    );
};

export default MusicClasses;