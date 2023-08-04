"use client";
// import { motion } from "framer-motion"
import React from "react";
import Heading from "./Heading";
import { projects } from "data";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';
import { fadeIn } from "utils/motion";

const Projects = () => {
  return (
    <>
      <Heading title="My Projects" />

      <div className="flex gap-5 mt-5 flex-wrap mb-10">
        {projects.map((item, index) => (
          <div key={item.name}>
          <Tilt
          
          options={{
            max:45,
            scale:1,
            speed:450,
          }}
          >
         
          <div >
            <div className="bg-[#172b49] cursor-pointer p-5 rounded-2xl sm-w-[100%] width w-[340px]">
              <div className="relative w-full h-[230px] ">
                <Image
                  src={item.image}
                  width={400}
                  height={300}
                  alt="Car Rent"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div className="bg-[#251b3a] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                    <AiFillGithub className="text-white text-[29px]" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h1 className="text-white font-bold text-[24px]">{item.name}</h1>
                <p className="text-[#dbd6d6] mt-2  text-[14px]">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 justify-start">
                {item.tags.map((tag, index) => (
              
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      {" "}
                      {tag.name}
                    </p>
                  
                ))}
              </div>
            </div>
          </div>
          </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
