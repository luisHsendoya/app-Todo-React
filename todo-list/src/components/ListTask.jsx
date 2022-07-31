import React from 'react'
import Task from './Task'


function ListTask({tasks}) {


  

  return (
    
    <>
      {Object.keys(tasks).length===0 ? (
        <h4 className='text-center text-2xl mx-auto font-mono font-bold drop-shadow-xl text-fuchsia-800 motion-safe:animate-pulse md:text-4xl'>Add any task</h4>):(
          <div className='block mx-auto mt-10 md:grid md:grid-cols-2 md:gap-1 md:h-screen md:overflow-y-scroll md:w-1/2 md:grid-flow-row '>
     
     
     {tasks.map(task=>(
     <Task
     key={task.id}
     message={task.message}
     date={task.date}
     
     />  
     ))}

      </div>
        )}
     

      {}

      
    
    </>
  )
}

export default ListTask