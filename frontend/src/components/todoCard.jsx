import React from 'react'
import { SquarePen, Trash } from "lucide-react";

const TodoCard = ({key, title, description}) => {    
    return (
        <div key={key} className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <SquarePen />
                    <Trash />
                </div>
            </div>
        </div>
    )
}

export default TodoCard;
