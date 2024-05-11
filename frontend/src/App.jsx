
import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './components/Footer'
function App() {

  const [photos, setPhotos] = useState([])
  const [updateUI, setUpdateUI] = useState("")

  useEffect(()=>{
    axios.get("http://localhost:5000/api/get").then((res) => {
      console.log(res.data);
      setPhotos(res.data)
    }).catch((err) => console.log(err))
  }, [updateUI])

  return (
    <>
      <Navbar></Navbar>
      <Grid photos={photos}></Grid>
      <Button setUpdateUI={setUpdateUI} ></Button>
      <Footer></Footer>
    </>
  )
}

export default App
