import React from 'react'
import Image from 'next/image'
import { AiOutlineLinkedin ,AiFillGithub } from 'react-icons/ai';
import { BsFacebook  } from 'react-icons/bs';
import { BiLogoUpwork  } from 'react-icons/bi';
import { TbBrandFiverr  } from 'react-icons/tb';
import BannerImage from '../components/BannerImage';
import Link from 'next/link';


const About = () => {
  return (
    <main>
      <BannerImage imgSrc='/about-cover-img.png' />
  <section class="flex flex-row text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-full mx-auto flex justify-center lg:justify-between flex-wrap">
    <div className='flex w-auto md:w-[50vw] mt-10 flex-col justify-center text-[25px] sm:text-[50px] text-white'>
     <h1 className='text-white text-3xl title-font font-medium mb-4' >Who is Ghulam murtaza</h1>
    
     <p className='text-[14px]  text-[#e9dede] leading-relaxed mb-4'>"I am Ghuam Murtaza -  Expert ReactJS Developer, Building Seamless Web Apps!"
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
     
    
   </div>
   <div className='flex mt-10 justify-center items-center relative'>
      
      <Image width={600} height={200} alt='herosection' className='rounded-[100px] w-[400px] md:w-[340px] border-4 opacity-[0.4]' src='/developer.jpg' />
      <div className='flex  text-white text-[20px] sm:text-[26px]  px-2 py-4  rounded-[60px] bg-[#353232] mt-5 gap-4  absolute bottom-2 right-[80px] sm:right-[60px] '>
      <Link target="_blank" href='https://www.fiverr.com/mustafa4085'><TbBrandFiverr className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.upwork.com/freelancers/~01f5cde1b15b86b152'><BiLogoUpwork className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://github.com/GmKandhro'><AiFillGithub className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.facebook.com/'><BsFacebook className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link target="_blank" href='https://www.linkedin.com/'><AiOutlineLinkedin className='cursor-pointer hover:text-[#8d8888]'/></Link>
      </div>
    </div>
    </div>
  </div>
</section>
</main>
  )
}

export default About