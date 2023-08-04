import React from 'react'

const page = () => {
  return (
    <section className="text-[#f5eded] body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/1 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115272.75886670785!2d68.21273250324757!3d25.462534195411923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7976cb934683%3A0x89442455ee36acd4!2sJamshoro%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1690804374397!5m2!1sen!2sus" ></iframe> 
      </div>

      <div className="lg:w-2/1 p-6 md:w-1/2 shadow-2xl rounded-xl bg-[#2e203f44] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-[#f5eded] text-lg mb-1 font-medium title-font">Contact me</h2>
        <p className="leading-relaxed mb-5 text-[#f5eded]">You can contact me For work and create your web apps </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-[#f5eded]">Enter your Name</label>
          <input type="text" id="name" name="name" className="w-full bg-[#3c344433] text-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/ >
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-[#f5eded]">Enter your Email</label>
          <input type="email" id="email" name="email" className="w-full bg-[#3c344433] text-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-[#f5eded]">Enter Message</label>
          <textarea id="message" name="message" className="w-full bg-[#3c344433] text-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
        
      </div>
    </div>
  </section>
  )
}

export default page