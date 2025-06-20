import React from 'react'

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl ms-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>Get to Know Me</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80' src=""></img>

                <ul>
                    <div className='flex gap-3 py-4'>
                        {/* //icon size={30} className mt1 */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
                            <p className='text-sm md:text-md leading-tight text-pink-200'>Passionate about building clean, responsive, and user-centered web interfaces. I specialize in turning complex ideas into intuitive, accessible, and visually engaging digital experiences using modern technologies.Whether it's a sleek landing page or a dynamic web app, I focus on performance, design fidelity, and code that scales. Let's create something users love to interact with.</p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        {/* //icon size={30} className mt1 */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
                            <p className='text-sm md:text-md leading-tight text-pink-200'>Focused on building scalable, secure, and high-performance systems that power modern web applications. I specialize in designing RESTful APIs, managing databases, and architecting server-side logic using technologies like Node.js, Express, MongoDB. Active learner and solving real-world problems behind the scenes — ensuring every app runs smoothly, efficiently, and reliably.</p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        {/* //icon size={30} className mt1 */}
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Graphic Designer</h1>
                            <p className='text-sm md:text-md leading-tight text-pink-200'> Enthusiat about crafting visual stories that connect, inspire, and communicate with impact. With a keen eye for detail and a love for bold, clean design, I specialize in creating branding, digital graphics, and print materials that align with purpose and personality. From concept to composition, I bring ideas to life through thoughtful design, blending creativity with strategy to deliver meaningful visual experiences.</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default About
