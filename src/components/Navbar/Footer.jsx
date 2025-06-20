import React from 'react'

const Footer = () => {
  return (
    <div id="footer" className='flex justify-around bg-[#252f57] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal text-yellow-200'>Feel free to reach out!!</h3>
      </div>

      <ul className='text-sm md:text-xl '>
        <a href='kirtisharma5758@gmail.com'><li className='text-white'>kirtisharma5758@gmail.com</li></a>
        <a href='https://github.com/KirtiSharma0'><li className='text-white'>https://github.com/KirtiSharma0</li></a>
        <a href='https://www.linkedin.com/in/kirti-sharma-62170b254/'><li className='text-white'>https://www.linkedin.com/in/kirti-sharma-62170b254/</li></a>
    </ul>
    </div>
    
  )
}

export default Footer
