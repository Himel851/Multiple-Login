import React, { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import "./Form.scss";
import axios from "axios";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const changeHandler = (e) =>{
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    const userData = {
      email: formData.name,
      password: formData.password,
      firstName: formData.firstName,
      lastName:formData.lastName,
      phone: formData.phone,

    }
    axios.post("https://test.nexisltd.com/users/login", userData)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
  }


  const PageDisplay = () => {
    if (page === 0) {
      return <Page1 formData={formData} setFormData={setFormData} changeHandler={changeHandler} submitHandler={submitHandler} />;
    } else if (page === 1) {
      return <Page2 formData={formData} setFormData={setFormData} changeHandler={changeHandler} submitHandler={submitHandler}/>;
    } else {
      return <Page3 formData={formData} setFormData={setFormData} changeHandler={changeHandler} submitHandler={submitHandler}/>;
    }
  };

  return (
    <div className="FormAll">
      <div className="form-container">
        <div className="header">
          <h1>SignUp Form</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <div>
            {page > 0 && (
              <button
                className="backBtn"
                type="button"
                onClick={() => {
                  let pg = page;
                  setPage(pg - 1);
                }}
              >
                Back
              </button>
            )}
          </div>
          <div>
            {page < 3 && (
              <button
                className="btn btn-primary nextBtn"
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  let pg = page;
                  setPage(pg + 1);
                }}
              >
                {page === 2 ? (
                  "Submit "
                ) : (
                  <>
                    Next Step<i class="fa fa-long-arrow-right"></i>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
