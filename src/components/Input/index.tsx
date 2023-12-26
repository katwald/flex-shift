import React from "react";
import classNames from "classnames";

import "./styles.scss";

interface InputProps{
  id?: string;
  type: string;
  inputName?: string;
  onChange:()=> void;
  label?: string;
  value?: string | number;
  placeholder?:string;
 disabled?:boolean;
 error?: boolean;
 success?:boolean;
 message?: string;
}

const Input:React.FC<InputProps> = ({type, onChange, inputName, label, value, error,  success,disabled,message, ...rest}) => {
  const classes = classNames( {
    disabled: disabled,
    error:error,
    success: success,
  });
  return (
    <div className ="input ">
      <label className={label ?`input__label input__label__${classes}`: ""} >
        {label}
      </label>
      <input className={`input__field input__field__${classes}`}type = {type}  name={inputName || ""} disabled ={disabled} onChange = {onChange} value ={value} {...rest}/>
      <span className={`input__message input__message__${classes}`}>{(error||success) && message}</span>
    </div>
  );
};

export default Input;