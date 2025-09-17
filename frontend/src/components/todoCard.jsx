import React from 'react'
import { SquarePen, Trash } from "lucide-react";
import { deleteTodoURL, completeTodoURL } from '../common/urls.js';
import axios from 'axios';
import toast from 'react-hot-toast';

const TodoCard = ({id, title, description, completed}) => { 
    const [isCompleted, setIsCompleted] = React.useState(completed);
    const handleDelete = async () => {
        try {
            const response = await axios.delete(deleteTodoURL + '/' + id);
            if (response.status === 200) {
                toast.success('Todo deleted successfully');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                toast.error('Failed to delete todo');
            }
        } catch (error) {
            toast.error('Error deleting todo:', error);
        }
    }
    const handleCompletedTodo = async () => {
        try {
            const response = await axios.put(completeTodoURL + '/' + id);
            if (response.status === 200) {
                setIsCompleted(!isCompleted);
                toast.success('Todo marked as completed');
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            } else {
                toast.error('Failed to mark todo as completed');
            }
        } catch (error) {
            toast.error('Error marking todo as completed:', error);
        }
    }

    return (
        <div key={id} className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
                <div className="flex justify-end">
                    <input type="checkbox" checked={isCompleted} className="checkbox" onClick={handleCompletedTodo} disabled={isCompleted}/>
                </div>               
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                {!isCompleted &&
                <div className="card-actions justify-end">
                    <SquarePen onClick={() => window.location.href = `/update?id=${id}&title=${title}&description=${description}`} cursor="pointer"/>                    
                     <Trash onClick={handleDelete} cursor="pointer"/>
                </div>
                }
            </div>
        </div>
    )
}

export default TodoCard;
