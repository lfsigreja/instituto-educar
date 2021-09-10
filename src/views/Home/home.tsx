import React from 'react';
import { Container } from './homeStyle';
import educar2 from '../../assets/educar2.png'
import edc from '../../assets/edc.png';
import lta from '../../assets/lta.png';
import msc from '../../assets/msc.png';
import dnc from '../../assets/dnc.png';

const Home: React.FC = () => {
  return (
    <Container>


      <div className="join">
      <div className="up">
        <h1>Instituto Educar</h1>
        <div className='sub-text'>Espaço de leitura, mediação e formação de leitor.</div>
        <div className='home-text'>
        <p>O Instituto Educar é um espaço para crianças e jovens unidos pela literatura. Tendo como idealizadora, Catarina Assis, especialista em Educação, Pobreza e Desigualdade Social, bibliotecária, escritora e produtora cultural; o projeto tem por objetivo ser um espaço alternativo para leitura, socialização, criatividade e principalmente, diversão através do universo literário.</p>
        </div>
      </div>

      <div className='img-edc'>
        <img  src={educar2} alt="Instituto Educar"/>
      </div>
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

    <div className='rentangulo'>

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
    </Container>
  )
}

export default Home;