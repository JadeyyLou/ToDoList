import './App.css';
import {useState} from 'react'
import {setState} from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoList from './components/ToDoList'



const App = () => {

  return (
    <div className="header">
      <h1>To-Do list</h1>
       <ToDoList />
    </div>
  )

}

export default App;
