import React from 'react';

import Myprofile from '../assets/myprofile.jpg';


const About = () => {
  return (
    <div name='about' className='w-full h-full bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='mt-8 text-2xl font-bold'>
            <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-8/12 px-4 mx-auto">
              <img src={Myprofile} alt="..." className="shadow rounded-md max-w-full h-auto align-middle border-none" />
            </div>
  </div>
              
               </div>
            <div className='mt-[90px] text-md'>
            <p className='text-3xl mb-2 font-bold'>Jesutofunmi Sojimi</p>
              <p>
              I enjoy collaborating with others to create meaningful products and experiences that meet users' needs and 
              business objectives. My experience cuts across Fintech, Telecoms, Agro and Edu-tech.
              My extensive experience over the years, which is still growing, has produced several valuable software products 
              and my work has also inspired other developers to do even more good work. 
              <br /> <br />
              I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if there's
              a project that requires expertise? Hit me up!
             
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;