package com.todo.todo.repositories;

import com.todo.todo.models.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TodoRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Todo> getAll(){
        return jdbcTemplate.query("SELECT id, task_name, description, is_finished FROM to_do",
                BeanPropertyRowMapper.newInstance(Todo.class));
    }

    public Todo getById(int id){
        return jdbcTemplate.queryForObject("SELECT id, task_name, description, is_finished FROM to_do WHERE " +
                "id = ?", BeanPropertyRowMapper.newInstance(Todo.class), id);
    }

    public int save(List<Todo> todos){
        todos.forEach(movie -> jdbcTemplate.update(
                "INSERT INTO to_do(task_name,description,is_finished) VALUES(?,?,?)",
                movie.getTask_name(),movie.getDescription(), movie.getIs_finished()));
        return 0;
    }

    public int delete(int id){
        return jdbcTemplate.update("DELETE FROM to_do WHERE id=?", id);
    }

}