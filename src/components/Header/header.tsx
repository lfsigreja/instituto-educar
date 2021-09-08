import React from 'react';
import { Link } from 'react-router-dom';

import { NavBar } from './style';

const Header: React.FC = () => {
  return (
    <NavBar>
        <div className='header-logo'>Logo</div>
        <div className='header-menu'>
          <Link to='/' className='header-menu__link'>Inicio</Link>
          <Link to='/' className='header-menu__link'>Quem Somos</Link>
          <Link to='/' className='header-menu__link'>Contato</Link>
          <Link to='/' className='header-menu__link'>Blog</Link>
          <Link to='/' className='header-menu__link contribute'>
              Contribua
            </Link>
        </div>
    </NavBar>
  );
}

export default Header;