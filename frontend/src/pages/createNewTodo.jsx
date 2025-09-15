import React from 'react'
import Navbar from '../components/navbar.tsx';
import CreateTodoForm from '../components/createTodoForm.jsx';

const createNewTodo = () => {
  return (
    <div className='flex flex-col gap-2 py-3 px-2'>
      <CreateTodoForm />
    </div>
  )
}

export default createNewTodo
