import React, { useState } from 'react'
import axios from 'axios';
import { createTodoURL } from '../common/urls.js';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster component

const CreateTodoForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(createTodoURL, {
                title: title,
                description: description
            })
            if(response.status === 201){
                toast.success("To-Do Created Successfully");                
                setTitle("");
                setDescription("");
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }
            else{
                toast.error("Failed to create To-Do");
            }
        }
        catch(err){
            console.error(err);
            toast.error("Error creating To-Do"); // Add error toast for catch block
        }
    }

    return (
        <>
            <div className='flex flex-col gap-4 items-center bg-[#161212] w-fit px-14 py-10 justify-center mx-auto rounded-2xl'>
                <h1 className='text-green-500 text-2xl font-bold'>Create New To-Do</h1>
                <input 
                    type="text" 
                    placeholder="Title" 
                    className="input w-sm focus:outline-none" 
                    onChange={handleTitleChange}
                    value={title} 
                />
                <textarea 
                    className="textarea rounded-2xl w-sm focus:outline-none" 
                    placeholder="Description" 
                    onChange={handleDescriptionChange}
                    value={description}
                ></textarea>      
                <button className="btn btn-dash btn-success w-sm" onClick={handleSubmit}>Add New Task</button>
            </div>
            <Toaster position="top-center" /> {/* Add Toaster component */}
        </>
    )
}

export default CreateTodoForm;
