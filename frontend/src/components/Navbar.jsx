import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Register from "./Register";
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

    //return Navbar here
    return ( <nav className='navbar'><ul class="tabs">
      <br></br> 
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li class='item-left'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            </Link>
          </li>

          <li class='item-left'>
          <a href = "./Home"><img src = "images/logo.png" alt = "logo" class = "logo"></img></a>
        
            <Link
              to='/Home'
              className='nav-links'
              onClick={closeMobileMenu}
            > Home </Link>
          </li>
          <li class='item-left'>
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            > About </Link>
          </li>
          <li class='item-left'>
            <Link
              to='/Projects'
              className='nav-links'
              onClick={closeMobileMenu}
            > Projects </Link>
          </li>
          <li class='item-left'>
            <Link
              to='/TechInterview'
              className='nav-links'
              onClick={closeMobileMenu}
            > Technical Interviews </Link>
          </li>
          <li class='item-left'>
            <Link
              to='/StudyRes'
              className='nav-links'
              onClick={closeMobileMenu}
            > Study Resources </Link>
          </li>
          <li class='item-left'>
            <Link
              to='/CreatePost'
              className='nav-links'
              onClick={closeMobileMenu}
            >  Create Post </Link>
            </li>

           
            
            <li class='item-right'>
            <Link
              to='/Login'
              className='nav-links'
              onClick={closeMobileMenu}
            > Login </Link>
          </li>
          <li class='item-right'>
            <Link
              to='/Register'
              className='nav-links'
              onClick={closeMobileMenu}
            > Register </Link>
          </li>
        </ul>
       </ul>
    </nav>
    )
}

export default Navbar;


