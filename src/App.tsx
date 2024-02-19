import React from "react";
import { useActions } from "./hooks/useActions";
import Input from "./components/Input";
import Select from "./components/Select";

import Button from "./components/Button";
import Card from "./components/Card";
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
        <Card
          title="Venue 1"
          tag={"Warning"}
          onClick={() => console.log("clicked")}
          bookingStart={new Date()}
          bookingEnd={new Date()}
          bookingDescription="This is bla bla description kdsajfkldasfj aksldjfkdasjf alksdjfsadkfj alksjdfdsajf dfsadaf asdfasf asfdsadfdsa dsafdsaf asdfdsaf "
          assignedEmployee={"devendra"}
        />
      </div>
    </div>
  );
}

export default App;
