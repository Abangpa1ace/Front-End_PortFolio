import React, { useState, useEffect } from 'react';
import { NAVBAR_MENU } from '../../Data/config';
import "./Navbar.scss";

const Navbar = ({ pageY }) => {
  const [isShrink, setIsShrink] = useState(false);
  const [menuFocus, setMenuFocus] = useState(0);

  useEffect(() => {
    setIsShrink(pageY > 20);
    setMenuFocus(
      pageY <= 1010 ? 0
      : pageY <= 2020 ? 1
      : pageY <= 3380 ? 2
      : 3
    )
  }, [pageY])

  const changeMenuFocus = (id, scroll) => {
    setMenuFocus(id)
    window.scrollTo(0, scroll);
  }

  return (
    <nav id="Navbar" className={isShrink ? 'shrink' : ''}>
      <section className='nav-container'>
        <h2 onClick={() => changeMenuFocus(0, 0)} >TaeHyung Kim</h2>
        <ul className="nav-menu">
          {NAVBAR_MENU.map(menu => 
            <li key={menu.id} onClick={() => changeMenuFocus(menu.id, menu.scroll)}
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
