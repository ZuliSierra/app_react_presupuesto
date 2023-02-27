import React, { useContext } from 'react';
import {FaPlusCircle} from 'react-icons/fa';
import {FaMinusCircle} from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    
    }

    const decreaseAllocation = (name) => {
        const decexpense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: decexpense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
        <td><FaPlusCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
