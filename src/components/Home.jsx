import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    
    className="h-screen w-full bg-[#1f242a] "
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-[#b48d22]">
          Jetson Ku
        </h2>
        <p className="text-[#b48d22] py-4 max-w-md">
          Welcome to my portfolio! Feel free to read more about my background, check out some of the things I've worked on, take a copy of my resume, or contact me!
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-[#1f242a] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#99771c] to-[#b48d22] cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={me}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;