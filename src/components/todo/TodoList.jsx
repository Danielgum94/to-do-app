import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios'; // Assuming you have installed the axios package


export default function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(()=>{
        const fetchTodos = async () => {
            try {
                const response = await axios.get('/api/todo');
                    setTodos(response.data);
            } catch (error) {
                console.log('Error', error)
            }
        };

        fetchTodos()
    }, []);

  return (
    <div>
        <h2>ToDo App</h2>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
    </div>

  )
}
