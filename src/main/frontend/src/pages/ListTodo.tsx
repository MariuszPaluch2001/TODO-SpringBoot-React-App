import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

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
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map(movie =>
                <tr>
                  <td>{movie.id}</td>
                  <td>{movie.task_name}</td>
                  <td>{movie.description}</td>
                </tr>
              )
          }
        </tbody>
      </Table>
    )
}