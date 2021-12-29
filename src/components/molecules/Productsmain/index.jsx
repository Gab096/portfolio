import React from 'react';
import Products from '../../atomic/Products';

import { Container } from './styled';

function Productsmain() {
  return( 
  <Container>
    <Products/>
    <Products/>
    <Products/>
  </Container>
  );
}

export default Productsmain;