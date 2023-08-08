"use client"
import React from 'react'
import Image from 'next/image'

import { Typewriter } from "react-simple-typewriter";

import { AiOutlineLinkedin ,AiFillGithub } from 'react-icons/ai';
import { BsFacebook  } from 'react-icons/bs';
import { BiLogoUpwork  } from 'react-icons/bi';
import { TbBrandFiverr  } from 'react-icons/tb';
import Link from 'next/link';



const HeroSection = () => {
  return (
    <div className='w-full h-auto  flex flex-col mt-[0px] lg:flex-row justify-between'>
      <div className='flex mt-10 flex-col w-[90vw] sm:w-auto  justify-center text-[27px] sm:text-[50px] text-white'>
        <h1>Hi, there</h1>
        <h1>I'am Gm kandhro</h1>

        <div>

          <Typewriter
            words={[
              "Coder",
              "Web app developer",
              "React js developer",
              "Freelancer",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
            className='flex'
          />
        </div>
        <p className='text-[15px] w-[270px]  sm:[550px]'>Experienced React.js developer specializing in building dynamic and responsive web applications, available for freelance projects</p>
        <div className='flex gap-3 text-[#000] mt-4'>
        <button className='px-5 py-2  bg-[#e7cfcf] rounded-xl outline-none text-[15px]'>Contact me</button>
        <button className='px-5 py-2  bg-[#e7cfcf] rounded-xl outline-none text-[15px]'>About me </button>
        </div>
       
      </div>
      <div className='flex mt-10 justify-center items-center relative '>
      
        <Image width={600} height={200} alt='herosection' className='rounded-[100px] w-[400px] md:w-[340px] border-4 opacity-[0.4]' src='/developer.jpg' />
        <div className='flex flex-row md:flex-col md:static absolute bottom-[12px] text-white text-[26px] md:ml-4 px-2 py-4  rounded-[60px] bg-[#353232] mt-5 gap-4 '>
        <Link target="_blank" href='https://www.fiverr.com/mustafa4085'><TbBrandFiverr className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.upwork.com/freelancers/~01f5cde1b15b86b152'><BiLogoUpwork className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://github.com/GmKandhro'><AiFillGithub className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.facebook.com/'><BsFacebook className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.linkedin.com/'><AiOutlineLinkedin className='cursor-pointer hover:text-[#8d8888]'/></Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection