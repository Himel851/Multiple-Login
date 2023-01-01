import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Page.scss";

function Page1({ formData, setFormData }) {
  return (
    <div className="signUp">
      <Form className="form">
        <input
          type="text"
          placeholder="Write First Name"
          className="inp"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <input
          type="text"
          placeholder="Write Last Name"
          className="inp"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
      </Form>
      <div className="already">
        <Link to="/">
          <p>
            Already have an account? <span>LOGIN HERE</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Page1;
