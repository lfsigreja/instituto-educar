import React from 'react';
import Map from '../../components/Map/Map'

import insta from '../../assets/insta-icon.png'
import email from '../../assets/email-icon.png'
import whatsapp from '../../assets/whatsapp-icon.png'
import youtube from '../../assets/youtube-icon.png'

import { Link } from 'react-router-dom';
import { ContactIcon } from '../../styles/contactIcon';
import { ContentContainer } from '../../styles/contentContainer';
import { Paragraph } from '../../styles/paragraph';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Title } from '../../styles/title';
import { Container } from './styles';

const Contato: React.FC = () => {

    return (
        <Container>
            <Title>Contato</Title>
            <ContentContainer>
                <Paragraph>
                    <strong>O EDUCAR</strong> está presente no Instagram, Facebook, e em breve no Youtube e LinkedIn.
                </Paragraph>
                <Paragraph>
                    Você, pessoa física ou jurídica, pode fazer parte da nossa comunidade, ajudando a transformar a vida de crianças e jovens de todo o Brasil. Só precisamos saber um pouco mais sobre você para construirmos juntos essa parceria. Vamos lá?
                </Paragraph>
                <ParagraphTitle>Para mais informações:</ParagraphTitle>
            </ContentContainer>
            <div className='contact-container'>
                <Link className='btn' to='/quero-ser-voluntario'>Quero ser voluntário</Link>
                <div className='icons'>
                    <ContactIcon rel="noreferrer" target="_blank" href='https://www.instagram.com/institutoeducar2018/'>
                        <img src={insta} alt="Instagram" />
                    </ContactIcon>
                    <ContactIcon href='mailto:educarassessorialeitura@gmail.com'>
                        <img src={email} alt="E-mail" />
                    </ContactIcon>
                    <ContactIcon rel="noreferrer" target="_blank" href='https://api.WhatsApp.com/send?phone=5571993044593'>
                        <img src={whatsapp} alt="Whatsapp" />
                    </ContactIcon>
                    <ContactIcon rel="noreferrer" target="_blank" href='https://www.youtube.com/c/InstitutoEDUCAR2018'>
                        <img src={youtube} alt="Youtube" />
                    </ContactIcon>
                </div>
            </div>
            <Map />
            <ContentContainer>
                <ParagraphTitle>QUANDO FUNCIONAMOS?</ParagraphTitle>
                <Paragraph>
                    Segunda a Sexta-feira, das 09h às 11h  e das 13h30 às 16h.
                </Paragraph>
                <Paragraph>
                    Endereço: Rua Rafael Uchôa, 90 E - Massaranduba. Atrás do Sesi do Caminho de Areia.
                </Paragraph>
            </ContentContainer>
        </Container>
    );
}

export default Contato;