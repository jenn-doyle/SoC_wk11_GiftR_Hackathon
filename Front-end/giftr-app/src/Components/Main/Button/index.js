import React from "react";
import css from "./button.module.css";


function Button({text}){
return(    
<button className={css.button}>{text}</button>
)}


export default Button ;