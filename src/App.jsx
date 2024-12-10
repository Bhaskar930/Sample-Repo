import React from 'react'
import { useState } from 'react'

function App() {
  const[inputtext,setInputText]=useState("")
  const[Listitem,setListItem]=useState([])
  const handleAdd=()=>{
    setListItem([...Listitem,inputtext]);
    setInputText("")
  }
  return (
    <div>
    <div>
      <h1  className='heading'>Todo App</h1> 
      <h1>Todo hai bhyoiii</h1>
    </div>
    <div className="Input-box">
      <input type="text" className='input-container' onChange={(e)=>{
        setInputText(e.target.value);
      }} />
      <button onClick={handleAdd}>Submit</button>


    </div>

    <div>
      {
        Listitem.map((item,index)=>(
          <div>{item} </div>
          
        ))
      }
    </div>
    </div>
  )
}

export default App


