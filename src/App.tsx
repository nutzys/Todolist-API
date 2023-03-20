import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {

  const [id, setId] = useState<number>(1);
  const [limit, setLimit] = useState<number>(200);
  const [isUser, setIsUser] = useState<boolean>(false);

  const onSaveCount = (limits: number) => {
    setLimit(limits);
    setIsUser(false);
  }
  const onSaveId = (uid: number) => {
    setId(uid);
    setIsUser(true);
  }
  
  return (
    <div className="App">
      <TodoForm onSaveCount={onSaveCount} onSaveId={onSaveId}/>
      {!isUser ? (<TodoList limit={limit}/>) : (<UserList userId={id}/>)}
    </div>
  );
}

export default App;
