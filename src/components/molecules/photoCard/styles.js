import styled from "styled-components";
import { COLORS } from "../../../constants/index";

export const Container = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: end;
  img {
    position: relative;
    z-index: 5;
    width: 250px;
    height: 300px;
    margin-right: 15%;
    border-radius: 16px;
  }
`;
export const Triangle = styled.div`
  border-left: 400px solid transparent;
  border-right: 400px solid ${COLORS.steel};
  border-top: 450px solid transparent;
  position: absolute;
  top: -40px;
  right: 0;
`;
