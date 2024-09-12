import React from 'react'

function AddToDo() {
  return (
    <>
      <div className='add-todo-container bg-slate-100 p-2 rounded-xl'>
        <h2 className='text-slate-500 text-3xl font-bold'>Add TODO</h2>
        <p>Title</p>
        <input type="text"></input>
        <p>Title</p>
        <input type="text"></input>

        <button className='text-white font-bold bg-indigo-400 p-2 rounded-md'>Add Task</button>
        <button className='text-white font-bold bg-indigo-400 p-2 rounded-md'>Cancel</button>
      </div>
    </>
  )
}

export default AddToDo
