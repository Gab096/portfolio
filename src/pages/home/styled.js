import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height:100vh;
  background: ${COLORS.steel};
  img{
    height: 40vh;
  }
`;
