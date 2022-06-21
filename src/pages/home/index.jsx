import React from "react";
import { Container } from "./styled";
import Header from "../../components/organisms/header";
import Main from "../../components/organisms/main";
function home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default home;
