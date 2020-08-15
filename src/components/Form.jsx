import React, { useState } from "react";
// component import
import { Auth } from "aws-amplify";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

// style

const initialFormState = {
  username: "",
  password: "",
  confirmationCode: "",
};

const Form = (props) => {
  const [formType, setFormType] = useState("signIn");
  const [formState, setFormState] = useState(initialFormState);

  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    setFormState(newFormState);
  }

  async function signIn({ username, password }, setUser) {
    try {
      const user = await Auth.signIn(username, password);
      const userInfo = { username: user.username, ...user.attributes };
      setUser(userInfo);
    } catch (error) {
      console.log("Error signing in: ", error);
    }
  }

  async function signUp({ username, password, email }, setFormType) {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email },
      });
      console.log("sign up success");
      setFormType("confirmSignUp");
    } catch (error) {
      console.log("Error signing up: ", error);
    }
  }

  async function confirmSignUp({ username, confirmationCode }, setFormType) {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      setFormType("signIn");
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  async function resetPassword({ username }, setFormType) {
    await Auth.forgotPassword(username);
    setFormType("submitNewPassword");
  }

  async function submitNewPassword(
    { username, confirmationCode, password },
    setFormType
  ) {
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, password);
      setFormType("signIn");
    } catch (error) {
      console.log("error updating password...", error);
    }
  }

  function renderForm() {
    switch (formType) {
      case "signIn":
        return (
          <SignIn
            signIn={() => signIn(formState, props.setUser)}
            setFormState={(e) => updateForm(e)}
          />
        );
      case "signUp":
        return (
          <SignUp
            signUp={() => signUp(formState, setFormType)}
            setFormState={(e) => updateForm(e)}
          />
        );
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, setFormType)}
            setFormState={(e) => updateForm(e)}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassword
            resetPassword={() => resetPassword(formState, setFormType)}
            setFormState={(e) => updateForm(e)}
          />
        );
      case "submitNewPassword":
        return (
          <ForgotPasswordSubmit
            submitNewPassword={() => submitNewPassword}
            setFormState={setFormState}
          />
        );

      default:
        return null;
    }
  }
  return <div>{renderForm()}</div>;
};

export default Form;
