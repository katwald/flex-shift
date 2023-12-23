import React from 'react';
import classNames from "classnames";

interface InputProps{
  id?: string;
  type: string;
  inputName?: string;
  onChange:()=> React.ChangeEventHandler<HTMLInputElement>;
  label?: String;
  value: string | number;
  placeholder?:string;
 disabled?:boolean;
 error?: boolean;
 message?: string;


}

const Input:React.FC<InputProps> = ({type, onChange, inputName, label, value, error, disabled,message, ...rest}) => {
  const classes = classNames( {
    disabled: disabled,
    error:error,


  });
  return (
    <div className ="input">
        <label className={label ?`input__label__${classes}`: ''} >
            {label}
        </label>
        <input className={`input__field__${classes}`}type = {type}  name={inputName || ''} onChange = {onChange} value ={value} {...rest}/>
        <span className={`input__message__${classes}`}>{error && message}</span>
    </div>
  )
}

export default Input