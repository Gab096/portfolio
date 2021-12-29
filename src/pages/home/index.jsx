import React from 'react';
import { Container } from './styled';
import Header from '../../components/molecules/header';
import Parallax from '../../components/molecules/parallax/indes';
function home() {
  return (
    <Container>
      <Header/>
      <Parallax/>
    </Container>
    );
}

export default home;