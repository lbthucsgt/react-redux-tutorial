import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {REMOVED_TODO} from "../actions/type";
import { memo } from "react";

const Table = (props) => {
    const todos = useSelector(state => state.todoReducer);
    const dispatch = useDispatch();
    const removeTodo = (id) => {
        dispatch({type: REMOVED_TODO, payload: id})
    }
    const render = todos.map(todo => {
        return (
            <tr key={todo.id}>
                <td>{todo.name}</td>
                <td>{todo.job}</td>
                <td><button onClick={() => removeTodo(todo.id)}>Delete</button></td>
            </tr>
        );
    });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {render}
                </tbody>
            </table>
        </div>
    )
};

export default memo(Table)
    