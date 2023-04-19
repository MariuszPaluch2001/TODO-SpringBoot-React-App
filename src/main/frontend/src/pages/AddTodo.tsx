import { Button, Form } from "react-bootstrap";

export default function AddTodo() {
  return (
    <div>
      <h1 className="header">Add todo</h1>
      <div className="container">
        <Form>
          <br/>
          <Form.Group className="mb-3" controlId="taskname">
            <Form.Label>Task name</Form.Label>
            <Form.Control type="text" name="taskname" placeholder="Enter task name" />
          </Form.Group>
          <br/>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Task description</Form.Label>
            <Form.Control as="textarea" name="description" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}