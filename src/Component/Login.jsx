import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });


  const changeHandler = (e) =>{
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  }
  
  const submitHandler = (e) =>{
    e.preventDefault();
    const userData = {
      email: data.name,
      password: data.password
    }
    axios.post("https://test.nexisltd.com/users/login", userData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className="login">
      <h1>Log in Form</h1>
      <Form className="form" onSubmit={submitHandler}>
        <input className="inp" type="text" name="email" placeholder="Write Email Address" onChange={changeHandler} />
        <input className="inp" type="password" name="password" placeholder="Write Password" onChange={changeHandler} />

        <Button
          variant="primary"
          type="submit"
        >
          Log In
        </Button>
      </Form>
      <Link to="/signup">
        <p>
          Don’t have an account? <span>SIGNUP HERE!</span>
        </p>
      </Link>
    </div>
  );
};

export default Login;
