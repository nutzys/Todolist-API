import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './model/todo';

function App() {

  const [id, setId] = useState<number>(0);
  const [limit, setLimit] = useState<number>(200);

  const onSaveCount = (limits: number) => {
    setLimit(limits);
  }
  const onSaveId = (uid: number) => {
    setId(uid);
  }
  
  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      <TodoList limit={limit} id={id}/>
    </div>
  );
}

export default App;
