import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import CardsDiv from './components/CardsDiv'
import FIlter from './components/FIlter'
import Navbar from './components/Navbar'
import { filterData, apiUrl } from './data'
import { toast } from 'react-toastify';   


function App() {
  const [courses,setCourses] = useState(null);
  
  const fetchData = async () => {
    try {
      const fetchedData = await fetch(apiUrl);
      const data = await fetchedData.json();
      // console.log(data);
      setCourses(data.data);
    }
    catch (error) {
      console.log("error is : ", error);
    }
  }

  useEffect(() => {
    console.log('Fetching data...');
    fetchData();
  }, []);

  return (

    <div>
      <Navbar />
      <FIlter filterData={filterData} />
      <CardsDiv courses={courses}/>

    </div>

  )
}

export default App
