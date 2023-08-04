import React from 'react'
import Image from 'next/image'
import { AiOutlineLinkedin ,AiFillGithub } from 'react-icons/ai';
import { BsFacebook  } from 'react-icons/bs';
import { BiLogoUpwork  } from 'react-icons/bi';
import { TbBrandFiverr  } from 'react-icons/tb';
import BannerImage from '../components/BannerImage';


const About = () => {
  return (
   <main>
   <BannerImage imgSrc='/about-cover-img.png' />

    <div className='w-full h-auto max-h-screen px-20 flex flex-col-reverse mt-[0px] mb-10 sm:mt-[190px] lg:mt-0 lg:flex-row justify-between'>
      <div className='flex mt-10 flex-col justify-center text-[25px] sm:text-[50px] text-white'>
     
        <h1>Who is Ghulam murtaza</h1>
        <div>
      
        </div>
        <p className='text-[15px] w-[800px]'>"I am Ghuam Murtaza -  Expert ReactJS Developer, Building Seamless Web Apps!"
        Harness the power of ReactJS with me, Ghuam Murtaza, crafting dynamic user interfaces with unmatched precision.
        Elevate your web app's performance and user experience - trust my proficiency in ReactJS development.
        Transforming innovative ideas into reality, I deliver scalable and responsive ReactJS solutions.
        Partner with me, Ghuam Murtaza, to create cutting-edge web applications with ReactJS at the core.
        From concept to deployment, I ensure flawless ReactJS integration for your digital ventures.
        Unlock the true potential of ReactJS - collaborate with me for exceptional web app experiences.
        As an avid problem solver, I thrive on overcoming challenges and delivering top-notch ReactJS solutions tailored to your unique requirements.
        With a keen eye for detail and a passion for clean code, I guarantee maintainable and efficient web applications.
        Stay updated throughout the development process with transparent communication and timely progress reports from me, Ghuam Murtaza.
        Entrust your project to a seasoned ReactJS developer who stays up-to-date with the latest industry trends and best practices.
        Let's turn your vision into reality - together, we'll create stunning web apps that leave a lasting impression on your users.
        </p>
        <div className='flex gap-3 text-[#000] mt-4'>
        
        </div>
       
      </div>
      <div className='flex mt-10 justify-center items-center relative'>
      
        <Image width={600} height={200} alt='herosection' className='rounded-[100px] w-[400px] md:w-[340px] border-4 opacity-[0.4]' src='/developer.jpg' />
        <div className='flex  text-white text-[26px] ml-4 px-2 py-4  rounded-[60px] bg-[#353232] mt-5 gap-4 absolute bottom-2 right-[60px] '>
          <TbBrandFiverr className='cursor-pointer hover:text-[#8d8888]'/>
          <BiLogoUpwork className='cursor-pointer hover:text-[#8d8888]'/>
          <AiFillGithub className='cursor-pointer hover:text-[#8d8888]'/>
          <BsFacebook className='cursor-pointer hover:text-[#8d8888]'/>
          <AiOutlineLinkedin className='cursor-pointer hover:text-[#8d8888]'/>
        </div>
      </div>
    </div>
   </main>
  )
}

export default About