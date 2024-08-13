import { useState,useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import CardsDiv from './components/CardsDiv'
import FIlter from './components/FIlter'
import Navbar from './components/Navbar'
import { filterData, apiUrl } from './data'
import { toast } from 'react-toastify';   
import { TailSpin } from 'react-loader-spinner';



function App() {
  const [courses,setCourses] = useState([]);
  const [loading,setLoading] = useState(true);


  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedData = await fetch(apiUrl);
      const data = await fetchedData.json();
      // console.log(data);
      toast.success("data fetched")
      setCourses(data.data);
      setLoading(false)
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
      <CardsDiv className = "w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]" courses={courses}/>

    </div>

  )
}

export default App