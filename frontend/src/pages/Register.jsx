import React, { useContext } from "react";
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

function Register() {
    const {user} = useContext(AuthContext)
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
              <h2>Register</h2>
              <h2>{user?.name}</h2>
              <Form.Control type="text" placeholder="Name" />
              <Form.Control type="email" placeholder="Email" />
              <Form.Control type="password" placeholder="Password" />
              <button type="submit" className="py-2 text-white bg-green-400">Register</button>

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

export default Register;
