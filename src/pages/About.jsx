import React from 'react'
import profile from "/Nupur Chopra_2110991779.jpeg"
const About = () => {
  return (
    <div className= 'relative w-full bg-gray-950 flex justify-center items-center'> 
        <div className='max-w-[770px] md:min-h-screen  pt-32 pb-16 px-4 md:pt-16  flex flex-col md:flex-row  items-center justify-center gap-20'>
        <img  className='w-72 rounded-xl' src={profile}></img>
        <div className='text-center md:text-start'>
            <h1 className='text-yellow-400 font-bold text-2xl mt-4 place-content-start'>About Me</h1>
            <h3 className='text-white font-bold text-2xl mt-4 place-content-start'>Software Engineer by day and by night</h3>
            <p className='text-white text-lg mt-4 place-content-start'>Hey, my name is Nupur. I love building new things with code. I am looking for opportunities where I can grow myself as a person and as a developer and subsequently, learn from my peers. And with completed projects over multiple domains, I'm able to apply my skills across multiple problem statements to find innovative solutions.</p>
        </div>
        </div>
    </div>
  )
}

export default About
