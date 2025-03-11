import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-300">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          JESUTOFUNMI SOJIMI
        </h1>
        <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">
          An Experienced Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a software engineer currently solving problems in Tech with
          expertise in building exceptional digital experiences and products.
          Presently, I’m focused on building responsive web applications and
          collaborating with teams. With over 4 years of experience, I’ve
          contributed to building enterprise solutions for major corporations
          like{" "}
          <a
            href="https://zinoxtechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:underline"
          >
            ZINOX
          </a>
          ,{" "}
          <a
            href="https://naptin.gov.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:underline"
          >
            NAPTIN
          </a>
          ,{" "}
          <a
            href="https://www.accessbankplc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:underline"
          >
            ACCESS BANK
          </a>{" "}
          and{" "}
          <a
            href="https://bluechiptech.biz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ccd6f6] hover:underline"
          >
            BLUECHIP
          </a>
          .
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-300 hover:border-blue-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
