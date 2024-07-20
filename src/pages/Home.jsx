import React from 'react'
import { Link } from 'react-router-dom';
import { ImGithub } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className='bg-gray-50 relative h-[88vh]  flex flex-col pt-32 md:pt-18 items-center'>
      <h5 className='text-slate-600 text-[32px] font-bold'>Hi, I'm Nupur</h5>
      <h1 className='text-black  text-[35px] md:text-[70px] font-bold md:font-black '>Software Developer.</h1>
      <div className='flex gap-5 py-8'>
        <button><Link to={"/"}><SiLinkedin className='text-blue-700 text-4xl'/></Link></button>
        <button><Link to={"/"}><ImGithub className='text-black text-4xl' /></Link></button>
        <button className='border rounded-lg text-white bg-black font-bold px-6 py-2 flex items-center gap-4'>Work with Me <FaArrowRight /></button>
      </div>
      <p className='text-slate-600 font-bold text-[20px] py-2'>JAVA | React.js | MERN | JS |</p>
      <p className='hidden md:block text-slate-600 font-semibold text-[18px] py-2 break-words'>Building digital wonders, one line of code at a time. Let's create something</p>
      <p className='hidden md:block text-slate-600 font-semibold text-[18px] pb-2 '>extraordinary!</p>
    </div>
  )
}

export default Home
