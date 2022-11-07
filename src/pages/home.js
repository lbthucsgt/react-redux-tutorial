import React from 'react'
import { useState } from "react";
import {Link} from "react-router-dom";
import Table from "./table";

const Home = (props) => {
    const [count, setCount] = useState(0);
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
            
            <div className="m-3">
                <button className="btn-primary" onClick={() => {setCount(count + 1)}}>+</button>
                <span className="m-3">{count}</span>
                <button className="btn-primary" onClick={() => {setCount(count - 1)}}>-</button>
            </div>
        </div>
    );
};

export default Home
