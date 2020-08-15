import React from "react";
import Button from "../components/Button";
import { formContainer, input, button } from "../styles/Styles";

const SignIn = ({ signIn, setFormState }) => {
  return (
    <div style={formContainer}>
      <input
        style={input}
        placeholder="username"
        name="username"
        type="text"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <input
        style={input}
        placeholder="password"
        name="password"
        type="text"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <Button title="Sign In" onClick={signIn} />
    </div>
  );
};

export default SignIn;
