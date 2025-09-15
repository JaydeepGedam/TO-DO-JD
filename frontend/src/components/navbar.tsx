import React from 'react'
import {Plus} from 'lucide-react'
const navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm rounded-md">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost text-xl">Do or Die</a>
            </div>
            <div className="navbar-end">
                <a href="/create" className="btn btn-primary"><Plus size={20} /> New Task</a>
            </div>
        </div>
    )
}

export default navbar
