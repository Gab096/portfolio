import React from "react";
import PhotoCard from "../../molecules/photoCard";

import { Container, TextContainer } from "./styled";

function Main() {
  return (
    <Container>
      <TextContainer>
        <h1>
          Hi, <br />
          my name is <span>Gabriel</span>
        </h1>
        <p>
          I’m a JavaScript Developer, programing has become my everyday affair.
          masting styles,grids cant be less interesting.
        </p>
      </TextContainer>
      <PhotoCard />
    </Container>
  );
}

export default Main;
