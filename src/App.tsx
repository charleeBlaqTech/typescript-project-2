import React, { ChangeEvent, FC, useState, FormEvent } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import TaskObject from './Interfaces';




const App: FC= ()=>{
  
  const [task, setTask]= useState<string>("");
  const [deadLine, setDeadLine]= useState<number>(0);
  const [taskList, setTaskList]= useState<TaskObject[]>([]);

  

  const handleChange= (event : ChangeEvent<HTMLInputElement>): void=>{
      if(event.target.name === "task"){
        setTask(event.target.value);
      }else{
        setDeadLine(Number(event.target.value));
      }
  }

  const addTask =(e:FormEvent<HTMLButtonElement>): void=>{
    e.preventDefault();
    const newTask: TaskObject={
      todo: task,
      expiresIn: deadLine
    }
    setTaskList((prevList)=>{
      return [...prevList, newTask]
    })
    setTask("");
    setDeadLine(0);

  }

  return (
    <div className="App">
        <div className="form-wrapper">
            <form>
              <div className="inputs-wrapper">
                  <input type="text" name="task" value={task} placeholder='Task....' onChange={handleChange}/>
                  <input type="number" name="deadline" value={deadLine} placeholder='DeadLine...' onChange={handleChange}/>
              </div>
              <button onClick={addTask}>ADD TODO</button>
            </form>
        </div>
        <div className="list">
          {taskList.map((task: TaskObject, key:number)=>{
              return  <TodoTask key={key} task={task}/>
          })}
         
        </div>
    </div>
  );
}

export default App;
