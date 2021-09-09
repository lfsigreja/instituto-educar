import React from 'react';
import { Paragraph } from '../../styles/paragraph';
import { ParagraphTitle } from '../../styles/paragraphTitle';
import { Title } from '../../styles/title';

import { Container } from './styles';

const Contato: React.FC = () => {
    return (
        <Container>
            <Title>Contato</Title>
            <Paragraph>
                <strong>O EDUCAR</strong> está presente no Instagram, Facebook, e em breve no Youtube e LinkedIn.
            </Paragraph>
            <Paragraph>Para mais informações:</Paragraph>
            <Paragraph><strong>Telefone/Whatsapp:</strong> (71) 99304-4593</Paragraph>
        </Container>
    );
}

export default Contato;