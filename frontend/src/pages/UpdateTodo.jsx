import UpdateTodoForm from '../components/UpdateTodoForm.jsx';

const createNewTodo = () => {
  return (
    <div className='flex flex-col gap-2 py-3 px-2'>
      <UpdateTodoForm />
    </div>
  )
}

export default createNewTodo
