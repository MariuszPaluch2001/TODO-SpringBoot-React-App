package com.todo.todo.controllers;

import com.todo.todo.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class TodoController {
//    @Autowired
//    MovieRepository movieRepository;

    @GetMapping("")
    public List<Todo> getAll(){
        return new ArrayList<Todo>(Arrays.asList(
                new Todo(1,"task1", "description", false),
                new Todo(2,"task2", "description", true))
        );
    }

    @GetMapping("/{id}")
    public Todo getById(@PathVariable("id") int id){
        return new Todo(1,"task1", "description", false);
    }

}