import styled from 'styled-components';
import { COLORS } from '../../../constants';

export const Container = styled.header`
  display: flex;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: ${COLORS.steel};
  box-shadow: 0px 2px 2px 1px rgba(255, 255, 255,0.1);

  h1{
    width: 50%;
    color: ${COLORS.merigold};
    width: auto;
  }
`;
