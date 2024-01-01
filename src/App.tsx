import React from "react";
import { useActions } from "./hooks/useActions";
import Input from "./components/Input";
import Select from "./components/Select";

import Button from "./components/Button";
import "./App.scss";
function App() {
  const { fetchBookings } = useActions();

  console.log("yeee", fetchBookings());
  return (
    <div className="App">
      <Button primary>button</Button>
      <div>
        <Input
          disabled
          type="text"
          onChange={() => console.log("onchange")}
          placeholder="First Name"
          label="label"
        />
        <Input
          type="text"
          onChange={() => console.log("onchange")}
          placeholder="firstName@abc.com"
          label="label"
          message="this is error message"
        />
        <Select
          onChange={() => console.log("first")}
          options={["Venue1", "Venue2", "venue3"]}
        />
      </div>
    </div>
  );
}

export default App;
