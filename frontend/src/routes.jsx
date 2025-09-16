import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import GetAllTodos from './pages/getAllTodos.jsx';
import CreateNewTodo from './pages/createNewTodo.jsx';
import UpdateTodo from './pages/UpdateTodo.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <GetAllTodos />,
      },
      {
        path: 'create',
        element: <CreateNewTodo />,
      },
      {
        path: 'update',
        element: <UpdateTodo />,
      }
    ],
  },
]);

export default router;