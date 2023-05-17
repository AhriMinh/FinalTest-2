import React from 'react'
import {BsPencilSquare} from 'react-icons/bs'
import {FaTrashAlt} from 'react-icons/fa'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <BsPencilSquare className='icon' onClick={() => editTodo(task.id)} />
        <FaTrashAlt className='icon' onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}