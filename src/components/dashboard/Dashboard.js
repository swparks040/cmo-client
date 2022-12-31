import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { getPTObyCurrentUser } from "../managers/PTOManager";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getCurrentUser } from "../managers/UserManager";
import { getMessagesByCurrentUser } from "../managers/MessageManager";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [familyMembers, setFamilyMembers] = useState([]);
  const [PTO, setPTO] = useState([
    {
      id: 0,
      days_remaining: 0,
      total_days: 0,
      days_used: 0,
    },
  ]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getFamilyMembersByCurrentUser().then(setFamilyMembers);
    getCurrentUser().then(setUser);
    getPTObyCurrentUser().then(setPTO);
    getMessagesByCurrentUser().then(setMessages);
  }, []);

  const conversationPluralization = () => {
    if (messages.length === 1) {
      return (
        <Card.Text>
          You have {messages.length} conversation. View your messages.
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          You have {messages.length} conversations. View your messages.
        </Card.Text>
      );
    }
  };

  const familyMemberPluralization = () => {
    if (familyMembers.length === 1) {
      return (
        <Card.Text>
          You have {familyMembers.length} family member declared on your
          account.
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          You have {familyMembers.length} family members declared on your
          account.
        </Card.Text>
      );
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>PTO Balance</Card.Title>
              <Card.Text>
                You have {PTO[0].days_remaining} days of {PTO[0]?.total_days}{" "}
                days of PTO remaining. You have used {PTO[0]?.days_used} days.
              </Card.Text>
              <Button onClick={() => navigate(`/pto/create`)}>
                Request PTO
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Family Portal</Card.Title>
              {familyMemberPluralization()}
              <Button onClick={() => navigate(`/familymembers`)}>Manage Family</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Promotions and Evaluations Portal</Card.Title>
              <Card.Text>
                Your last Promotion was on {user[0]?.date_promoted}. Your last
                Evaluation was on {user[0]?.date_evaluated}
              </Card.Text>
              <Button onClick={() => navigate(`/promos`)}>
                Discuss Promotion
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Conversations Portal</Card.Title>
              {conversationPluralization()}
              <Button onClick={() => navigate(`/messages`)}>
                View Conversations
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
