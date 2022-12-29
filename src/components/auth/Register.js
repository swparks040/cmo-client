import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
//import { Link } from "react-router-dom"
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../managers/AuthManager";

export const Register = ({ setToken }) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const isStaff = useRef();
  const password = useRef();
  const jobPosition = useRef();
  const salary = useRef();
  const birthday = useRef();
  const dateHired = useRef();
  const dateEvaluated = useRef();
  const datePromoted = useRef();
  const imageUrl = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        verify_password: verifyPassword.current.value,
        is_staff: isStaff.current.value,
        job_position: jobPosition.current.value,
        salary: salary.current.value,
        birthday: birthday.current.value,
        date_hired: dateHired.current.value,
        date_evaluated: dateEvaluated.current.value,
        date_promoted: datePromoted.current.value,
        profile_image_url: imageUrl.current.value,
      };

      registerUser(newUser).then((res) => {
        if ("valid" in res && res.valid) {
          setToken(res.token);
          navigate("/");
        }
      });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Welocme to the Nailed IT family!
                  </h2>
                  <h4 className="fw-bold mb-2 text-center text-uppercase ">
                    New Employee Account
                  </h4>
                  <div className="mb-3">
                    <Form onSubmit={handleRegister}>
                      <Form.Group className="mb-3" controlId="username">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          ref={username}
                          type="text"
                          placeholder="Enter Username" 
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label className="text-center">
                          First Name
                        </Form.Label>
                        <Form.Control
                          ref={firstName}
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label className="text-center">
                          Last Name
                        </Form.Label>
                        <Form.Control
                        ref={lastName}
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control ref={email} type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          ref={password}
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="verifyPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          ref={verifyPassword}
                          type="password"
                          placeholder="Re-Enter Password"
                        />
                      </Form.Group>
                      <h4 className="fw-bold mb-2 text-center text-uppercase ">
                        Employee Information
                      </h4>
                      <Form.Group className="mb-3" controlId="jobPosition">
                        <Form.Label className="text-center">
                          Job Position
                        </Form.Label>
                        <Form.Control
                          ref={jobPosition}
                          type="text"
                          placeholder="Enter Job Position"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="salary">
                        <Form.Label className="text-center">Salary</Form.Label>
                        <Form.Control ref={salary} type="text" placeholder="Enter Salary" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="birthday">
                        <Form.Label className="text-center">
                          Birthday
                        </Form.Label>
                        <Form.Control type="date" ref={birthday} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="dateHired">
                        <Form.Label className="text-center">
                          Date Hired
                        </Form.Label>
                        <Form.Control type="date" ref={dateHired}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="dateEvaluated">
                        <Form.Label className="text-center">
                          Date Evaluated
                        </Form.Label>
                        <Form.Control type="date" ref={dateEvaluated}/>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="datePromoted">
                        <Form.Label className="text-center">
                          Date Promoted
                        </Form.Label>
                        <Form.Control type="date" ref={datePromoted} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="imageUrl">
                        <Form.Label className="text-center">Image</Form.Label>
                        <Form.Control
                          ref={imageUrl}
                          type="text"
                          placeholder="Enter Staff Image"
                        />
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already Registered?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
