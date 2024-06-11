import { useState } from 'react'
import './App.css'
import Todo from './Cmp/Todo'
import AddTodo from './Cmp/AddTodo'

function App() {

  return (
    <>
      <h1>React Data</h1>
      <AddTodo/>
      <Todo />
    </>
  )
  }

export default App
