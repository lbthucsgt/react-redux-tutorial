import React from 'react'
import store from "../store";
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from "../actions/type";
import {useDispatch, useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import Table from "./component/table";


const Test = (props) => {
    const dispatch = useDispatch();
    const value = useSelector(state => state.counterReducer.value);
    console.log('store', store.getState());
    
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
            
            You clicked: {value} times
            <button className="ml-5" onClick={() => store.dispatch({type:COUNTER_INCREMENT})}>+</button>
            <button className="ml-5" onClick={() => dispatch({type:COUNTER_DECREMENT})}>-</button>
        </div>
    )
};

export default Test
    