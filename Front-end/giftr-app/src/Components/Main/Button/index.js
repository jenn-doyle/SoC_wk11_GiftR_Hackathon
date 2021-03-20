import React from "react";
import css from "./button.module.css";

function Button({ text, handleChange, id }) {
  return (
    <button
      className={css.button}
      style={{ color: "rebeccapurple" }}
      onClick={handleChange}
      id={id}
    >
      {text}
    </button>
  );
}

export default Button;
