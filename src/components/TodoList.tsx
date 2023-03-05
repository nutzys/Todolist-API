import React, { useState } from 'react'
import { Todo } from '../model/todo';
import TodoItem from './TodoItem'
import './TodoList.css';

interface Props {
  todo: Todo[],
  page: number,
  onClickPage: (page: number) => void,
  isLoading: boolean
}

const TodoList: React.FC<Props> = (props) => {
  const [page, setPage] = useState<number>(0);
  const clickPlusHandler = () => {
    setPage(page + 1);
    props.onClickPage(page);
  }
  const clickMinusHandler = () => {
    setPage(page - 1);
    props.onClickPage(page);
  }
  if(props.isLoading) return (<h1>Loading...</h1>)
  return (
    <div>
      {props.todo?.map((item: Todo) => (
      <TodoItem
      title={item.title}
      userId={item.userId}
      key={item.id}
      />
      ))}
      <div>
        <button onClick={(e) => clickMinusHandler()} disabled={page === 0} className="btn">Previous</button>
        Page: {page}
        <button onClick={(e) => clickPlusHandler()} className="btn">Next</button>
      </div>
    </div>
  )
}

export default TodoList