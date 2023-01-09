// create a new component called AdminPTORequestList.js. This component will be responsible for displaying all of the PTO requests in the database where the is_approved = false. Once the PTO Request is updated with is_approved=true, it will no longer render in this component.

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPendingPTORequests } from "../managers/PTOManager";


export const AdminPTORequestList = () => {
  const navigate = useNavigate();



  const [PTORequests, setPTORequests] = useState([{}]);


  useEffect(() => {
    getPendingPTORequests().then(setPTORequests);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>PTO Requests</Card.Title>
              <p>You have {PTORequests.length} pending PTO Requests:</p>
              <Card.Text>
                {PTORequests.map((PTORequest) => {
                  return (
                    <Button
                      variant="dark"
                      onClick={() => navigate(`/ptorequests/pending/${PTORequest.id}`)}
                    >
                      {PTORequest?.cmouser?.user?.first_name} {PTORequest?.cmouser?.user?.last_name} begins {PTORequest.start_date}
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
