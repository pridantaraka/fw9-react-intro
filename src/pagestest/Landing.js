import React from "react";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
  const count = useSelector((state) => state.berhitung.value);
  return (
    <>
      <Helmet>
        <title>Landing</title>
      </Helmet>
      <Container className="d-flex min-vh-100 flex-column justify-content-center align-items-center">
        <Link className="btn btn-primary" to="/home" state={{ id: 7 }}>
          Go to Home
        </Link>
        <h1>{count}</h1>
        <Link className="btn btn-primary" to="/counter">
          Go to Counter
        </Link>
      </Container>
    </>
  );
};

export default Landing;
