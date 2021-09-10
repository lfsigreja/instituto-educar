import React from 'react';
import { Paragraph } from '../../styles/paragraph';

import { Container } from './styles';

interface IBlog {
    title: string,
    img: string,
    text: string
}

export function BlogPost() {

    const post = {
        title: 'Concurso de desenho da Cidade Baixa – F & C Moda Infantil',
        img: 'https://i0.wp.com/www.anf.org.br/wp-content/uploads/2020/03/87802543_536983387225638_1508582240240533504_o-245x300.jpg',
        text: `Organizador: EDUCAR – Espaço de Leitura, Mediação e Formação de Leitor.
        Quando: 01 a 31 de março
        Onde: F & C – Moda Infantil, Presentes e Variedades
        Para quem?: Crianças de 2 a 12 anos
        Evento Gratuito
        Envie seu desenho até 30/03 pelo whats app 9 9304-4593 / @fcpresentesevariedades/ @educarassessorialeitura
        
        Pegue a sua ficha de participação na Loja F & C – Moda Infantil, Presentes e Variedades ou peça pelo Whats App. Envie a foto do seu belo trabalho para o Whats App 9 9304-4593 que iremos postar no Instagram @educarassessorialeitura.
        
        Importante lembrar que é a partir de desenhos que as crianças mostram seus sentimentos e emoções. Nessa produção ela usa a sua energia, o seu esforço fazendo algo para o mundo. É no desenho que vemos os sentimentos mais puros de uma criança. Por isso a importância de dar atenção aos desenhos dela, mesmo sendo rabiscos.`

    }

    return (
        <Container>
            <h2>{post.title}</h2>
            <div className='post-content'>
                <img src={post.img} alt='Imagem do post' />
                <Paragraph>{post.text}</Paragraph>
            </div>
        </Container>
    )
}
