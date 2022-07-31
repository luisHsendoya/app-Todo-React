import { useState } from "react"
import Header from "./components/Header"
import Input from "./components/Input"
import ListTask from "./components/ListTask";




function App() {
  const [tasks, setTasks]=useState([]);
 
 
  return (
    <div className="">
      <Header/>
      <div className="mt-6 md:flex ">

        <Input 
        tasks={tasks}
        setTasks={setTasks}
        />
        <ListTask tasks={tasks}/>
      </div>
      
   
    </div>
  )
}

export default App
