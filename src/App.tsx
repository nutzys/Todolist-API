import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import fetchTodos from './api/fetchTodos';
import fetchUsers from './api/fetchUsers';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './model/todo';

function App() {
  
  const [todo, setTodo] = useState<Todo[]>([]);
  const [id, setId] = useState<number>(0);
  const [isId, setIsId] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(200);

  const onSaveCount = (limit: number) => {
    setLimit(limit);
  }

  const onSaveId = (id: number) => {
    setId(id);
  }

  const onClickPage = (page: number) => {
    setPage(page);
    console.log(page);
  }

  const {data, isLoading} = useQuery({
    queryKey: ['todos', page, limit],
    queryFn: () => fetchTodos(page, limit),
    keepPreviousData: true,
    onSuccess: data => setTodo(data)
  })  

  const {data: userQuery} = useQuery({
    queryKey: ['users', id, 'todos'],
    queryFn: () => fetchUsers(id),
    onSuccess: data => setTodo(data)
  })
  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      <TodoList todo={todo} page={page} onClickPage={onClickPage} isLoading={isLoading}/>
    </div>
  );
}

export default App;
