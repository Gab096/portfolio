import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  background-color: black;
  color: ${COLORS.aliceBlue};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${COLORS.aliceBlue};
  }
  span {
    vertical-align: middle;
    font-size: 48px;
    color: ${COLORS.merigold};
  }
  p {
    width: 46%;
  }
`;
