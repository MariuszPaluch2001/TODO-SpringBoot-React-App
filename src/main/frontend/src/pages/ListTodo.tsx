import React, { useEffect, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Checkbox } from '@mui/material';

interface Todo_I{
  id : number,
  task_name : string,
  description : string,
  is_finished : boolean
}

export default function ListTodo() {
  const [todos, setTodos] = useState<Todo_I[]>([]);

  useEffect(() => {
    axios.get<Todo_I[]>(`http://localhost:8080/api/todo/`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'application/json'
    }}).then(res => {
        setTodos(res.data);
      })
  },[])
 
    return (
      <div>
        <h1 className="header">Todo list</h1>
        <div className='table-div'>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Is finished</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.map(movie =>
                    <tr>
                      <td>{movie.id}</td>
                      <td>{movie.task_name}</td>
                      <td>{movie.description}</td>
                      <td><Checkbox checked={movie.is_finished} disabled={true}/></td>
                    </tr>
                  )
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
}