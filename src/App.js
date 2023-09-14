import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums, fetchNewAlbums } from './api/api';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import styles from "./App.module.css";
import CustomAccordion from './components/Accordion/CustomAccordion';
import {accordionData} from './config/helper-config';
function App() {
const [topAlbumsData,setTopAlbumsData] = useState([]);
const [newAlbumsData,setNewAlbumsData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
       const data = await fetchTopAlbums();
       setTopAlbumsData(data);
    } catch(err) {
      console.err(err);
    } 
  
   }

   const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch(err) {
      console.log(err)
    }
   }

  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
  },[]) 

  return (
    <div className="App">
      <NavBar />  
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type="album" title="Top Albums" data={topAlbumsData} />
      <Section type="album" title="New Albums" data={newAlbumsData} />
    </div>
    <hr className={styles.line}></hr>
    <div className={styles.customAccordionWrapper}>
      <h1 className={styles.accordionHeader}>FQA</h1>
       {accordionData?.length ? (
        accordionData.map((each, index) => {
          return <CustomAccordion key={index} data={each}/>
        })
       ) : (
        <></>
       )}
    </div>
    </div>
  );
}

export default App;
