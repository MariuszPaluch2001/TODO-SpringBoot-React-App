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
    public List<Todo> getAll(){
        return todoRepository.getAll();
    }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable("id") int id){
        return todoRepository.getById(id);
    }

    @PostMapping("")
    public int add(@RequestBody List<Todo> todos){
        return todoRepository.save(todos);
    }

    @PutMapping("/{id}")
    public int update(@PathVariable("id") int id, @RequestBody Todo updatedMovie){
        Todo todo = todoRepository.getById(id);

        if (todo == null)
            return 204;

        todo.setTask_name(updatedMovie.getTask_name());
        todo.setDescription(updatedMovie.getDescription());
        todo.setIs_finished(updatedMovie.getIs_finished());

        todoRepository.update(todo);

        return 200;
    }

    @PatchMapping("/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Todo updatedMovie){
        Todo todo = todoRepository.getById(id);

        if (todo == null)
            return 204;

        if(updatedMovie.getTask_name() != null && !updatedMovie.getTask_name().isEmpty())
            todo.setTask_name(updatedMovie.getTask_name());
        if(updatedMovie.getDescription() != null && !updatedMovie.getDescription().isEmpty())
            todo.setDescription(updatedMovie.getDescription());
        if(updatedMovie.getIs_finished() != null)
            todo.setIs_finished(updatedMovie.getIs_finished());

        todoRepository.update(todo);

        return 200;
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id){
        return todoRepository.delete(id);
    }
}