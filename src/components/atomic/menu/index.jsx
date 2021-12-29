import React from 'react';

import { Container } from './styled';

function Menu() {
  return (
  <Container>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Produtos</a></li>
      <li><a href="">Contato</a></li>
    </ul>
  </Container>
  );
}

export default Menu;