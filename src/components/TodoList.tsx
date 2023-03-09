import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import fetchTodos from '../api/fetchTodos';
import fetchUsers from '../api/fetchUsers';
import { Todo } from '../model/todo';
import TodoItem from './TodoItem'
import './TodoList.css';

interface Props {
  limit: number,
  id: number,
}

const TodoList: React.FC<Props> = (props) => {
  
  const [page, setPage] = useState<number>(1);
  const [todo, setTodo] = useState<Todo[]>([]);
  const [user, setUser] = useState<Todo[]>([]);
  const [isUser, setIsUser] = useState<boolean>(false);

  const {data: todoQuery, isLoading} = useQuery({
    queryKey: ['todos', page, props.limit],
    queryFn: () => fetchTodos(page, props.limit),
    keepPreviousData: true,
    onSuccess: data => {
      setIsUser(false);
      setTodo(data);
    }
  })  
  const {data: userQuery} = useQuery({
    queryKey: ['users', props.id, 'todos'],
    queryFn: () => fetchUsers(props.id),
    onSuccess: data => {
      setIsUser(true);
      setUser(data);
    }
  })
  const clickPlusHandler = () => {
    setPage(old => old + 1);
  }
  
  const clickMinusHandler = () => {
    setPage(old => old - 1);
  }


  if(isLoading) return (<h1>Loading...</h1>)

  return (
    <div>
      {!isUser ? todo.map(item => (
        <TodoItem
        title={item.title}
        userId={item.userId}
        />
      )) : (
        user.map(user => (
          <TodoItem 
          title={user.title}
          userId={user.userId}
          />
        ))
      )}
      <div>
        <button onClick={(e) => clickMinusHandler()} disabled={page === 1} className="btn">Previous</button>
        Page: {page}
        <button onClick={(e) => clickPlusHandler()} className="btn">Next</button>
      </div>
    </div>
  )
}

export default TodoList