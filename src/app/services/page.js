import React from 'react'
import BannerImage from '../components/BannerImage'
import Image from 'next/image'
import { services } from 'data'

const ServicesPage = () => {
  return (
  <main>
    <BannerImage imgSrc='/services-cover-img.png'/>

    <section class="text-gray-600 body-font">
   {services.map((item)=>(
    <div key={item.name}  class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center"> 
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image class="object-cover m-auto object-center rounded" width={400} height={400} alt="hero" src={item.img} />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">{item.name}
        </h1>
        <p class="mb-8 leading-relaxed text-[#f1eaea]">{item.text}.</p>
        <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read more</button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">contact now</button>
      </div>
      </div>
      </div>
   ))}
 </section>
  </main>
  )
}

export default ServicesPage