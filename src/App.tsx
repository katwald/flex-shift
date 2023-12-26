import React from "react";
import { useActions } from "./hooks/useActions";
import Input from "./components/Input";


import Button from "./components/Button";
import  "./App.scss";
function App(){
  const {fetchBookings} = useActions();

  console.log("yeee",fetchBookings());
  return (
    <div className="App">
      < Button primary>
      button
      </Button>
      <div>
        <Input disabled type = "text" onChange={ ()=>console.log("onchange") } placeholder = "First Name" label = "label"/>
        <Input success  type = "text" onChange={ ()=>console.log("onchange") } placeholder = "firstName@abc.com" label = "label" message = "this is error message"/>

      </div>
    </div>
  );
}

export default App;
