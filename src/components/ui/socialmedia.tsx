import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Socialmedia() {
  return (
    <div className="flex gap-2 items-center justify-center mt-3 ">

            
            <a href=""><FaGithub size={17} className="text-[#4B5563] hover:text-[#7b8592]"/></a>
            <a href=""><FaLinkedin size={17} className="text-[#4B5563] hover:text-[#7b8592]"/></a>
            <a href=""><FaInstagram size={17} className="text-[#4B5563] hover:text-[#7b8592]"/></a>
            <a href=""><FaYoutube size={17} className="text-[#4B5563] hover:text-[#7b8592]"/></a>
            
        </div>
  )
}

export default Socialmedia
