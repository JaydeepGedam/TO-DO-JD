import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { updateTodoURL } from '../common/urls.js';
import { redirect, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; // Import Toaster component

const UpdateTodoForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // Add this code inside the UpdateTodoForm component, before the return statement
    const [searchParams] = useSearchParams();

    useEffect(() => {
        // Extract query parameters from URL
        const id = searchParams.get('id');
        const urlTitle = searchParams.get('title');
        const urlDescription = searchParams.get('description');

        // Set the form fields with URL parameters
        if (urlTitle) setTitle(decodeURIComponent(urlTitle));
        if (urlDescription) setDescription(decodeURIComponent(urlDescription));
    }, [searchParams]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(updateTodoURL + '/' + searchParams.get('id'), {                
                title: title,
                description: description
            })
            if (response.status === 200) {
                toast.success("Task Updated Successfully");
                setTimeout(() => {
                    window.location.href = '/';
                }, 1000);
            }
            else {
                toast.error("Failed to Update To-Do");
            }
        }
        catch (err) {
            console.error(err);
            toast.error("Error creating To-Do"); // Add error toast for catch block
        }
    }

    return (
        <>
            <div className='flex flex-col gap-4 items-center bg-[#161212] w-fit px-14 py-10 justify-center mx-auto rounded-2xl'>
                <h1 className='text-green-500 text-2xl font-bold'>Update To-Do</h1>
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
                <button className="btn btn-dash btn-success w-sm" onClick={handleSubmit}>Update Task</button>
            </div>
            <Toaster position="top-center" /> {/* Add Toaster component */}
        </>
    )
}

export default UpdateTodoForm;
