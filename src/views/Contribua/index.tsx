import React from 'react';
import { Link } from 'react-router-dom';

import Menino from '../../assets/menino.png'
import Menina from '../../assets/menina.png'

import { Container } from './styles';
import { Title } from '../../styles/title';

const Contribua: React.FC = () => {
    return (
        <Container>
            <Title>COMO CONTRIBUIR</Title>
            <div className='contribute-btn'>
                <Link to='/quero-ser-voluntario'>
                    <img src={Menino} alt="Quero ser voluntário" />
                    QUERO SER VOLUNTÁRIO
                </Link>
                <Link to='/quero-ser-aluno'>
                    <img src={Menina} alt="Quero ser aluno" />
                    QUERO SER <br />ALUNO
                </Link>
            </div>
            <Title>AJUDE DE OUTRAS FORMAS</Title>
            <div className='contribute-donate'>
                <p>Para fazer parte deste propósito, sua ajuda como doador é de grande importância. Para isso, disponibilizamos a chave PIX e QR Code. Todos os valores doados serão utilizados para o funcionamento da ONG e aporte das crianças e jovens estudantes.  </p>
                <p>Sua participação é essencial para fazer o projeto crescer! Estamos em constante processo de melhoria e contamos com você para isso. Sugestões, parcerias ou mais informações, pode entrar em contato Direct do Instagram, ou por Whatsapp.</p>
                <h6>Sua contribuição faz toda diferença!</h6>
            </div>
            <div className='contribute-pix'>
                <div>
                    <div className='first'>
                        <h3>Chave PIX</h3>
                        <p>42095264000116</p>
                    </div>
                    <div>
                        <h3>Endereço</h3>
                        <p>Rua Rafael Uchôa, nº 90 e, Massaranduba.</p>
                        <p>Atendimento com hora marcada.</p>
                        <p>Segunda a Sexta: 09h ás 11h | 13:30 ás 16h.</p>
                    </div>
                </div>
                <div>
                    <div className='contribute-pix__QRCODE'>
                        <img src='https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png' alt='QRCODE PIX' />
                    </div>
                    <h5>DOE ATRAVÉS DO QR CODE</h5>
                </div>
            </div>
        </Container>
    );
};

export default Contribua;