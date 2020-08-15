import React from "react";
import Button from "../components/Button";
import { button, formContainer, input } from "../styles/Styles";

const ConfirmSignUp = ({ confirmSignUp, setFormState }) => {
  return (
    <div style={formContainer}>
      <input
        style={input}
        onChange={(e) => {
          e.persist();
          setFormState(e);
        }}
        name="confirmationCode"
        placeholder="Confirmation code"
      />
      <Button title="Confirm Sign Up" onClick={confirmSignUp} />
    </div>
  );
};

export default ConfirmSignUp;
