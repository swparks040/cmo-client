import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
              <Card.Title className="ptoListHeader">Admin</Card.Title>
              <Card.Text>
                {adminUsers.map((adminUser) => {
                  return (
                    <Button
                      className="ptoListItem"
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
              <Card.Title className="ptoListHeader">Employees</Card.Title>
              <Card.Text>
                {subordinateUsers.map((subordinateUser) => {
                  return (
                    <Button
                      className="ptoListItem"
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
          <Card>
            <Button
              className="ptoListItem"
              variant="secondary"
              onClick={() => navigate(`/`)}
            >
              Back
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
