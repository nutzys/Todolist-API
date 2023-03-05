import React, {useState, useEffect} from 'react'
import './TodoForm.css';

const TodoForm: React.FC<{onSaveCount: any, onSaveId: any}> = (props) => {

    const [count, setCount] = useState<string>('');
    const [id, setId] = useState<string>('');

    const formHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSaveCount(count);
    }

    const idFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onSaveId(id);
    }
  return (
    <div className='form-fields'>
        <form onSubmit={formHandler}>
            <select name="count" onChange={(e) => setCount(e.target.value)}>
                <option disabled selected>Select Count</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <button>GET COUNT</button>
        </form>
        <form onSubmit={idFormHandler}>
            <select name="userid" onChange={(e) => setId(e.target.value)}>
                <option selected disabled>Select ID</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <button>GET USERID</button>
        </form>
    </div>
  )
}

export default TodoForm