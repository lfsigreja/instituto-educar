import React from 'react';
import { Container } from './homeStyle';
import educar2 from '../../assets/educar2.png'
import edc from '../../assets/edc.png';
import lta from '../../assets/lta.png';
import msc from '../../assets/msc.png';
import dnc from '../../assets/dnc.png';
import Map from '../../components/Map/Map'
import insta from '../../assets/insta-icon.png'
import email from '../../assets/email-icon.png'
import whatsapp from '../../assets/whatsapp-icon.png'
import youtube from '../../assets/youtube-icon.png'
import { ContactIcon } from '../../styles/contactIcon';

const Home: React.FC = () => {
  return (
    <Container>


      <div className="join">
      <div className="up">
        <h1>Instituto Educar</h1>
        <div className='sub-text'>Espaço de leitura, mediação e formação de leitor.</div>
        <div className="txt1">
          O Instituto EDUCAR é um espaço para crianças e jovens se unirem por algo maior: a literatura.
        </div>
        <div className='txt2'>

        Idealizado por Catarina Assis, especialista em Educação, Pobreza e Desigualdade Social, bibliotecária e escritora, o projeto busca ser um espaço alternativo para leitura, socialização, criatividade e principalmente, diversão através do universo literário.
       
        </div>
        <div className="txt3">Buscamos tornar as crianças, nossos pequenos girassóis, personagens de suas próprias histórias!</div>
      </div>
      

      <div className='img-edc'>
        <img  src={educar2} alt="Instituto Educar"/>
      </div>
      
      </div>

      <div className="txtend">
        O espaço oferece, além da leitura, um ambiente para brincar livremente, rir, se encantar e imaginar, para os nossos girassóis florirem!
      </div>

    <div className='atv'>
      ATIVIDADES
    </div>
    <div className='imgsml'>
      <div>
      <img  src={edc} alt="Educação"/>
      </div>
      <div>
      <img  src={lta} alt="Leitura"/>
      </div>
      <div>
      <img  src={msc} alt="Música"/>
      </div>
      <div>
      <img  src={dnc} alt="Dança"/>
      </div>
    </div>

    <div className='retangulo'>

        <div className='cntittle'>NOSSO IMPACTO</div>

      
      <div className='countn'>
        <div className='border1'>
          <h2>
            200
          </h2>
          <h3>
            Alunos
          </h3>
        </div>
        <div>
          <h2>
            70
          </h2>
          <h3>
              Famílias Atendidas
          </h3>
        </div>
        <div  className='border2'>
          <h2>
            2000
          </h2>
          <h3>
            Livros Distribuídos
          </h3>
        </div>
      </div>
    </div>
    <div className='tltact'>
      CONTATO
    </div>
    <div className="alg">
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
    <Map />
    </Container>
  )
}

export default Home;