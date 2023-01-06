import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPTORequestByCurrentUser } from "../managers/PTOManager";
import { getCurrentUser } from "../managers/UserManager";

export const AllPTORequests = () => {
  const navigate = useNavigate();

  const [PTORequests, setPTORequests] = useState([{}]);

  const [user, setUser] = useState({});

  useEffect(() => {
    getPTORequestByCurrentUser().then(setPTORequests);
    getCurrentUser().then(setUser);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>PTO Requests</Card.Title>
              <p>Hello {user[0]?.user?.first_name}!</p>
              <p>You have the following pending PTO Requests:</p>
              <Card.Text>
                {PTORequests.map((PTORequest) => {
                  return (
                    <Button
                      variant="dark"
                      onClick={() => navigate(`/ptorequests`)}
                    >
                      {PTORequest.start_date} - {PTORequest.end_date}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="dark" onClick={() => navigate(`/pto/create`)}>
        Create PTO Request
      </Button>
      <Button variant="dark" onClick={() => navigate(`/`)}>
        Back
      </Button>
    </>
  );
};
