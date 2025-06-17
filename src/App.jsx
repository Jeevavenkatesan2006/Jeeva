import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import Text from "./components/Text"
import About from './components/About';
import ServiceSection from "./components/ServiceSection";



function App() {
  const [Count, SetCount] = useState(0)

  return (
    <div>
<Navbar />


<CustomCursor/>
<Preloader/>
<Text/>
<About/>
<ServiceSection/>












  </div>
  )
}

export default App