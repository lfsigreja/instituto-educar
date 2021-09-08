import React from 'react';
import { Link } from 'react-router-dom';
import Edu from '../../assets/EDUUU.png'

import { Container } from './style';

const Footer: React.FC = () => {
  return (
    <Container>
        <div className='footer-volunteer'>
            <Link to='/' >SEJA UM VOLUNTÁRIO!</Link>
            <a rel="noreferrer" target="_blank" href='https://www.instagram.com/institutoeducar2018/' >Instagram</a>
            <a href='mailto:educarassessorialeitura@gmail.com' >E-mail</a>
            <a rel="noreferrer" target="_blank" href='https://www.youtube.com/channel/UCb9rc4YA-ufm-yTOj09Jfxg' >YouTube</a>
        </div>
        <img className='footer__edu-img' src={Edu} alt='Educação' ></img>
        <div className='footer__address'>
            <p>Rua Rafael Uchôa, nº 90 e, Massaranduba.</p>
            <p>Atendimento com hora marcada.</p>
            <p>Segunda a Sexta: 09h ás 11h | 13:30 ás 16h.</p>
        </div>
    </Container>
  );
}

export default Footer;