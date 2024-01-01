import React from "react";
import "./style.scss";

type Props = {
  selectName?: string;
  label?:string;
  options: string[];
  onChange: ()=>void;
}

const Select:React.FC<Props> =({selectName, options, onChange})=> {
  return (
    <div className ="select-wrapper">
      <select className ="select " name ={selectName}>
        {options.map(option=><option  className ="select_option" key ={option} value={option} onChange={onChange}>{option}</option>)
        }
      </select>
    </div>
  );
};

export default Select;