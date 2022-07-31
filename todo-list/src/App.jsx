import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import ListTask from "./components/ListTask";




function App() {
  const [tasks, setTasks]=useState([]),
        [task,setTask]=useState({})

  //this function delete the element selected
  function deleteTask(id){
    const newTask= tasks.filter(taskSelected=>taskSelected.id!=id);
    setTasks(newTask)
  }

 
 
  return (
    <div className="">
      <Header/>
      <div className="mt-6 md:flex ">

        <Input 
        tasks={tasks}
        setTasks={setTasks}
        task={task}
        setTask={setTask}/>
        <ListTask
        tasks={tasks}
        setTask={setTask}
        deleteTask={deleteTask}/>
      </div>
      
   
    </div>
  )
}

export default App
