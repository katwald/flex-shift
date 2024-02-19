import React, { useEffect, useState } from "react";
import { useActions } from "./hooks/useActions";
import Input from "./components/common/Input";
import Select from "./components/Select";
import SignUpForm from "./components/SignUpForm";

import Button from "./components/common/Button";
import Card from "./components/common/Card";
import Modal from "./components/common/Modal";

import "./App.scss";
function App() {
  const { fetchBookings } = useActions();
  const [showModal, setShowModal] = useState(false);
  console.log("yeee", showModal);
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
        <button onClick={() => setShowModal(true)}>showmodal</button>
        {showModal && (
          <Modal setShowModal={setShowModal}>
            <SignUpForm />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
