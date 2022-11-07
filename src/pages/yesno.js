import React, {useState} from 'react'
import Table from "./table";
import {YES_OR_NO} from '../actions/type';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {yesOrNo} from "../actions/call_api_thunk";

const Yesno = (props) => {
    let answer = useSelector(state => state.yesnoReducer.answer);
    const dispatch = useDispatch();
    
    let handleClick = () => {
        dispatch({type: YES_OR_NO, payload: '.....'});
        dispatch(yesOrNo());
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
    
            <button onClick={handleClick}>Pick</button>
            <div>answer: {answer}</div>
        </div>
    )
};

export default Yesno
    