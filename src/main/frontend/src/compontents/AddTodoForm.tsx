import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from 'axios';

interface Todo_I{
  task_name : string,
  description : string,
  is_finished : boolean
}

export default function AddTodoForm() {
  
  const [state, setState]= useState<Todo_I>({
    task_name : "", 
    description : "",
    is_finished : false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState({...state, [name]: value } as unknown as Pick<Todo_I, keyof Todo_I>);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.post<Todo_I>(`http://localhost:8080/api/todo/`, [state], {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
        setState({
          task_name : "", 
          description : "",
          is_finished : false
        });
    })
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br/>
      <Form.Group className="mb-3" controlId="taskname">
        <Form.Label>Task name</Form.Label>
        <Form.Control type="text" name="task_name" placeholder="Enter task name" onChange={handleChange} />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Task description</Form.Label>
        <Form.Control as="textarea" name="description" rows={3} onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}