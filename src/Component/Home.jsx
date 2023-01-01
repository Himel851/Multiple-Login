import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./Images/logo.png";
import background from "./Images/background.png";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={9} xs={6}>
            <div className="left">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="background">
                <img src={background} alt="" />
              </div>
            </div>
          </Col>
          <Col sm={3} xs={12}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
