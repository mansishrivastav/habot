import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { locations } from '../utils/constant'

function SecondBody() {

 return (
   <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-10">
     <div className="md:w-2/5 text-center md:text-left mb-6 md:mb-0">
       <h1 className="text-3xl md:text-4xl font-bold">
         Ready to dive into <span className="text-[#271555]">HABOT?</span>
       </h1>
       <p className="text-gray-700 mt-4">
         Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. 
         Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the 
         first step towards realizing your entrepreneurial dreams.
       </p>
       <button className="bg-green-700 flex items-center gap-2 justify-center text-white px-6 py-3 mt-6 rounded-lg hover:bg-green-700 transition duration-300">
         Sign up Today <BsArrowRight />
       </button>
     </div>

     <div className="grid grid-cols-2 w-full gap-4 md:w-2/5">
       {locations.map(location => (
         <button key={location} className="border-2 border-orange-400 px-4 py-2 rounded-md hover:bg-orange-100 transition duration-300">
           {location}
         </button>
       ))}
     </div>
   </div>
 )
}

export default SecondBody