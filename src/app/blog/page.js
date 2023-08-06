import React from 'react'
import BannerImage from '../components/BannerImage'
import { Heading } from '../components'
import Image from 'next/image'


const page = () => {
  return (
    <>
        <BannerImage imgSrc='/blog-cover-img.png' />
        <main className='px-2 flex justify-center mt-4 mb-10'>
           
            <div >
            <div className="bg-[#17283f] shadow-xl cursor-pointer p-5 rounded-2xl sm-w-[100%] width w-[310px] md:w-[345px]">
              <div className="relative w-full h-[230px] ">
                <Image
                  src='/services-1.png'
                  width={400}
                  height={300}
                  alt="Car Rent"
                  className="w-full h-full object-cover rounded-2xl"
                />
                
              </div>
              <div className="mt-4">
                <h1 className="text-white font-bold text-[24px]">React</h1>
                <p className="text-[#dbd6d6] mt-2  text-[14px]">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore aliquid incidunt saepe odio aspernatur maxime ipsam tempora libero omnis facilis ab, dignissimos totam, ullam voluptatum quae culpa dolorum neque? Odio!
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 justify-start">
                <button className='py-2 px-4 bg-[#42445733] text-white'>React more</button>
              </div>
            </div>
          </div>
        
        </main>

    </>
  )
}

export default page