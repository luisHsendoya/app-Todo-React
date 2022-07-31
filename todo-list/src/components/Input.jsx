import { useState } from "react";
import Error from "./Error";



function Input({setTasks, tasks}) {
  const [message, setMessage]=useState(''),
        [date, setDate]=useState(''),
        [error,setError]=useState(false);

  //generamos un id para el objeto
  function generateId(){
    const fecha= Date.now().toString(36);
    const numbeRandom= Math.random().toString(36)
    return fecha+numbeRandom;

  }      

  //invocamos el evento submit
  function handlerSubmmit(e){
    e.preventDefault();
    const objTask={
      id:generateId(),
      message,
      date,
    }
    if([message,date].includes('')){
      setError(true)
      return;
    }
    setError(false)
    setTasks([...tasks,objTask]);
    setDate('');
    setMessage('');

   
     
   
  }


  return (
    
      
    <form onSubmit={handlerSubmmit} className="block my-5  py-5 mx-auto bg-gray-200 max-w-sm shadow-xl rounded-3xl  hover:-translate-y-1 transition duration-1000 md:relative md:top-20 md:w-2/3 md:h-fit md:border md:border-l-black" action="">
      {error && <Error/> }
      <label className="block text-center text-green-800 font-semibold my-2 text-xl py-2 md:text-2xl" htmlFor="task">Write your Task:</label>
      <input value={message} onChange={(e)=>{setMessage(e.target.value)}} className="block bg-stone-100 w-full my-5 outline-none pt-2 pl-4 font-mono focus:bg-stone-200" id="task" type="text" />
      <input value={date} onChange={(e)=>{setDate(e.target.value)}} className="block mx-auto my-5" type="date" name="" id="" />
      <button type="submit" className="block mx-auto px-6 py-1 rounded-md justify-self-center text-white bg-rose-800 hover:bg-rose-600 focus:outline outline-offset-1  tracking-wide outline-none cursor-pointer font-bold">
          Add</button>
    </form>
    
    
  )
}

export default Input;