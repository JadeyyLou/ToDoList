
import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState ({
	  id: null,
	  value:''
  })

  const subitUpdate = (value) => {
	  updateTodo(edit.id, value)
	  setEdit({
		  id:null,
		  value:''
	  })
  }
if (edit.id) {
	return <ToDoForm edit={edit} onSubmit={subitUpdate} />
}

  return todos.map((todo, i) => (
	  <div 
		className={todo.isComplete ? 'todoRow complete' : 'todoRow'} 
		key={i} 
	  >
		 <div key={todo.id} onClick={() => completeTodo(todo.id)}>
			 {todo.text}
		 </div>
			<div className='icons'>

				<button 
					onClick={() => removeTodo(todo.id)}
					className ='delete'>Delete</button>
				

				<TiEdit 
					onClick = {() => setEdit({id: todo.id, value: todo.text})} 
					className='edit' 
				/>

			</div>

	  </div>
  ))
}

export default Todo