import { SetStateAction, useState } from "react";

const useField = (type: string) => {
  const [value, setValue] = useState("");
  const onChange = (e: { target: { value: SetStateAction<string> } }) =>
    setValue(e.target.value);
  const reset = () => {
    setValue("");
  };
  return {
    type,
    value,
    onChange,
    reset,
  };
};

export default useField;
