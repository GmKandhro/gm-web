import Link from 'next/link'
import React from 'react'
import { AiOutlineLinkedin ,AiFillGithub } from 'react-icons/ai';
import { BsFacebook  } from 'react-icons/bs';
import { BiLogoUpwork  } from 'react-icons/bi';
import { TbBrandFiverr  } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-[#1f2937]  body-font">
    <div className="container px-5 py-8 mx-auto flex items-center  sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
       Gm
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 GmKandhro —
        <Link target="_blank" href="https://gm-web-rho.vercel.app/" className="text-gray-600 ml-1" rel="noopener noreferrer" >gm-web-rho.vercel.app</Link>
      </p>
      <div className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-2'>
      <Link href='https://www.fiverr.com/mustafa4085'><TbBrandFiverr className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link href='https://www.upwork.com/freelancers/~01f5cde1b15b86b152'><BiLogoUpwork className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link href='https://github.com/GmKandhro'><AiFillGithub className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link href='https://www.facebook.com/'><BsFacebook className='cursor-pointer hover:text-[#8d8888]'/></Link>
          <Link href='https://www.linkedin.com/'><AiOutlineLinkedin className='cursor-pointer hover:text-[#8d8888]'/></Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer