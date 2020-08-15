import React from "react";
import { button } from "../styles/Styles";

const Button = ({ title, onClick }) => {
  return (
    <button style={button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
