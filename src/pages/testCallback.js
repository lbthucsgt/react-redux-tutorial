import React, {useCallback, useState} from 'react'
import Todos from "./component/Todos";
import {Link} from "react-router-dom";
import Table from "./component/table";

const TestCallback = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const increment = () => {
        setCount((c) => c + 1);
    };
    
    // original
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    
    /*const addTodo = useCallback(() => {            // giúp chặn render ko cần thiết của component Todos
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);*/
    
    
    return (
        <div className="w-50 ml-5">
            <div className='scroll-up-dashboard'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/todo'>Todo</Link></li>
                    <li><Link to='/yesno'>Yes Or No</Link></li>
                    <li><Link to='/test-callback'>Test Callback Hook</Link></li>
                </ul>
            </div>
            <Table/>
            
            
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                <button style={{marginRight: '10px'}} onClick={increment}>+</button>
                Count: {count}
            </div>
        </div>
    );
};


export default TestCallback
