import React from "react";

import Button from "../../common/Button";
import Input from "../../common/Input";

import "./index.scss";

const singInForm = () => {
  return (
    <div className="login-form">
      <h1 className="login-form__header">Sign In</h1>
      <form onSubmit={() => console.log("onsumbit")}>
        <Input
          type="email"
          label="Email"
          onChange={() => console.log("onchange")}
        />
        <Input
          type="password"
          label="Password"
          onChange={() => console.log("onchange")}
        />

        <Button primary>Sign In</Button>
      </form>
    </div>
  );
};

export default singInForm;
