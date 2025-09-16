import React from 'react'
import { SquarePen, Trash } from "lucide-react";
import { deleteTodoURL } from '../common/urls.js';
import axios from 'axios';
import toast from 'react-hot-toast';

const TodoCard = ({id, title, description}) => { 
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
    return (
        <div key={id} className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
                <div className="flex justify-end">
                    <input type="checkbox" className="checkbox"/>
                </div>               
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <SquarePen onClick={() => window.location.href = `/update?id=${id}&title=${title}&description=${description}`} cursor="pointer"/>                    
                    <Trash onClick={handleDelete} cursor="pointer"/>
                </div>
            </div>
        </div>
    )
}

export default TodoCard;
