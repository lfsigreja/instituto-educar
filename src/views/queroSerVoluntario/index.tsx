import React from 'react';
import { SingUpButton } from '../../styles/buttonSingUp';

import { Paragraph } from '../../styles/paragraph';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Title } from '../../styles/title';
import { Container } from './styles';

const queroSerVoluntario: React.FC = () => {
  return (
    <Container>
      <Title>quero ser voluntário</Title>
      <div className='container-content'>
        <Paragraph>
          Será um prazer tê-lo(a) conosco.
        </Paragraph>
        <Paragraph>
          Você, pessoa física ou jurídica, pode participar da nossa rede de voluntários o seu tempo para nos ajudar nessa caminhada no EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor.
        </Paragraph>
      </div>
      <SingUpButton rel="noreferrer" target="_blank" href='https://google.com'>Inscreva-se</SingUpButton>
      <div className='container-content'>
        <Paragraph>
          Segue algumas informações para participar como voluntário nas atividades do EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor:
        </Paragraph>
        <ParagraphTitle>
          1 – O trabalho será social, voluntário e não remunerado (lei 13.297, de 2016);
        </ParagraphTitle>
        <ParagraphTitle>
          2 – O  voluntário deverá:
        </ParagraphTitle>
        <Paragraph>
          Enviar carta de interesse para o e-mail educarassessorialeitura@gmail.com, solicitando interesse em participar das atividades do projeto social com as seguintes informações: Nome completo, telefone, endereço, link das redes sociais mais usadas, vaga de interesse, experiência profissional, como conheceu o EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor, por que você está se candidatando ao trabalho voluntário em nosso projeto, como pretende nos ajudar, como é a sua relação com crianças e os menos favorecidos, quanto tempo ( dias ou horário) você pode se dedicar ao trabalho social. OBS: Não esqueça de incluir o seu currículo.
        </Paragraph>
        <Paragraph>
          <ol>
            <li>Estar em dia com o pagamento da anuidade do seu conselho, se for o caso;</li>
            <li>Assinar o termo de adesão ao serviço voluntário e compromisso para aderir ao projeto, com validade semestral, podendo ser renovado por mais seis meses;</li>
            <li>Assinar o termo de autorização e uso de voz e imagem e respectiva cessão de direitos;</li>
            <li>Documentos necessários:</li>
          </ol>
          <ul>
            <li>RG (cópia);</li>
            <li>CPF (cópia);</li>
            <li>título eleitoral (cópia);</li>
            <li>Comprovante de residência atualizada no nome do requerente ou dos pais;</li>
            <li>02 fotos coloridas 3X4 idênticas;</li>
            <li>Apresentar cópia do diploma ou atestado de matrícula e frequência ao curso que deseja pleitear vaga para o voluntariado;</li>
            <li><a rel='noreferrer' target='_blank' href='http://www.ba.gov.br/antecedentes/'>Certidão Negativa de antecedentes criminais da Polícia Civil e Polícia Federal;</a></li>
            <li><a rel='noreferrer' target='_blank' href='https://www.tse.jus.br/eleitor/certidoes/certidao-de-quitacao-eleitoral'>Certidão negativa da Justiça Federal – Estadual, Eleitoral;</a></li>
            <li><a rel='noreferrer' target='_blank' href='https://sistemas.sefaz.ba.gov.br/sistemas/sigat/Default.Aspx?Modulo=CREDITO&Tela=DocEmissaoCertidaoInternet&limparSessao=1&sts_link_externo=2'>Certidão negativa Estadual Eleitoral;</a></li>
            <li><a rel='noreferrer' target='_blank' href='http://www5.tjba.jus.br/portal/certidoes-do-1o-grau/'>Certidão negativa de Execuções Penais, Cíveis e Criminais.
            </a></li>
          </ul>
        </Paragraph>
        <ParagraphTitle>3 – O voluntário poderá ser:</ParagraphTitle>
        <Paragraph>
          <ol>
            <li> Estudante, com necessidade de fazer estágio supervisionado, para complementar a sua formação; </li>
            <li> Recém-formado, com necessidade de iniciar e garantir experiência profissional; </li>
            <li> Profissional experiente que deseje dar a sua contribuição ao Projeto Social. </li>
          </ol>
        </Paragraph>
        <ParagraphTitle>
          4 – A atuação será em local combinado com a assessoria do EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor. O atendimento poderá ser feito na sede do EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor ou em outra instituição ou de forma remota via plataformas virtuais;
        </ParagraphTitle>
        <ParagraphTitle>
          5 – O atendimento pode ser individual, semanal, quinzenal ou até mesmo mensal, com duração de uma hora. É possível o trabalho grupal, levando-se em consideração o perfil do voluntário e da instituição onde desenvolve o seu trabalho, desde que consultado o(a) supervisor(a) e a assessoria do EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor;
        </ParagraphTitle>
        <ParagraphTitle>
          6 – Deverão ser feitos registros diários desses atendimentos através de relatórios, seguindo o modelo indicado pela assessoria do EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor;
        </ParagraphTitle>
        <ParagraphTitle>
          7 – O voluntário participará das Reuniões de Formação, onde são atualizadas as ações do projeto e discutidos temas pertinentes à atuação profissional;
        </ParagraphTitle>
        <ParagraphTitle>
          8 – Está previsto, no EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor, que todas as atividades estão sujeitas a produção científica para posterior publicação sem a obrigação de pagamentos aos participantes.
        </ParagraphTitle>
      </div>
      <SingUpButton rel="noreferrer" target="_blank" href='https://www.google.com'>Inscreva-se</SingUpButton>
    </Container>
  );
};

export default queroSerVoluntario;