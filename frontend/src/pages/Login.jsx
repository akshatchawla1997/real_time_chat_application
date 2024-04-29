import React from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";

function Login() {
  return (
    <>
      <Form>
        <Row  style={{
            height:"100vh",
            justifyContent:"center",
            paddingTop:"20%"
        }}>
        <Col xs={6}>
            <Stack gap={3}>
              <h2>Login</h2>
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              <button type="submit" className="py-2 text-white bg-green-400">Login</button>

              <Alert variant="danger">
                <p>An Error Occured</p>
              </Alert>
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Login;
