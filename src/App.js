import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums } from './api/api';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import styles from "./App.module.css";

function App() {
const [topAlbumsData,setTopAlbumsData] = useState([]);

  const generateData = async () => {
    try {
       const data = await fetchTopAlbums();
       setTopAlbumsData(data);
    } catch(err) {
      console.err(err);
    } 
  
   }

  useEffect(()=>{
    generateData();
  },[]) 

  return (
    <div className="App">
      <NavBar />  
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type="album" title="Top Albums" data={topAlbumsData} />
    </div>
    </div>
  );
}

export default App;
