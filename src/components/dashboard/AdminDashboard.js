import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllFamilyMembers } from "../managers/FamilyManager";
import { getAllMessages } from "../managers/MessageManager";
import { getAllUsers, getCurrentUser } from "../managers/UserManager";
import { getAllPTO } from "../managers/PTOManager";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [PTO, setPTO] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser().then(setUser);
    getAllUsers().then(setUsers);
    getAllFamilyMembers().then(setFamilyMembers);
    getAllMessages().then(setMessages);
    getAllPTO().then(setPTO);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header as="h3">Employee Portal</Card.Header>
            <Card.Body>
              <Card.Title>Welcome, {user[0]?.user?.first_name}!</Card.Title>
              <Card.Text>
                You have {users.length} employees registered in the system.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate(`/cmousers`)}>
                View Employees
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Header as="h3">Messages Portal</Card.Header>
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <Card.Text>
                You have {messages.length} messages in the system.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate(`/messages`)}>
                View Messages
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Header as="h3">PTO Portal</Card.Header>
            <Card.Body>
              <Card.Title>PTO</Card.Title>
              <Card.Text>
                You have {PTO.length} PTO requests in the system.
              </Card.Text>
              <Button variant="dark" onClick={() => navigate(`/pto`)}>View PTO</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
