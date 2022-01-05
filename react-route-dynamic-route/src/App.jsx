import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { ProductDetails } from './components/ProductDetails';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="*" element={
          <div>
            <img src={process.env.PUBLIC_URL + '/not_found.svg'} alt="404 Page Not Found" width='400' style={{margin: '10px'}}/>
            <h2>Page Not Found</h2>
          </div>
        }/>
      </Routes>
    </div>
  );
}

export default App;
