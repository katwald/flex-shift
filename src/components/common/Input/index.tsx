import React, { useState } from "react";
import classNames from "classnames";

import "./style.scss";

interface InputProps {
  id?: string;
  type?: string;
  inputName?: string;
  onChange?: () => void;
  label?: string;
  name?: string;
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  message?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  onChange,
  inputName,
  label,
  value,
  error,
  success,
  disabled = false,
  message,
  ...rest
}) => {
  const classes = classNames({
    disabled: disabled,
    error: error,
    success: success,
  });
  return (
    <div className="input ">
      <label className={label ? `input__label input__label__${classes}` : ""}>
        {label}
      </label>
      <input
        className={`input__field input__field__${classes}`}
        type={type}
        name={inputName || ""}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...rest}
      />
      <span className={`input__message input__message__${classes}`}>
        {(error || success) && message}
      </span>
    </div>
  );
};

export default Input;
