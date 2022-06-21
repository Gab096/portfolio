import React from "react";
import { Images } from "../../../assets";
import { Container, Triangle } from "./styles";

function PhotoCard() {
  return (
    <Container>
      <img src={Images.Gabriel} alt="oi" />
      <Triangle />
    </Container>
  );
}

export default PhotoCard;
