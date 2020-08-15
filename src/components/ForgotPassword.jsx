import React from "react";
import Button from "../components/Button";
import { button, formContainer, input } from "../styles/Styles";

const ForgotPassword = ({ resetPassword, setFormState }) => {
  return (
    <div style={formContainer}>
      <input
        style={input}
        name="username"
        placeholder="username"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <Button title="Reset Password" onClick={resetPassword} />
    </div>
  );
};

export default ForgotPassword;
