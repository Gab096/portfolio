import styled from "styled-components";
import { COLORS } from "../../../constants";

export const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-content: center;

  ul {
    width: 50%;
    display: flex;
    flex-direction: row;
    li {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      a {
        margin: 0 10px;
        font-size: 20px;

        color: ${COLORS.merigold};
        :hover {
          transition: 0.5s;
          color: ${COLORS.aliceBlue};
        }
      }
    }
  }
`;
