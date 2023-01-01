import React, { useState } from "react";
import { Form } from "react-bootstrap";
import validator from "validator";

function Page3({ formData, setFormData, submitHandler }) {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (value.length < 8) {
      setErrorMessage("Your password must be 8 character");
    } else {
      setErrorMessage("");
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, password: e.target.value });
    validate(e.target.value);
  }
  return (
    <div className="signUp">
      <Form className="form">
        <input
          type="password"
          placeholder="Write Password"
          className="inp page3"
          value={formData.password}
          onChange={handleChange}
        /> <br />
        <span className="error">{errorMessage}</span>
      </Form>
      
    </div>
  );
}

export default Page3;
