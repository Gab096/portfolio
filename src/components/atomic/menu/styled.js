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
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0 10px;
        font-size: 26px;

        text-decoration: none;
        color: ${COLORS.merigold};
        :hover {
          transition: 0.3s;
          padding: 0 10px;
          font-size: 30px;
          border-bottom: 1px solid ${COLORS.merigold};
          border-radius: 5px;
        }
      }
    }
  }
`;
