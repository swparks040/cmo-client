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
              <Card.Title className="ptoListHeader">PTO Requests</Card.Title>
              <p><span className="ptoListName">Hello {user[0]?.user?.first_name}!</span></p>
              <p><span className="ptoListInfo">You have {PTORequests.length} pending PTO Requests:</span></p>
              <Card.Text>
                {PTORequests.map((PTORequest) => {
                  return (
                    <Button className="ptoListItem"
                      variant="dark"
                      onClick={() => navigate(`/ptorequests/${PTORequest.id}`)}
                    >
                      <span className="ptoListDates">From: {PTORequest.start_date} To: {PTORequest.end_date}</span>
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button className="ptoListItem" variant="dark" onClick={() => navigate(`/pto/create`)}>
        Create PTO Request
      </Button>
      <Button className="ptoListItem" variant="dark" onClick={() => navigate(`/`)}>
        Back
      </Button>
    </>
  );
};
