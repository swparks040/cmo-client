import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
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
              <Card.Title className="ptoListHeader">Admin</Card.Title>
              <Card.Text>
                {adminUsers.map((adminUser) => {
                  return (
                    <Link to={`/cmousers/${adminUser.id}`}>
                      <Button className="ptoListItem" variant="dark">
                        {adminUser.full_name}
                      </Button>
                    </Link>
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
                    <Link to={`/cmousers/${subordinateUser.id}`}>
                      <Button className="ptoListItem" variant="dark">
                        {subordinateUser.full_name}
                      </Button>
                    </Link>
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
