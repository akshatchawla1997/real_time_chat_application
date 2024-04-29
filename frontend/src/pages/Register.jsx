import React, { useContext } from "react";
import { Alert, Form, Row, Col, Stack } from "react-bootstrap";
import { AuthContext } from "../AuthContext";

function Register() {
  const { user, registerInfo, updateRegisterInfo } = useContext(AuthContext);
  
  return (
    <>
      <Form>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "20%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2>Register</h2>
              <h2>{user?.name}</h2>
              <Form.Control
                type="text"
                placeholder="Name"
                value={registerInfo.name}
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Email"
                value={registerInfo.email}
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Password"
                value={registerInfo.password}
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, password: e.target.value })
                }
              />
              <button type="submit" className="py-2 text-white bg-green-400">
                Register
              </button>

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
