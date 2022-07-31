import React from 'react'
import { useState } from 'react';


function Task({date,message}) {

  const [check,setCheck]= useState(false)

  function handlerCheck(e){
    setCheck(e.target.checked)
  }
  

  return (
    <div className='relative rounded-2xl shadow-xl bg-stone-400 my-1 py-5 max-w-sm mx-auto  md:w-72 md:h-fit' >
        <button className='absolute text-red-600 top-0 right-0 px-2 font-extrabold cursor-pointer bg-transparent animate-pulse'>X</button>
        <span  className='absolute  top-0 font-bold left-36 text-red-900 text-opacity-60 animate-pulse md:top-0 md:left-24'>{date}</span>
        <input  onChange={handlerCheck} className='px-4 absolute left-0 top-0  checked:bg-green-700' type="checkbox" name="" id="" />
        <div className='flex flex-col justify-center'>
            <p className={`mx-2 my-5 font-mono tracking-widest uppercase leading-relaxed text-clip indent-2 ${check && 'line-through'}`}>{message}</p>
            <button className='relative top-2 mx-auto w-20 bg-yellow-300 rounded-full  hover:bg-yellow-500 hover:-translate-y-1'>Editar</button>
        </div>
  
    </div>
  )
}


export default Task;
