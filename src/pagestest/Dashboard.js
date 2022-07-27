import React from "react";
import { Button, Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container className="d-flex min-vh-100 flex-column justify-content-center align-items-center">
        <h1>Welcome Home</h1>
        {location.state?.id && <h4>{location.state.id}</h4>}
        <Button variant="warning" onClick={onLogout}>
          Logout
        </Button>
      </Container>
    </>
  );
};

export default Dashboard;
