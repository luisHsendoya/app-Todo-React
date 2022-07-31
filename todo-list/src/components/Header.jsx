import React from 'react'

function Header() {
  return (
    <h3 className=' relative text-3xl  text-center uppercase text-red-800 font-extrabold md:text-5xl my-5 md:right-40'>
        ToDo list { "  "} <span className='block my-3  text-lg relative md:left-40 capitalize  drop-shadow-xl text-yellow-500 md:text-3xl'>increase your productivity</span>
    </h3>
  )
}

export default Header