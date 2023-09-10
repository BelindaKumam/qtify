import './App.css';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />  
      <Hero />
      <Card />
    </div>
  );
}

export default App;
