import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getAllMessages } from "../managers/MessageManager";
import { getAllUsers, getCurrentUser } from "../managers/UserManager";
import { getAllPTORequests } from "../managers/PTOManager";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [PTORequest, setPTORequest] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    getCurrentUser().then(setUser);
    getAllUsers().then(setUsers);
    getAllMessages().then(setMessages);
    getAllPTORequests().then(setPTORequest);
  }, []);

  return (
    <>
      <Card className="text-center">
        <Card.Header as="h3">Employee Portal</Card.Header>
        <Card.Body>
          <Card.Title>Welcome, {user[0]?.user?.first_name}!</Card.Title>
          <Card.Text>
            You have <span className="ptoDaysRemaining">{users.length}</span>{" "}
            employees registered in the system.
          </Card.Text>
          <Button variant="dark" onClick={() => navigate(`/cmousers`)}>
            View Employees
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header as="h3">PTO Portal</Card.Header>
        <Card.Body>
          <Card.Title>PTO</Card.Title>
          <Card.Text>
            You have <span className="ptoDaysUsed">{PTORequest.length}</span>{" "}
            PTO requests pending.
          </Card.Text>
          <Button variant="dark" onClick={() => navigate(`/pto`)}>
            Manage PTO
          </Button>
          <Button variant="danger" onClick={() => navigate(`/pto/create`)}>
            Seed PTO
          </Button>
          <Button
            variant="dark"
            onClick={() => navigate(`/ptorequests/pending`)}
          >
            Manage PTO Requests
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Header as="h3">Messages Portal</Card.Header>
        <Card.Body>
          <Card.Title>Messages</Card.Title>
          <Card.Text>
            You have <span className="ptoDaysUsed">{messages.length}</span>{" "}
            messages in the system.
          </Card.Text>
          <Button variant="dark" onClick={() => navigate(`/messages`)}>
            View Messages
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
