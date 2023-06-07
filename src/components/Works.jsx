import React from 'react';
import code from '../assets/code2.png';
import darko from '../assets/darko.png';
import bdcup from '../assets/bdcup.png';
import ndfdfv from '../assets/ndfdfv.png';
import wcbb from '../assets/wcbb.png';
import draft from '../assets/draft.png';
import nil from '../assets/nil.png';

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen  bg-[#1f242a]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-[#b48d22]  border-[#b48d22]'>
            Work
          </p>
          <p className='py-6 text-2xl text-[#b48d22]'>Check out some of my most recent work</p>
        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${darko})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                NHL DARKO
              </span>
              <p className='text-center m-2'>An NHL projection model</p>
              <div className='text-center'>
                <a href='https://nhl-darko.herokuapp.com/compare' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Site
                  </button>
                </a>
                <a href='https://github.com/jetsonku/NHLDarko' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bdcup})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                Big Data Cup 2021
              </span>
              <p className='text-center m-2'>My submission to Stathletes' Big Data Cup in 2021</p>
              <div className='text-center'>
                <a href='https://www.terpconnect.umd.edu/~jetsonku/jetsonku_big_data_cup.pdf' target='_blank'>
                  <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Paper
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ndfdfv})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                NDFD Comparative Forecast Verification
              </span>
              <p className='text-center m-2'>My project with the National Weather Service</p>
              <div className='text-center'>
                <a href='https://docs.google.com/presentation/d/e/2PACX-1vTFq1kN1jLwQP9PED47gNgWkjeZhiROSGqpzTu_VwU54FDF-7Zg5nxlen0cPBE6MjGzFFmx4syy6QhW/pub?start=false&loop=false&delayms=60000&slide=id.p' target='_blank'>
                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Presentation
                  </button>
                </a>
                <a href='https://github.com/jetsonku/jetsonku.github.io/blob/main/queries.py' target='_blank'>
                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${wcbb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                Women's College Basketball Rosters
              </span>
              <p className='text-center m-2'>A roster dataset, cleaned and standardized by my JOUR479X class</p>
              <div className='text-center'>
              <a href='https://github.com/Sports-Roster-Data/womens-college-basketball' target='_blank'>
              <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${draft})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                NHL Draft Pick Value
              </span>
              <p className='text-center m-2'>My final project for JOUR479X</p>
              <div className='text-center'>
                <a href='https://jetsonku.github.io/sportsdatablog/2022/12/05/nhl-draft-pick-value/' target='_blank'>
                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Blog
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${nil})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
            <span className=' text-lg text-center pt-8 font-bold text-[#1f242a]   tracking-wider'>
                Defining a Kevin Willard Team
              </span>
              <p className='text-center m-2'>Profiling Maryland's new basketball coach based on clustering past data</p>
              <div className='text-center'>
                <a href='https://jetsonku.github.io/sportsdatablog/2022/11/15/what-defines-a-kevin-willard-team/' target='_blank'>
                <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Blog
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Works;