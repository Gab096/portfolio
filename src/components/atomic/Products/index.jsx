import React from 'react';

import { Container } from './styled';

function Products() {
  return (
  <Container> 
    <div className='price'>
		<h2>cobre</h2>
		<span><sup>R$</sup>19</span>
			<ul>
				<li>Planos Ilimitados</li>
				<li>Acesso Restrito</li>
				<li>Conteúdo Secreto</li>
				<li>Suporte 24h</li>
			</ul>
			<a href="#">Comprar</a>
		</div>	
  </Container>
  );
}

export default Products;