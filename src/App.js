import React from 'react'
import "./App.css";
import SocialIcon from "./components/SocialIcon";
import HeaderMenu from "./components/HeaderMenu";
import { Profile } from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {

  var lastposition = 0;
  window.addEventListener('scroll', () => {
    var currentPosition = window.pageYOffset;
    if (currentPosition === 0) {
      document.body.classList.remove("header-show");
      document.body.classList.remove("header-hide");
    } else {
      if (currentPosition > 70) {
        document.body.classList.add("header-hide");
      }
      if (currentPosition > lastposition) {
        document.body.classList.remove("header-show");
      } else {
        document.body.classList.remove("header-hide");
        document.body.classList.add("header-show");
      }
    }
    lastposition = currentPosition;
  });


  return (
    <>
      <SocialIcon  />
      <HeaderMenu />
      <Profile />
      <About />
      <Experience />
      <Footer/>
    </>
  );
}

export default App;

