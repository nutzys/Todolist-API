import React from 'react'
import './TodoItem.css';

interface Props {
    title: string,
    userId: number,
}

const TodoItem: React.FC<Props> = (props) => {
  return (
    <div className='item'>
        <h2>{props.title}</h2>
        <p>UserID: {props.userId}</p>
    </div>
  )
}

export default TodoItem