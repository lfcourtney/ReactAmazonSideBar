import React, {useState} from 'react';
import {Transition} from 'react-transition-group';
import './App.css';
import BackgroundPage from './Components/BackgroundPage';
import HamburgerButton from './Components/HamburgerButton';
import Sidenav from './Components/Sidenav';
import {useAmazonContext} from './Context/AmazonContext';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
      setNavOpen(true);
  }

  const closeNav = () => {
    setNavOpen(false);
  }

  const {entryStore} = useAmazonContext();

  return (
    <div className="App">
      <HamburgerButton click={openNav} />
      <Transition
      in={navOpen && entryStore}
      timeout={300}
      mountOnEnter
      unmountOnExit>
      {state => (
        <>
        <Sidenav state={state} />
        <div className="overlay" 
        style={state === "entering" ? {animation: "show .3s forwards"} 
        : state === "entered" ? {opacity: "1"} : {animation: "show .3s backwards reverse"}}
        onClick={closeNav}></div>
        <div className="closeBtn" style={state === "entering" ? {animation: "show .3s forwards"} 
        : state === "entered" ? {opacity: "1"} : {animation: "show .3s backwards reverse"}}
        onClick={closeNav}>&times;</div>
      </>
      )}
      </Transition>
      <BackgroundPage />
    </div>
  );
}

export default App;
