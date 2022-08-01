import { useState, useEffect } from "react";
import Error from "./Error";



function Input({setTasks, tasks,task, setTask}) {
  const [message, setMessage]=useState(''),
        [date, setDate]=useState(''),
        [error,setError]=useState(false);

  //this function generate un id for each task object 
  function generateId(){
    const fecha= Date.now().toString(36);
    const numbeRandom= Math.random().toString(36)
    return fecha+numbeRandom;

  }      

  //To call the submit event
  function handlerSubmmit(e){
    e.preventDefault();
    //to validate  that all fields are not empty
    if([message,date].includes('')){
      setError(true)
      return;
    }
    setError(false)

    //to creat the new task to insert in array tasks
    const objTask={
     
      message,
      date,
    }
    //to validate if the user is creating a new task o simply is edit it
    
    if(task.id){
      //edit an task
      objTask.id=task.id;
      const objEdit=tasks.map(taskState=>taskState.id===objTask.id?objTask:taskState);
      setTasks(objEdit)
    }else{
      //create new task
      objTask.id=generateId()
      setTasks([...tasks,objTask]);
    }

  
    setTask({})
    setDate('');
    setMessage('');

  }
  //to change task state
  useEffect(()=>{
    if(Object.keys(task).length>0){
      setMessage(task.message);
      setDate(date.date);
    }
    
  },[task])



  return (
    
      
    <form onSubmit={handlerSubmmit} className="block my-5  py-5 mx-auto bg-gray-200 max-w-sm shadow-xl rounded-3xl  hover:-translate-y-1 transition duration-1000 md:relative md:top-20 md:w-2/3 md:h-fit md:border md:border-l-black" action="">
      {error && <Error/> }
      <label className="block text-center text-indigo-800 font-bold my-2 text-xl py-2 md:text-2xl" htmlFor="task">Write your Task:</label>
      <input value={message} onChange={(e)=>{setMessage(e.target.value)}} className="block bg-stone-100 w-full my-5 outline-none pt-2 pl-4 font-mono focus:bg-stone-200" id="task" type="text" />
      <input value={date} onChange={(e)=>{setDate(e.target.value)}} className="block mx-auto my-5" type={"date"} name="" id="" />
      <button type="submit" className="block mx-auto px-6 py-1 rounded-xl justify-self-center text-white bg-green-900 hover:bg-green-600 tracking-wide outline-none cursor-pointer font-bold animate-pulse">
          Add</button>
    </form>
    
    
  )
}

export default Input;