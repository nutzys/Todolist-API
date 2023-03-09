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
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(200);
  const [user, setUser] = useState<Todo[]>([]);
  const [isUser, setIsUser] = useState<boolean>(false);

  const onSaveCount = (limits: number) => {
    setLimit(limits);
  }
  const onSaveId = (uid: number) => {
    setId(uid);
  }
  
  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      <TodoList todo={todo} limit={limit} id={id}/>
    </div>
  );
}

export default App;
