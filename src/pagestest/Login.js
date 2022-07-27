import React from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const addUser =() => {
    localStorage.setItem("name","budi")
  }
  const onLogin = () => {
    localStorage.setItem("auth", "randomToken");
    navigate("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container className="d-flex min-vh-100 flex-column justify-content-center align-items-center">
        <input type="text" name={addUser}></input>
        {location.state?.errorMsg && (
          <Alert variant="danger">{location.state.errorMsg}</Alert>
        )}
        <Button onClick={onLogin}>Login</Button>
      </Container>
    </>
  );
};

export default Login;