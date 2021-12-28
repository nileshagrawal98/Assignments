import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';

const initFormData = {
  name: '',
  age: '',
  address: '',
  department: '',
  salary: '',
  martialStatus: '',
  profilePhoto: ''
}

function App() {
  const [form, setForm] = useState(initFormData);

  const [showTable, setShowTable] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowTable(true);
  }

  return (
    <div className="App">
      <Form setForm={setForm} form={form} handleFormSubmit={handleFormSubmit}/>
      {showTable && <Table form={form}/>}
      
    </div>
  );
}

export default App;
