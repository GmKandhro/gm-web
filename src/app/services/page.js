import React from 'react'
import BannerImage from '../components/BannerImage'
import Image from 'next/image'
import { services } from 'data'

const ServicesPage = () => {
  return (
  <main>
    <BannerImage imgSrc='/services-cover-img.png'/>

   {services.map((item)=>(
     <div key={item.name} className={`container mx-auto px-4 py-8 flex  justify-between items-center`}>
 
     <div className="w-1/2">
       <Image src={item.img} width={500} height={300} alt={item.name} />
     </div>

     {/* Right side - Information */}
     <div className="w-1/2 ml-8 text-white">
       <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
       <p className="text-lg mb-4">
       {item.text}
       </p>
       <button className="bg-blue-500 text-white py-2 px-4 rounded">
         buy now
       </button>
     </div>
   </div>
   ))}
  </main>
  )
}

export default ServicesPage