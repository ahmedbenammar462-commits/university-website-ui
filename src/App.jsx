import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Prog from './Components/Programs/Prog';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/campus';
import Testimontials from './Components/Testimontials/testimontials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
const App = () => {
  const [playState,setPlayState]=useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
          <Title subTitle="Our PROGRAM" title="What We Offer" />
          <Prog />
          <About setPlayState={setPlayState}/>
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
          <Title subTitle="testimontials" title="What Student Says" />
          <Testimontials />
          <Title subTitle="Contact us" title="Get in Touch" />
          <Contact />
          <Footer />
          
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App;
