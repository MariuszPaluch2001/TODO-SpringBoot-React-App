
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import ListTodo from './ListTodo';
import AddTodo from './AddTodo';
import SetCheckTodo from '../SetCheckTodo';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function App() {
    return (
    <div className="App">
        <header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ListTodo" element={<ListTodo />} />
              <Route path="/AddTodo" element={<AddTodo />} />
              <Route path="/SetCheckTodo" element={<SetCheckTodo />} />
            </Routes>
          </BrowserRouter>
        </header>
    </div>);
}