import React, { useEffect } from "react";

import protectedRoute from "../hooks/protectedRoute";

import Container from "../components/Container";
import Form from "../components/Form";
const Protected = (props) => {
  return (
    <Container>
      <h1>Protected</h1>
      <Form />
    </Container>
  );
};

export default protectedRoute(Protected);
