import React from "react";
import { Container } from "./styled";
import Header from "../../components/organisms/header";
import Main from "../../components/organisms/main";
import Skills from "../../components/molecules/skills";
function home() {
  return (
    <Container>
      <Header />
      <Main />
      <Skills/>
    </Container>
  );
}

export default home;
