import React from "react";
import Button from "../components/Button";
import { formContainer, input } from "../styles/Styles";

const SignUp = ({ signUp, setFormState }) => {
  return (
    <div style={formContainer}>
      <input
        type="text"
        style={input}
        name="username"
        placeholder="username"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <input
        type="text"
        style={input}
        name="password"
        placeholder="password"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <input
        type="text"
        style={input}
        name="email"
        placeholder="email"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <Button title="Sign Up" onClick={signUp} />
    </div>
  );
};

export default SignUp;
