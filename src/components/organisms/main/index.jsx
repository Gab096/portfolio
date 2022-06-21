import React from "react";
import PhotoCard from "../../molecules/photoCard";

import { Container, TextContainer, Description } from "./styled";

function Main() {
  return (
    <Container>
      <Description>
        <TextContainer>
          <h1>
            Hi, <br />
            my name is <span>Gabriel</span>
          </h1>
          <p>
            I’m a JavaScript Developer, programing has become my everyday
            affair. masting styles,grids cant be less interesting.
          </p>
        </TextContainer>
        <button>Download CV</button>
      </Description>
      <PhotoCard />
    </Container>
  );
}

export default Main;
