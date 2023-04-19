import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import axios from 'axios';

interface Todo_I{
  id : number,
  task_name : string,
  description : string,
  is_finished : boolean
}

export default function UpdateForm() {
  
  const [todos, setTodos]= useState<Todo_I[]>([]);
  
  const refreshList = async () => {
    axios.get<Todo_I[]>(`http://localhost:8080/api/todo/notFinished`, {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'application/json'
    }}).then(res => {
        setTodos(res.data);
    });
  }

  useEffect(() => { refreshList(); }, []);

  const setDoneTodo = (id : number) => {
    const todo = {id : id, is_finished : true}
    axios.patch<number>(`http://localhost:8080/api/todo/${id}`, todo, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const todoscopy = Array.from(todos);
    const todos_with_id = todoscopy.findIndex((obj) => obj.id === id);
    
    if (todos_with_id > -1) {
      todoscopy.splice(todos_with_id, 1);
    }
    setTodos(todoscopy)
    console.log(todoscopy)
  };

  return (
    <Table className='mt-4' striped bordered hover size='sm'>
    <thead>
      <tr>
        <th>Task name</th>
        <th>Description</th>
        <th>Done</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(item => (
        <tr key={item.id}>
          <td>{item.task_name}</td>
          <td>{item.description}</td>
          <td>
            <Button className="mr-2" variant="primary" onClick={() => setDoneTodo(item.id)}>Done</Button>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>);
}