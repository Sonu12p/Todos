import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todo() {
  const todoss =   useSelector(state => state.todos)
  const dispatch =  useDispatch()
  const [editText, setEditText] = useState('');
  
  const handleEdit = (text) => {
    console.log('handleEdit',text)
    setEditText(text);
  };

  const handleUpdate = (id) => {
    console.log('updating todo', id, "with text", editText)
    dispatch(updateTodo({ id, newText: editText }));
    setEditText('');

  };

  const handleInput = (e) => {
    setEditText(e.target.value)
  }
const handleInputUpdate =(id) =>{
handleUpdate(id)
}
  return (
    <>
    <div>Todos:</div>
    {todoss.map((todoItem) =>(
         <li key={todoItem.id}>
         {todoItem.id === editText ? (
           <input
             type="text"
             value={editText}
             onChange={handleInput}
             onBlur={() => handleInputUpdate(todoItem.text)}
             autoFocus
           />
         ) : (
           <>
             {todoItem.text}
             <button onClick={() => dispatch(removeTodo(todoItem.id))}>X</button>
             <button onClick={() => handleEdit(todoItem.id, todoItem.text)}>Edit</button>
           </>
         )}
       </li>
    ))

    }
    </>
  )
}

export default Todo
