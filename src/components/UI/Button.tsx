import React, { ReactElement } from 'react';
import classes from "./Button.module.css";

interface ButtonProps{
    type?:'submit'|'reset'|'button';
    className?:string;
    onClick?:()=>void;
    disabled?:boolean;
    children:ReactElement;
    bgColor?:string;
}

const Button = (props:ButtonProps) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{backgroundColor:props.bgColor}}
    >
      {props.children}
    </button>
  );
};

export default Button;