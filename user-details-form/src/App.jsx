import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';
import { useState, useEffect } from 'react';



function App() {

  const [showTable, setShowTable] = useState(0);

  const [userDetails, setUserDetails] = useState([]);

  const getUserDetails = () => {
    fetch('http://localhost:3001/userDetails')
      .then(data => data.json())
      .then(res => setUserDetails(res));
  }

  useEffect(() => {
    getUserDetails();
  }, [showTable]);

  return (
    <div className="App">
      <Form setShowTable={setShowTable} />
      {showTable ? <Table userDetails={userDetails}/> : ''}

    </div>
  );
}

export default App;
