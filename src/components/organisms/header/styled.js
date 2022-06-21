import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.header`
  display: flex;
  padding: 15px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background: ${COLORS.steel};
  box-shadow: 3px 2px 2px 1px rgba(94, 97, 100, 0.7);

  h1 {
    width: 50%;
    color: ${COLORS.merigold};
    width: auto;
  }
`;
