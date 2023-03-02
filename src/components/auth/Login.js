import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../managers/AuthManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const Login = ({ setToken }) => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isUnsuccessful, setisUnsuccessful] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
      username: username.current.value,
      password: password.current.value,
    };

    loginUser(user).then((res) => {
      if ("valid" in res && res.valid) {
        localStorage.setItem("auth_token", JSON.stringify(res));
        localStorage.setItem("is_staff", res.is_staff);
        navigate("/");
      } else {
        setisUnsuccessful(true);
      }
    });
  };

  return (
    <Card>
      <Card.Title className="ptoListHeader">Please Log In</Card.Title>
    <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="Enter username"
          ref={username}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
        <Form.Text className="text-muted">
          Passwords are case-sensitive.
        </Form.Text>
      </Form.Group>
      <Button className="ptoListItem"
              variant="dark" type="submit">
        Log In
      </Button>
      <Button className="ptoListItem"
              variant="dark" to="/register">
        Cancel
      </Button>
      {isUnsuccessful ? (
        <p className="help is-danger">Username or password not valid</p>
      ) : (
        ""
      )}
    </Form>
    </Card>
  );
};

export default Login;
