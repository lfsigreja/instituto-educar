import React from 'react';
import { SingUpButton } from '../../styles/buttonSingUp';
import { Paragraph } from '../../styles/paragraph';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Title } from '../../styles/title';

import { Container } from '../queroSerVoluntario/styles'

const queroSerAluno: React.FC = () => {
    return (
        <Container>
            <Title>quero ser aluno</Title>
            <div className='container-content'>
                <Paragraph>
                    O Instituto Educar é uma alternativa ou complemento à escola, já que oferece um ambiente voltado a atividades lúdicas e educativas.
                </Paragraph>
            </div>
            <SingUpButton rel="noreferrer" target="_blank" href='https://google.com'>Inscreva-se</SingUpButton>
            <div className='container-content'>
                <ParagraphTitle>
                    Você pode participar do projeto da seguinte forma:
                </ParagraphTitle>
                <ParagraphTitle>
                    Bolsa Projeto Social Educar
                </ParagraphTitle>
                <Paragraph>Todos os anos o EDUCAR: Espaço de Leitura, Mediação e Formação de Leitor abre vagas para crianças que comprovem vulnerabilidade social. Atualmente temos 50 crianças bolsistas atuantes no projeto e uma lista de espera com mais de 150 crianças.</Paragraph>
                <Paragraph>É necessário que a família cadastre a criança e participe da seleção.</Paragraph>
                <ParagraphTitle>Documentos necessários (originais e xerox)</ParagraphTitle>
                <Paragraph>
                    <dl>
                        <dt>Dos responsáveis</dt>
                        <dd>RG;</dd>
                        <dd>CPF;</dd>
                        <dd>Comprovante de residência;</dd>
                        <dt>Da criança: </dt>
                        <dd>RG;</dd>
                        <dd>CPF;</dd>
                        <dd>Comprovante de residência;</dd>
                        <dd>Cartão de vacina atualizado;</dd>
                        <dt>Documentos que devem ser preenchidos e assinados:</dt>
                        <dd>Ficha individual da criança;</dd>
                        <dd>Termo de compromisso e responsabilidade do participante;</dd>
                        <dd>Ficha de Inscrição do aluno;</dd>
                        <dd>Anamnese da criança;</dd>
                    </dl>
                </Paragraph>
                <ParagraphTitle>
                    Quais os critérios de seleção:
                </ParagraphTitle>
                <Paragraph>
                    Cada família e criança é avaliada individualmente através da ficha cadastral, anamnese e entrevista. Nossa equipe irá avaliar as informações prestadas pela família e será encaminhado à equipe de seleção.
                </Paragraph>
                <Paragraph>
                    OBS.: Para continuar no Projeto faz-se necessário que o cadastro da criança esteja atualizado e a mesma participe de TODAS AS ATIVIDADES. Caso contrário perde a bolsa social.
                </Paragraph>
                <ParagraphTitle>
                    Taxa comunitária:
                </ParagraphTitle>
                <Paragraph>
                    Caso a criança não seja selecionada pode participar das atividades do Projeto Social Educar através da taxa comunitária que custa R$ 30 reais para participar de cada atividade com duração 50 de minutos.
                </Paragraph>
                <Paragraph>
                    OBS.: Para participar pagando o valor da taxa comunitária a criança deve OBRIGATORIAMENTE comprovar residência no bairro da Massaranduba e o cadastro deve sempre estar atualizado. Quando se inscrever na atividades a criança não pode faltar caso contrário perde o benéfico da taxa comunitária.
                </Paragraph>
                <ParagraphTitle>Participação normal TABELA DE VALORES 2021 – EDUCAR</ParagraphTitle>
            </div>
            <SingUpButton rel="noreferrer" target="_blank" href='https://google.com'>Inscreva-se</SingUpButton>
            <div className='container-content'></div>
        </Container>
    )
}

export default queroSerAluno;