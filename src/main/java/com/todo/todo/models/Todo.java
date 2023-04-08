package com.todo.todo.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private int id;
    private String task_name;
    private String description;
    private boolean is_finished;
}