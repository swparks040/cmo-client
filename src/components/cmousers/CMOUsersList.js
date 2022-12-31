import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import {
  getAllAdminUsers,
  getAllSubordinateUsers,
} from "../managers/UserManager";

export const CMOUsersList = () => {
  const navigate = useNavigate();

  const [subordinateUsers, setSubordinateUsers] = useState([{}]);

  const [adminUsers, setAdminUsers] = useState([{}]);

  useEffect(() => {
    getAllSubordinateUsers().then(setSubordinateUsers);
  }, []);

  useEffect(() => {
    getAllAdminUsers().then(setAdminUsers);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Staff</Card.Title>
              <Card.Text>
                {adminUsers.map((adminUser) => {
                  return (
                    <Button onClick={() => navigate(`/users/${adminUser.id}`)}>
                      {adminUser.full_name}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Employees</Card.Title>
              <Card.Text>
                {subordinateUsers.map((subordinateUser) => {
                  return (
                    <Button
                      onClick={() => navigate(`/users/${subordinateUser.id}`)}
                    >
                      {subordinateUser.full_name}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button onClick={() => navigate(`/users/create`)}>Create User</Button>
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};
