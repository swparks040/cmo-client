import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { getPTObyUserId } from "../managers/PTOManager";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  
  useEffect(() => {
    getPTObyUserId().then(setUser);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>PTO Balance</Card.Title>
              <Card.Text>
                You have {user[0]?.days_remaining} days of {user[0]?.total_days} days of PTO
                remaining. You have used {user[0]?.days_used} days.
              </Card.Text>
              <Button onClick={() => navigate(`/pto/create`)}>
                Request PTO
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Family Portal</Card.Title>
              <Card.Text>
                Text for "You have familyMembers family members declared on your
                account."
              </Card.Text>
              <Button onClick={() => navigate(`/family`)}>Update Family</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Promotions Portal</Card.Title>
              <Card.Text>
                Your last Promotion discussion was on 1/1/2021. You are eligible
                for promotion on 1/1/2022.
              </Card.Text>
              <Button onClick={() => navigate(`/promos`)}>
                Discuss Promotion
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Evaluations Portal</Card.Title>
              <Card.Text>
                Your last feedback session was on 1/1/2021. You are eligible for
                feedback on 6/1/2022.
              </Card.Text>
              <Button onClick={() => navigate(`/evals`)}>
                Discuss Evaluation
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Messages Portal</Card.Title>
              <Card.Text>View your messages.</Card.Text>
              <Button onClick={() => navigate(`/messages`)}>
                View Messages
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
