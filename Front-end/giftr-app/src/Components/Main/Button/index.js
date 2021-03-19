import React from "react";
import css from "./button.module.css";


function Button({text, handleChange, id}){
return(    
<button className={css.button} onClick={handleChange} id={id}>{text}</button>
)}


export default Button ;