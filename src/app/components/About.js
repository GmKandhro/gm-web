"use client"
import React, { useState } from 'react'
import Heading from './Heading'
import { skill , education , experience } from 'data'

const About = () => {
  const [about, setAbout] = useState(skill)
  return (
   <>
   {/* <Heading title='About me'/> */}
   <main className='w-[90vw] flex flex-col justify-between shadow-2xl lg:flex-row p-6 rounded-2xl  mt-20   bg-[#161f33] text-white'>
   <div className='w-auto lg:w-[50vw]  mb-[0] lg:mb-4 flex flex-col '>
    <h1 className='text-[24px] font-semibold '>Ghualm Murtaza Kandher</h1>
    <h1 className='my-2 text-[#b36e6e]'>Web app developer</h1>
    <p className='text-[#fcf0f0]'>Hello! I am a highly skilled and experienced frontend developer with 2 years of experience in the industry. I am proficient in all aspects of frontend development, from HTML and CSS to JavaScript and React.js. I am also familiar with a variety of front-end frameworks and libraries, such as Next.js, Tailwind.</p>

   </div>
   <div className='w-auto lg:w-[50vw]'>
    <div className='flex gap-4 text-white font-semibold text-[15px] sm:text-[19px]'>
        <p onClick={()=>setAbout(skill)} className={`cursor-pointer hover:text-[#f5ecec] ${about === skill && 'border-b-4' } border-pink-400 `}>Skills</p>
        <p onClick={()=>setAbout(education)} className={`cursor-pointer hover:text-[#f5ecec] ${about === education && 'border-b-4' } border-pink-400 `}>Education</p>
        <p onClick={()=>setAbout(experience)} className={`cursor-pointer hover:text-[#f5ecec] ${about === experience && 'border-b-4' } border-pink-400 `}>Experience</p>
        <p className='w-[300px]'></p>
    </div>
    {
      about.map((item , index)=>(
        <p key={item.text} className='w-auto  mt-2'>{item.text}</p>
      ))
    }
   </div>
   </main>
   </>
  )
}

export default About