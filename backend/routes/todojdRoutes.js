import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo, completeTodo, getCompletedTodos } from '../controllers/todojdControllers.js';
const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.put('/completeTodo/:id', completeTodo);
router.get('/completed', getCompletedTodos);
export default router;