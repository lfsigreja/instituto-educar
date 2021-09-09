import React from 'react';
import { Link } from 'react-router-dom';

import Menino from '../../assets/menino.png'
import Menina from '../../assets/menina.png'

import { Container } from './styles';
import { Title } from '../../styles/title';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Paragraph } from '../../styles/paragraph';

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
                <ParagraphTitle>QUERO SER DOADOR(A)</ParagraphTitle>
                <Paragraph>
                    Mudar o mundo leva tempo. É um processo contínuo. Mas transformando a vida de um desses pequenos girassóis, estamos mudando o mundo deles.
                </Paragraph>
                <ParagraphTitle>PARA ONDE VÃO AS DOAÇÕES?</ParagraphTitle>
                <Paragraph>
                    Nossa sede está localizada na comunidade de Massaranduba, próximo ao bairro da Ribeira, e o projeto atende até 50 crianças, de diversas regiões da Grande Salvador.  Todas elas recebem um <strong>KIT Leitura, Arte e Educação</strong> e recebem <strong>apoio didático</strong>  para dar vida a seus sonhos através das aulas de música, teatro e demais atividades.
                </Paragraph>
                <Paragraph>
                    O EDUCAR poderia receber ainda mais crianças! Temos uma lista de espera que aumenta a cada dia. Porém, ainda não temos recursos suficientes, por isso precisamos de apoio financeiro, material, bem como voluntários que queiram fazer parte dessa corrente.
                </Paragraph>
                <Paragraph>
                    Você pode ajudar com doações de qualquer valor via <strong>PIX</strong>. Para doar alimentos e outros itens, entre em contato via Whatsapp ou pelo Instagram.
                </Paragraph>
                <Paragraph>
                    Com a sua participação, vamos juntos transformar a vida de cada vez mais crianças, proporcionando um ambiente de acolhimento e inclusão.
                </Paragraph>
                <Paragraph>Sua ajuda faz <strong>TODA A DIFERENÇA!</strong></Paragraph>
                <Paragraph>Contamos com você! 💛</Paragraph>
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