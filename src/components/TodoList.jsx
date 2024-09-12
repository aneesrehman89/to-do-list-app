import React, { useState } from 'react'
import './Css-files/TodoList.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';
export default function TodoList() {
                 
                  
  let [toDoList, setTodoList] = useState([])  // -4


  let item = toDoList.map((value, index) => {
    return (
      // sending value as a prop
      <List value={value} key ={index} indexNumber ={index} 
      toDoList = {toDoList} setTodoList= {setTodoList} // -3
      />
    )
  })

   //1-  to handle user Input
  let saveTodoList = (e) => {

    let toname = e.target.toname.value;   // python
    if (!toDoList.includes(toname)) {
      let finalToDo = [...toDoList, toname]      //***********/
      setTodoList(finalToDo)
    }
    else {
      NotificationManager.error('Value already exist');
    }
    e.preventDefault()
  }
  return (
    <div>
      <h1 style={{textAlign: 'center', margin: '30px'}}>Todo List</h1>
      <NotificationContainer />
      <form onSubmit={saveTodoList} className='todoForm'>
        <input type="text" name='toname' />
        <button>save</button>
      </form>

      {item}


    </div>
  )
}
              // destructing value                // -2
function List({ value , indexNumber , toDoList, setTodoList}) {

  let [status, setStatus] = useState(false)
 
  let deleteRow =()=>{
            let finalData = toDoList.filter((v,i)=> i!= indexNumber)
            setTodoList(finalData)  // prop drilling -1
  }

  let checkStatus =()=>{
    setStatus(!status)
  }
  return (
    <div>
      <ul className='todoli'>
        <li className={status ? 'completeStatus' : ''} onClick={checkStatus}>{value} <span onClick={deleteRow}>&times;</span> </li>
      </ul>
    </div>
  )
}
