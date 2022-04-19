import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'


const ToDoList = () => {
	const[todos, setTodos] = useState([])

    const addTodo = (todo) => {
		if (!todo.text || /^\s*$/.test(todo.text)) {  //<--- makes sure if noone types in a letter it will not show up 
			return 
		}

	const newTodos =[todo,...todos]


		setTodos(newTodos)
		// console.log(todo, ...todos)
    }
	const updateTodo = (todoId, newValue) => {
		if (!newValue.text || /^\s*$/.test(newValue.text)) { //<--- makes sure if noone types in>}//<--- makes sure if noone types in a letter it will not show up 
			return 
		}
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue: item))
		)
	}

    const removeTodo = (id) => {
     
		const removeArr = [...todos].filter(todo=> todo.id !== id)

		 setTodos(removeArr)
	}

	
    const completeTodo = (id) => {
	    let updatedTodos = todos.map(todo => {
			if(todo.id === id) {
				todo.isComplete = ! todo.isComplete // <------ toggles between true and false
			}
			return todo
	})
	setTodos(updatedTodos)

}



  return (
	<div>
		<h2>Add Your to-do's to the list.</h2>
	    <p>Click when done to rule out.</p>
		<ToDoForm onSubmit={addTodo} />
		<ToDo 
			todos={todos} completeTodo={completeTodo} 
			removeTodo={removeTodo} updateTodo={updateTodo}
		/>
		
	</div>
  )
}

export default ToDoList



