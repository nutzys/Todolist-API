import React, { useEffect, useState } from 'react'
import { GetAllTodos } from '../api/fetchAllTodos';
import { GetTodos } from '../api/fetchTodos';
import TodoItem from './TodoItem'
import './TodoList.css';

interface Props {
  limit: number,
}

const TodoList: React.FC<Props> = (props) => {
  
  const [page, setPage] = useState<number>(1);
  const [totalLimit, setTotalLimit] = useState<number>(0);
  const {data: allTodos} = GetAllTodos();
  const {data, isLoading} = GetTodos({
    page: page, 
    limit: props.limit
  });

  const clickPlusHandler = () => {
    setPage(old => old + 1);
    let limitString = props.limit.toString();
    setTotalLimit(old => old + parseInt(limitString));
  }
  
  const clickMinusHandler = () => {
    setPage(old => old - 1);
  }

  if(isLoading) return <h1>Loading...</h1>

  return (
    <div>
        {data?.map(item => (
          <TodoItem
          title={item.title}
          userId={item.userId}
          />
        ))}
      <div>
        <button onClick={(e) => clickMinusHandler()} disabled={page === 1} className="btn">Previous</button>
        Page: {page}
        <button onClick={(e) => clickPlusHandler()} className="btn" disabled={totalLimit === allTodos.length}>Next</button>
      </div>
    </div>
  )
}

export default TodoList