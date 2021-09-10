import React from 'react';
import educar3 from '../../assets/educar3.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

import img6 from '../../assets/img6.png'
import img5 from '../../assets/img5.png'
import cats1 from '../../assets/cats1.png'
import img4 from '../../assets/img4.png'


import { ContentContainer } from '../../styles/contentContainer';
import { Paragraph } from '../../styles/paragraph';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Title } from '../../styles/title';
import { Container } from '../quem-somos/style' 

const Quemsomos: React.FC = () => {
  return (
      <Container>
          <Title className="titulo">O PROJETO</Title>
            <ContentContainer>
                <Paragraph>
                    O<strong> EDUCAR</strong> é um ambiente multidisciplinar que leva a crianças e jovens, além da mediação de leitura, oficinas e cursos em várias outras áreas como língua estrangeira, música, teatro, oficinas de química, física; além claro de vivências lúdicas, passatempos educativos e dinâmicas que estimulem a imaginação da criança. 

                </Paragraph>
                <ParagraphTitle>Como são os encontros?</ParagraphTitle>
                <Paragraph>
                O projeto oferece aos estudantes períodos não-obrigatórios de leitura, no ritmo de cada um, consultando o material que desejarem, com pausas e, inclusive, trocando as obras que não despertarem o interesse, tanto quanto for necessário para a criança encontrar o livro ideal. 

                </Paragraph>
                <ParagraphTitle>Há acompanhamento?</ParagraphTitle>
                <Paragraph>
                Todas as atividades do <strong>EDUCAR</strong> são desenvolvidas e acompanhadas por profissionais qualificados das áreas de arquivologia, música, teatro, biblioteconomia, artes, pedagogia, psicologia, fonoaudiologia, pediatria, assistência social, bem como assistência jurídica e aval do Conselho Tutelar. 

                </Paragraph>
                <Paragraph>
                Prezamos muito pelo bem-estar dos alunos e o desenvolvimento não só a curto, mas também a longo prazo, formando não apenas leitores, mas cidadãos. Formando pessoas. 

                </Paragraph>
               
                <div className='img-edc3'>
                  <img  src={educar3} alt="Instituto Educar"/>
                </div>
                <ParagraphTitle>Como é o espaço?</ParagraphTitle>
                <Paragraph>
                Hoje, o <strong>EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor</strong> conta com 3 ambientes: Uma sala de leitura, brinquedoteca e varanda ampla e coberta para atividades externas. 
                </Paragraph>
                <Paragraph>
                  A ONG possui também uma galeria coletiva que contempla com arte grafitada os transeuntes da comunidade. 

                </Paragraph>
                <Title className="titulo">AÇÕES E ATIVIDADES</Title>
                
                <Paragraph>
                  Existem diversas atividades que o <strong>EDUCAR</strong> realiza com as crianças que fazem parte do projeto, entre elas estão: 
                </Paragraph>

              <Paragraph>

             
                <ul className="ulLista">
                  <li className="lista">Cantinho da leitura</li>
                  <li className="lista">Sacola viajante</li>
                  <li className="lista">releitura de livros para construção de mural</li>
                  <li className="lista"> galeria coletiva</li>
                  <li className="lista"> leitura itinerante x leitura coletiva</li>
                  
                </ul>
          
          
              </Paragraph>

              <Paragraph>
              <ul className="ulLista">
              <li className="lista">  Campanha Pegue, Leve e Leia </li>
                  <li className="lista">Contação de histórias</li>
                  <li className="lista"> Uso e construção de histórias em quadrinhos</li>
                  <li className="lista"> Oficinas e eventos culturais </li>
              </ul>
              </Paragraph>

              <Title className="titulo">PRODUÇÃO CIENTÍFICA</Title>

              <Paragraph>
                Um dos compromissos do <strong>EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor</strong> é pôr em prática ações que estimulem e incentivem a prática da leitura. Ler é viver e entender o mundo ao seu redor, é se conectar com o outro. Por isso, todas as atividades do EDUCAR estão sujeitas a produção científica para auxiliar pesquisas e projetos futuros que envolvam o incentivo à leitura e que como consequência que possam contribuir para a formação de leitores. 
              </Paragraph>
              <Paragraph>
              Alguns projetos de pesquisas em que contribuímos:
               </Paragraph>

                <div className='img-edc3 ajusteimg'>
                  <img  src={img1} alt="Instituto Educar"/>
                  <img  src={img2} alt="Instituto Educar"/>
                </div>

                <Title className="titulo">PARCEIROS</Title>

                <div className='img-edc3'>
                  <img  src={img6} alt="Instituto Educar"/>
                  <img  src={img4} alt="Instituto Educar"/>
                  <img  src={cats1} alt="Instituto Educar"/>
                  <img  src={img5} alt="Instituto Educar"/>
                </div>
            </ContentContainer>
     </Container>
  )
}

export default Quemsomos;