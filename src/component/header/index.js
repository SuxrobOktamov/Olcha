import React, { createContext, useState } from 'react';
import './header.css';
import TopHeader from './topHeader';
import BottomHeader from './bottomHeader';
import Contact from './contact';


export const CountContext = createContext(false);

function Header() {

  const [IsTrue, setIsTrue] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [botScroll, setBotScroll] = useState(false);
  const type =  [IsTrue, setIsTrue, isScroll, botScroll];

  window.addEventListener( 'scroll', ()=> {
    if(window.scrollY > 100) {
      setIsScroll(true);
    }else {
      setIsScroll(false);
    }

    if(window.scrollY > 100) {
      setBotScroll(false);
    }else {
      setBotScroll(true);
    }
  })

  return (
    <CountContext.Provider value={type}>
      <header className='header'>
        <TopHeader />
        <BottomHeader />
        {IsTrue? <Contact />: null}
      </header>
    </CountContext.Provider>
    
  )
}

export default Header;