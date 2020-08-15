import React from "react";
import Button from "../components/Button";
import { button, formContainer, input } from "../styles/Styles";

const ForgotPasswordSubmit = ({ submitNewPassword, setFormState }) => {
  return (
    <div style={formContainer}>
      <input
        style={input}
        name="password"
        placeholder="password"
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
      />
      <Button
        style={button}
        title="Save New Password"
        onClick={submitNewPassword}
      />
    </div>
  );
};

export default ForgotPasswordSubmit;
