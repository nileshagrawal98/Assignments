import logo from './logo.svg';
import './App.css';
import { TodoHome } from './Compontents/TodoHome';
import { Route, Routes } from 'react-router-dom';
import { TodoDetail } from './Compontents/TodoDetail';
import { TodoEdit } from './Compontents/TodoEdit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <TodoHome /> } />
        <Route path="/todo/:id" element={ <TodoDetail /> } />
        <Route path="/todo/:id/edit" element={ <TodoEdit /> } />
        <Route path="*" element={ <h1>404 Page Not Found</h1> } />
      </Routes>
      
    </div>
  );
}

export default App;
