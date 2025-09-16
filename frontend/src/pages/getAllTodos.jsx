import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar.tsx';
import TodoCard from '../components/todoCard.jsx';
import axios from 'axios';
import { getAllTodosURL } from '../common/urls.js';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster component

const getAllTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(getAllTodosURL);
        setTodos(response.data);
        console.log(response.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, [])
  console.log(todos);
  return (
    <>
      <div className='flex flex-wrap gap-4 items-center justify-center py-4'>
        {todos.map((todo) => {
          return <TodoCard key={todo._id} id={todo._id} title={todo.title} description={todo.description} />
        })}
      </div>
      <Toaster position="top-center" />
    </>
  )
}

export default getAllTodos
