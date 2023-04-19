package com.todo.todo.controllers;

import com.todo.todo.models.Todo;
import com.todo.todo.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {
    @Autowired
    TodoRepository todoRepository;

    @GetMapping("")
    public ResponseEntity<List<Todo>> getAll(){
        return ResponseEntity.ok()
                .body(todoRepository.getAll());
    }

    @GetMapping("/notFinished")
    public ResponseEntity<List<Todo>> getNotFinished(){
        return ResponseEntity.ok()
                .body(todoRepository.getNotFinished());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Todo> getById(@PathVariable("id") int id){
        return ResponseEntity.ok()
                .body(todoRepository.getById(id));
    }

    @PostMapping("")
    public ResponseEntity<Integer> add(@RequestBody List<Todo> todo){
        if (todoRepository.save(todo) == 0)
            return ResponseEntity.ok().body(todo.size());

        return ResponseEntity.badRequest()
                .body(0);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable("id") int id, @RequestBody Todo updatedTodo){
        Todo todo = todoRepository.getById(id);

        if (todo == null)
            return ResponseEntity.noContent()
                    .build();

        todo.setTask_name(updatedTodo.getTask_name());
        todo.setDescription(updatedTodo.getDescription());
        todo.setIs_finished(updatedTodo.getIs_finished());

        todoRepository.update(todo);

        return ResponseEntity.ok()
                .body("Item updated");
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> partiallyUpdate(@PathVariable("id") int id, @RequestBody Todo updatedTodo){
        Todo todo = todoRepository.getById(id);

        if (todo == null)
            return ResponseEntity.noContent()
                    .build();

        if(updatedTodo.getTask_name() != null && !updatedTodo.getTask_name().isEmpty())
            todo.setTask_name(updatedTodo.getTask_name());
        if(updatedTodo.getDescription() != null && !updatedTodo.getDescription().isEmpty())
            todo.setDescription(updatedTodo.getDescription());
        if(updatedTodo.getIs_finished() != null)
            todo.setIs_finished(updatedTodo.getIs_finished());

        todoRepository.update(todo);

        return ResponseEntity.ok()
                .body("Item updated");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") int id){
        if (todoRepository.delete(id) == 1)
            return ResponseEntity.ok()
                    .body("Item deleted");

        return ResponseEntity.badRequest()
                .body("Item not deleted");
    }
}