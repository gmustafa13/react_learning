import React, { useState} from 'react'
import './ExpensItem.css'
import ExpenseDate  from './ExpenseDate';
const Expensitem = (props) => {
    const [title, setTitle] = useState(props.title) // it will array with two element 1 is original value next is what u have to update
    const clickHandler=() => {
        setTitle("updated")
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={ props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler }>Change Title</button>
        </div>
    )
}
export default Expensitem;