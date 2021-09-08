import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'

import { NavBar } from './style';

const Header: React.FC = () => {
  return (
    <NavBar>
        <img className='header-logo' src={Logo} alt='Instituto Educar' />
        <div className='header-menu'>
          <Link to='/' className='header-menu__link'>Inicio</Link>
          <Link to='/quem-somos' className='header-menu__link'>Quem Somos</Link>
          <Link to='/contato' className='header-menu__link'>Contato</Link>
          <Link to='/blog' className='header-menu__link'>Blog</Link>
          <Link to='/contribua' className='header-menu__link contribute'>
              Contribua
            </Link>
        </div>
    </NavBar>
  );
}

export default Header;