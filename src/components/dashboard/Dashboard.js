import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { getPTObyCurrentUser, getPTORequestbyCurrentUser } from "../managers/PTOManager";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getCurrentUser } from "../managers/UserManager";
import { getMessagesByCurrentUser } from "../managers/MessageManager";
import PTOChart from "./DoughnutChart";


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
  const [PTORequest, setPTORequest] = useState({
    pto: 0,
    cmouser: 0,
    start_date: "",
    end_date: "",
    days_requested: 0,
    justification: "",
    is_approved: false,
  });


  useEffect(() => {
    getFamilyMembersByCurrentUser().then(setFamilyMembers);
    getCurrentUser().then(setUser);
    getPTObyCurrentUser().then(setPTO);
    getPTORequestbyCurrentUser().then(setPTORequest);
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
  
  const PTORequestPluralization = () => {
    if (PTORequest.length === 1) {
      return (
        <Card.Text>
          You have {PTORequest.length} PTO Request pending.
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          You have {PTORequest.length} PTO Requests pending.
        </Card.Text>
      );
    }
  };


  return (
    <>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header as="h3">PTO Portal</Card.Header>
            <Card.Body>
              <Card.Title>PTO Balance</Card.Title>
              <Card.Text>
                You have {PTO[0].days_remaining} days of {PTO[0]?.total_days}{" "}
                days of PTO remaining. You have used {PTO[0]?.days_used} days.
              </Card.Text>
              <Card.Text>{PTOChart()}</Card.Text>
              {PTORequestPluralization()}
              <Button variant="dark" onClick={() => navigate(`/pto/create`)}>
                Request PTO
              </Button>
              <Button variant="dark" onClick={() => navigate(`/ptorequests`)} >PTO Requests</Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
          <Card.Header as="h3">Family Portal</Card.Header>
            <Card.Body>
              <Card.Title>Family Members</Card.Title>
              {familyMemberPluralization()}
              <Button variant="dark" onClick={() => navigate(`/familymembers`)}>
                Manage Family
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="text-center">
          <Card.Header as="h3">Conversations Portal</Card.Header>
            <Card.Body>
              <Card.Title>Conversations</Card.Title>
              {conversationPluralization()}
              <Button variant="dark" onClick={() => navigate(`/messages`)}>
                View Conversations
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};