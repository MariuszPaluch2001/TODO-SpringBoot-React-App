package com.todo.todo.controllers;

import com.todo.todo.models.Todo;
import com.todo.todo.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
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

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id){
        return todoRepository.delete(id);
    }
}