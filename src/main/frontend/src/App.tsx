import React from 'react';
import logo from './logo.svg';
import './App.css';
import BoxComponent from './compontents/TodoBox';

function App() {
  return (
    <div>
      <div className='header-center-div'>
        <h1>Welcome in my own TODO app!</h1>
      </div>
      <div className='box-div'>
        <BoxComponent></BoxComponent>
        <BoxComponent></BoxComponent>
        <BoxComponent></BoxComponent>
      </div>
    </div>
  );
}

export default App;
