import React from 'react'
import {Plus, Check} from 'lucide-react'
const navbar = () => {
    return (
        <div className="navbar flex justify-between bg-base-200 shadow-sm rounded-md px-8">
            <div className="">
                <a href='/' className="btn btn-ghost text-xl">Do or Die</a>
            </div>
            <div className="gap-3 flex">
                <div>
                    <a href="/completed" className="btn btn-primary"><Check size={20} />Completed</a>
                </div>
                <div>
                    <a href="/create" className="btn btn-primary"><Plus size={20} /> New</a>
                </div>
            </div>
        </div>
    )
}

export default navbar
