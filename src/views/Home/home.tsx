import React from 'react';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import { Container } from './homeStyle';

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <Container>
      <h1>Instituto Educar</h1>
    </Container>
    <Footer />
    </>
  )
}

export default Home;