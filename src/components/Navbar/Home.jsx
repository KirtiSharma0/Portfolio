import React from 'react'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10 '>
         <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>Hi, I'm Kirti Sharma</h1>
        <p className='text-sm md:text-2xl tracking-tight '> A passionate Web Developer who transforms ideas into responsive, accessible, and user-friendly websites.</p>
        <p className='text-sm md:text-2xl tracking-tight text-shadow-pink-400 italic'>“Code with purpose. Design with empathy. Deliver with precision.”</p>
        <button className='mt-5 md:md-10 text-white py-2 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-pink-200'>Contact Me !</button>
        </div>
      
      <div><img src='' alt=''></img></div>
    </div>
  )
}

export default Home
