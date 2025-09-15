import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import GetAllTodos from './pages/getAllTodos.jsx';
import CreateNewTodo from './pages/createNewTodo.jsx';

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
    ],
  },
]);

export default router;