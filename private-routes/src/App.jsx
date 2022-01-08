import logo from './logo.svg';
import './App.css';
import { Navigation } from './components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Welcome } from './components/Welcome';
import { Dashboard } from './components/Dashboard';
import { Settings } from './components/Settings';
import { Login } from './components/Login';
import { PrivateRoute } from './components/PrivateRoute';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/dashboard/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
