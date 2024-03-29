import * as React from "react";
import classNames from "classnames";

import "./index.scss";

interface Props{
    primary?: boolean;
    secondary?: boolean;
    warning?:boolean;
    outline?: boolean;
    danger?: boolean;
    disabled?: boolean;
    rounded?:boolean;
    small?:boolean;
    medium?:boolean;
    large?:boolean;
    icon?:boolean;
    children?: React.ReactNode|string;
    rest?:string;
}

const Button: React.FC<Props> = ({
  primary,
  secondary,
  warning,
  outline,
  danger,
  disabled,
  rounded,
  small,
  medium,
  large,
  icon,
  children,
  ...rest
}) => {
  const classes = classNames( {
    primary: primary,
    secondary: secondary,
    warning: warning,
    danger: danger,
    disable: disabled,
    rounded: rounded,
    outline: outline,
    "btn--small": small,
    "btn--medium": medium,
    "btn--large": large,
    "btn__outline--primary": primary && outline,
    "btn__outline--warning": warning && outline,
    "btn__outline--danger": outline && danger,
    children
  });
  return (
    <button {...rest} className={`btn btn__${classes}`}>
      <span className={`btn__${icon}`}>{icon}</span>
      {children}
    </button>
  );
};

export default Button;
