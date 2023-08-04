"use client"
import Link from 'next/link';
import { mycontext } from '../../../Context';
import { useState, useEffect } from 'react';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


const Navbar = () => {
  const context = mycontext()
  return (
    <nav className={`w-full h-[50px] px-4 sm:px-20  md:h-[70px] bg-[#1f2937] flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${context.show} border-b-[2px] border-[#666b75] shadow-xl`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Gm</div>
          <ul className="space-x-4 hidden md:flex">
            <li>
              <Link className='text-white' href="/">Home </Link>
            </li>
            <li>
              <Link className='text-white' href="/about">
                About
              </Link>

            </li>
            <li>
              <Link className='text-white' href="/services">Services </Link>
            </li>
            <li>
              <Link className='text-white' href="/contact">Contact me </Link>
            </li>
            <li>
              <Link className='text-white' href="/blog">Blogs</Link>
            </li>
          </ul>
          <div className='flex gap-3 justify-center items-center'>
            <Link className='text-white bg-[#a855f7] px-3 py-1 rounded-lg hover:bg-[#8a3fd1]' href='/login'>Login</Link>
            <Link className='text-white bg-[#a855f7] px-3 py-1 rounded-lg hover:bg-[#8c3ed4]' href='/signup '>Signup</Link>
            <div className='flex md:hidden text-white cursor-pointer text-[18px]'>
            {
              context.mobileMenu ?
              <AiOutlineClose onClick={()=> context.setMobileMenu(false)} />
              :<BiMenu   onClick={()=> context.setMobileMenu(true)} />
            }
            </div>
          </div>
        </div>
      </div>
      <div className={`${context.mobileMenu ? 'flex' : 'hidden'}`}>
      <ul  className="flex flex-col justify-center items-center gap-2 absolute top-12 right-[0px] w-[100%] bg-[#7a7a7a]">
            <li>
              <Link className='text-white' href="/">Home </Link>
            </li>
            <li>
              <Link className='text-white' href="/about">
                About
              </Link>

            </li>
            <li>
              <Link className='text-white' href="/services">Services </Link>
            </li>
            <li>
              <Link className='text-white' href="/contact">Contact me </Link>
            </li>
            <li>
              <Link className='text-white' href="/blog">Blogs</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
