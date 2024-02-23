import React from "react";
import "./index.scss";

interface Props {
  type: string;
  label: string;
  value: string;
  name: string;
  onChange?: () => void;
  rows: number;
  cols: number;
}

const TextArea: React.FC<Props> = ({ label, rows, cols, ...rest }) => {
  return (
    <div className="text-area">
      <div className="text-area__label">
        <label>{label}</label>
      </div>
      <textarea
        className="text-area__field"
        rows={rows}
        cols={cols}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
