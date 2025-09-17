import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar.tsx';
import TodoCard from '../components/todoCard.jsx';
import axios from 'axios';
import { getAllTodosURL } from '../common/urls.js';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster component

const getAllTodos = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await axios.get(getAllTodosURL);
        setTodos(todos.data);
        const completedTodos = await axios.get(getAllTodosURL + "/completed");
        setCompletedTodos(completedTodos.data);
        console.log(completedTodos.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, [])
  
  return (
    <>
      <div className='p-5'>
        <h1 className='font-bold text-center text-2xl'>All Todos</h1>
        <div className='flex flex-wrap gap-4 items-center justify-center py-4'>
          {todos.map((todo) => {
            return <TodoCard key={todo._id} id={todo._id} title={todo.title} description={todo.description} completed={todo.completed} />
          })}
        </div>
      </div>
      <h1 className='font-bold text-center text-2xl'>Completed Todos</h1>
        <div className='flex flex-wrap gap-4 items-center justify-center py-4'>
          {completedTodos.map((completed) => {
            return <TodoCard key={completed._id} id={completed._id} title={completed.title} description={completed.description} completed={completed.completed} />
          })}
        </div>
      <Toaster position="top-center" />
    </>
  )
}

export default getAllTodos
