import React, { useState } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [accessSource, setAccessSource] = useState();
  const [accessDest, setAccessDest] = useState();
  const [transformErr, setTransformErr] = useState();

  const handleClick = e => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://ede8ffe9.ngrok.io/api/v1/transforms/haravan-to-haravan",
      headers: {
        "access-token-hrv-source": accessSource,
        "access-token-hrv-dest": accessDest,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(response => {
      alert("Start transform...")
    }).catch(error => {
      alert("Wrong access token")
    })

  };

  return (
    <Container as={Col} md="5" sm="12">
      <Form className="shadow-lg bg-white rounded p-4 m-4">
        <h3 className="center">TRANSFORM DATA ECONOMIC</h3>

        <Form.Group className="input-field">
          <Form.Label htmlFor="hrv-source">Nhập access token source</Form.Label>
          <Form.Control
            type="text"
            id="hrv-source"
            onChange={e => setAccessSource(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="input-field">
          <Form.Label htmlFor="hrv-dest">
            Nhập access token destination
          </Form.Label>
          <Form.Control
            type="text"
            id="hrv-dest"
            onChange={e => setAccessDest(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleClick}
          >
            TRANSFORM NOW!
          </Button>
          <div>{transformErr ? <div>{transformErr}</div> : null}</div>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default App;
