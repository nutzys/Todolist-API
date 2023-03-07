import { useQuery } from '@tanstack/react-query';
import React, {useState} from 'react';
import fetchTodos from './api/fetchTodos';
import fetchUsers from './api/fetchUsers';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserList from './components/UserList';
import { Todo } from './model/todo';

function App() {
  
  const [todo, setTodo] = useState<Todo[]>([]);
  const [id, setId] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(200);
  const [user, setUser] = useState<Todo[]>([]);
  const [isUser, setIsUser] = useState<boolean>(false);

  const onSaveCount = (limits: number) => {
    setLimit(limits);
  }
  const onSaveId = (uid: number) => {
    setId(uid);
  }

  const onClickPage = (page: number) => {
    setPage(page);
  }
  const {data: todoQuery, isLoading} = useQuery({
    queryKey: ['todos', page, limit],
    queryFn: () => fetchTodos(page, limit),
    keepPreviousData: true,
    onSuccess: data => {
      setIsUser(false);
      setTodo(data);
    }
  })  
  
  const {data: userQuery} = useQuery({
    queryKey: ['users', id, 'todos'],
    queryFn: () => fetchUsers(id),
    onSuccess: data => {
      setIsUser(true);
      setUser(data);
    }
  })
  
  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      {!isUser && <TodoList todo={todo} page={page} onClickPage={onClickPage} isLoading={isLoading}/>}
      {isUser && <UserList user={user}/>}
    </div>
  );
}

export default App;
