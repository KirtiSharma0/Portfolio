import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className='flex justify-around bg-[#465697] text-pink-300 p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!!</h3>
      </div>

      <ul className='text-sm md:text-xl '>
        <li className='text-pink-300'>kirtisharma5758@gmail.com</li>
        <li className='text-pink-300'>https://github.com/KirtiSharma0</li>
        <li className='text-pink-300'>https://www.linkedin.com/in/kirti-sharma-62170b254/</li>
    </ul>
    </div>
    
  )
}

export default Footer
