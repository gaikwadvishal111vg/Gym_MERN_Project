import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import "./App.css";
  import { BrowserRouter as Router, Route } from 'react-router-dom';
  import Navbar from "./components/Navbar"
  import Hero from "./components/Hero"
  import WorkoutSessions from "./components/WorkoutSessions"
  import Gallery from "./components/Gallery";
  import Pricing from "./components/Pricing";
  import Contact from "./components/Contact";
  import MBICalculater from "./components/MBICalculater";
  import Footer from "./components/Footer";
  const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <MBICalculater/>
      <Footer/>
      <ToastContainer  position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light" />
    </Router>
    </>
  )
}

export default App