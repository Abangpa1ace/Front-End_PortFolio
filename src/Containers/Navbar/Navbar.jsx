import React, { useState, useEffect, useCallback } from 'react';
import { NAVBAR_MENU } from '../../Data/config';
import "./Navbar.scss";

const Navbar = () => {
  const [isShrink, setIsShrink] = useState(false);
  const [menuFocus, setMenuFocus] = useState(0);

  const handleScroll = useCallback(() => {
    const { pageYOffset } = window;
    setIsShrink(pageYOffset > 20);
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll])

  const changeMenuFocus = (id, scroll) => {
    setMenuFocus(id)
  }

  return (
    <nav id="Navbar" className={isShrink ? 'shrink' : ''}>
      <section className='nav-container'>
        <h2 onClick={() => changeMenuFocus(0)} >TaeHyung Kim</h2>
        <ul className="nav-menu">
          {NAVBAR_MENU.map(menu => 
            <li key={menu.id} onClick={() => changeMenuFocus(menu.id)}
              className={`nav-menu-item ${menu.id === menuFocus ? 'focus' : ''}`} >
              {menu.text}
            </li>
          )}
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
