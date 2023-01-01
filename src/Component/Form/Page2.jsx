import React from "react";
import { Form } from "react-bootstrap";

function Page2({ formData, setFormData, changeHandler, submitHandler }) {
  return (
    <div className="signUp">
      <Form className="form">
      <input
          type="text"
          placeholder="+880"
          disabled
          className="disable"
        />
        <input
          type="text"
          placeholder="1xxxxxxxx"
          className="inp page2"
          value={formData.phone}
          
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        <input
          type="email"
          placeholder="Write Email Address"
          className="inp"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </Form>
    </div>
  );
}

export default Page2;
