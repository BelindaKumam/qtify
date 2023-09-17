import { useEffect, useState } from 'react';
import './App.css';
import { fetchTopAlbums, fetchNewAlbums, fetchAllSongs } from './api/api';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import styles from "./App.module.css";
import CustomAccordion from './components/Accordion/CustomAccordion';
import {accordionData} from './config/helper-config';
import FilterTabs from './components/FilterTabs/FilterTabs';
function App() {
const [topAlbumsData,setTopAlbumsData] = useState([]);
const [newAlbumsData,setNewAlbumsData] = useState([]);
const [allSongsData,setAllSongsData] = useState([]);

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

   const generateAllSongsData = async () => {
    try {
      const data = await fetchAllSongs();
      setAllSongsData(data);
    } catch(err) {
      console.log(err)
    }
   } 

  useEffect(()=>{
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  },[]) 

  return (
    <div className="App">
      <NavBar />  
      <Hero />
      <div className={styles.sectionWrapper}>
      <Section type="album" title="Top Albums" data={topAlbumsData} />
      <Section type="album" title="New Albums" data={newAlbumsData} />
      {/* <Section type="songs" title="Songs" data={allSongsData} /> */}
    
    <div className={styles.filterSongsWrapper}>
      <div>
        <h3 className={styles.tabsTitle}>Songs</h3>
      </div>
      <FilterTabs data={allSongsData}/>
    </div>
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
