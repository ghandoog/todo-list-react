import { useState } from 'react'
import AddToDo from "./components/AddToDo";
import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <h1 className="text-5xl text-slate-500 font-bold">TODO LIST</h1>

        <div className='flex justify-between my-12'>
          <button className='text-white font-bold bg-indigo-400 p-2 rounded-md'>Add Task</button>
          <select className='bg-slate-300 p-3 rounded-md'>
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
          </select>
        </div>

        <div className='flex justify-center bg-slate-200 p-2 rounded-lg'>
          <div className='bg-slate-400 w-fit p-3 rounded-lg justify-center'>
            <p className='text-white font-bold'>no todos</p>
            </div>
        </div>
      </div>

      <AddToDo/>
    </>
  )
}

export default App
