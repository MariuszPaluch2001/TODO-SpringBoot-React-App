import './App.css';
import BoxComponent from '../compontents/TodoBox';
import React from 'react';

export default function Home(){
  return (
    <div>
      <div className='header-center-div'>
        <h1>Welcome in my own TODO app!</h1>
      </div>
      <div className='box-div'>
        <BoxComponent text='Add Todo' color='red' link='AddTodo' box_size={10}></BoxComponent>
        <BoxComponent text='List Todo' color='blue' link='ListTodo' box_size={10}></BoxComponent>
        <BoxComponent text='Check Todo' color = 'green' link='SetCheckTodo' box_size={10}></BoxComponent>
      </div>
    </div>
  );
}