import logo from './logo.svg';
import './App.css';
import StaticCard from './components/StaticCard'

function App() {
  return (
    <div className="App">
      <StaticCard heading={"Mobile Operating System"} list={['Android', 'Blackberry', 'iPhone', 'Windows Phone']} />
      <StaticCard heading={"Mobile Manufacturers"} list={['Samsung', 'HTC', 'Micromax', 'Apple']} />
    </div>
  );
}

export default App;

// 
