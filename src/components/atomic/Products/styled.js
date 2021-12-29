import styled from 'styled-components';
import V from '../../../assets/icon/validation-v.svg';
import { COLORS } from '../../../constants';

export const Container = styled.div`
  width: 20%;
  display: flex;
  justify-self: center;
  align-self: center;

  .price {
      flex:1 1 260px;
      border: 1px solid  ${COLORS.merigold};
      border-radius: 10px;
      padding: 20px 0;
      margin: 10px;
      
      span {
        color: ${COLORS.merigold};
        margin: 20px auto;
        display: block;
        font-size: 3em;
        text-align: center;
        font-weight: bold;
        padding: 10px 0 5px 0;
        border-top: 4px solid ${COLORS.denim};
        border-bottom: 4px solid ${COLORS.denim};
      }
      h2{
      text-align: center;
      margin-top: 20px;
      font-size: 3em;
      color:${COLORS.screen} ;  
      }
      sup{
        font-size: 1.5rem;
      }
      ul{   
      max-width: 300px;
      margin: 20px auto;
      font-size: 1.21em;
      font-style: italic;
      color: ${COLORS.screen};}

      li{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      }
      li::after{
      content: url(${V});
      display: block;
      color: ${COLORS.merigold};
      }

      a{
      width: 100%;
      display: block;
      margin: 0px 0;
      border: 1px solid ${COLORS.denim};
      color: ${COLORS.screen};
      text-transform: uppercase;
      font-weight: bold;
      font-size: 2.25em;
      padding: 15px 0;
      text-align: center;
      
      :hover{
        transition: 0.3s;
      font-size: 2.50em;
      border-top: 1px solid ${COLORS.merigold};
      border-bottom: 1px solid ${COLORS.merigold};
      }

      }  
    }
`;
