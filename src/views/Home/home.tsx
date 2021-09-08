import React from 'react';
import Header from '../../components/Header/header';

import { Container } from './homeStyle';

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <Container>
      <h1>Instituto Educar</h1>
    </Container>
    </>
  )
}

export default Home;