import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllUsers,
  getAllSubordinateUsers,
  getAllAdminUsers,
} from "../managers/UserManager";

export const PTOList = () => {
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
              <Card.Title>Admin</Card.Title>
              <Card.Text>
                {adminUsers.map((adminUser) => {
                  return (
                    <Button
                      variant="dark"
                      onClick={() => navigate(`/pto/${adminUser.id}`)}
                    >
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
                      variant="dark"
                      onClick={() => navigate(`/pto/${subordinateUser.id}`)}
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
      <Button variant="dark" onClick={() => navigate(`/`)}>
        Back
      </Button>
    </>
  );
};
