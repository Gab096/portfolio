import React from 'react';
import Menu from '../../atomic/menu';
import { Container } from './styled';

function Header() {
  return (
  <Container>
    <h1>kedev</h1>
    <Menu/>
  </Container>
  );
}

export default Header;