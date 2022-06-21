import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  background: ${COLORS.black};
  color: ${COLORS.aliceBlue};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 50%;
  h1 {
    font-family: "DM Sans";
    color: ${COLORS.aliceBlue};
  }
  span {
    vertical-align: middle;
    font-size: 48px;
    color: ${COLORS.merigold};
  }
  p {
    text-align: justify;
  }
`;
export const Description = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin-top: 32px;
    width: 20%;
    height: 48px;
    border-radius: 10px;
    background: ${COLORS.steel};
    color: ${COLORS.aliceBlue};
    :hover {
      border: 1px solid ${COLORS.merigold};
    }
    :focus {
      background: ${COLORS.merigold};
      color: ${COLORS.black};
    }
  }
`;
