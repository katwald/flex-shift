import React from "react";
import { useDispatch } from "react-redux";

import useField from "../hooks/useField";

import Button from "../common/Button";
import Input from "../common/Input";

import "./index.scss";

interface Props {
  setModalVisible: () => void;
  modalVisible: boolean;
}

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();

  const firstName = useField("name");
  const lastName = useField("lastName");
  const contactNumber = useField("contact");
  const role = useField("role");
  const email = useField("email");
  const userName = useField("username");
  const password = useField("password");
  const handleCreateUser = () => {
    // e.preventDefault();
    // const obj = {
    //   firstName: firstName.value,
    //   lastName: lastName.value,
    //   contact: contactNumber.value,
    //   role: role.value,
    //   userName: userName.value,
    //   email: email.value,
    //   password: password.value,
    // };
    // try {
    //   dispatch(signup(obj));
    //   dispatch(setNotification(`${firstName.value} successfully added. `));
    //   dispatch(setNotificationType("success"));
    //   firstName.reset();
    //   lastName.reset();
    //   contactNumber.reset();
    //   role.reset();
    //   email.reset();
    //   password.reset();
    //   setModalVisible(!modalVisible);
    // } catch (error) {
    //   dispatch(setNotification("oops !! some thing wen wrong"));
    // }
  };

  return (
    <form onSubmit={handleCreateUser}>
      <div className="employee-form">
        <div className="employee-form__input">
          <Input
            label="FirstName"
            type="string"
            onChange={() => console.log("firstName")}
          />
        </div>
        <div className="employee-form__input">
          <Input
            label="Last Name"
            type="string"
            onChange={() => console.log("lasttName")}
          />
        </div>
        <div className="employee-form__input">
          <Input
            label="contact"
            type="string"
            onChange={() => console.log("firstName")}
          />
        </div>
        <div className="employee-form__input">
          <Input
            label="Role"
            type="string"
            onChange={() => console.log("role")}
          />
        </div>
        <div className="employee-form__input">
          <Input
            label="email"
            type="email"
            onChange={() => console.log("firstName")}
          />
        </div>
        <div className="employee-form__input">
          <Input
            label="password"
            type="password"
            onChange={() => console.log("firstName")}
          />
        </div>

        <div className="employee-form__button">
          <Button primary>create</Button>
        </div>
      </div>
    </form>
  );
};

export default CreateEmployeeForm;
