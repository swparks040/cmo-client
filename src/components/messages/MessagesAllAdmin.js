import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllMessages } from "../managers/MessageManager";
import { getCurrentUser } from "../managers/UserManager";

export const AllMessagesAdmin = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([{}]);

  const [user, setUser] = useState({});

  useEffect(() => {
    getAllMessages().then(setMessages);
    getCurrentUser().then(setUser);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Messages</Card.Title>
              <p>Hello {user[0]?.user?.first_name}!</p>
              <p>You have the following messages:</p>
              <Card.Text>
                {messages.map((message) => {
                  return (
                    <Button variant="dark" onClick={() => navigate(`/messages/${message.id}`)}>
                      {message.title}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="dark" onClick={() => navigate(`/messages/create`)}>
        Create Message
      </Button>
      <Button variant="dark" onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};
