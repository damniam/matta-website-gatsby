import React from "react";
import "../Button/mystyles.scss";

const Button = ({ children }) => (
  <button class="button is-black">{children}</button>
);

export default Button;
