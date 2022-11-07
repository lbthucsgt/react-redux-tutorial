import React, {useState} from 'react'
import { useReducer } from "react";
import Table from "./table";
import { ADDED_TODO, REMOVED_TODO } from '../actions/type';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const Todo = (props) => {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const dispatch = useDispatch();
    const handleNameChange = (event) => setName(event.target.value);
    const handleJobChange = (event) => setJob(event.target.value);
    
    let handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: ADDED_TODO, payload: {name, job}});
        setName('');
        setJob('');
    }
    return (
        <div className="w-50 ml-5">
            <div className='scroll-up-dashboard'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/todo'>Todo</Link></li>
                    <li><Link to='/yesno'>Yes Or No</Link></li>
                </ul>
            </div>
    
            <Table/>
    
            <form onSubmit={handleSubmit}>
                <h1>Add New</h1>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={handleNameChange} />
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={handleJobChange}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default Todo
    