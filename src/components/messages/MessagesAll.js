import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMessagesByCurrentUser } from "../managers/MessageManager";
import { getCurrentUser } from "../managers/UserManager";

export const AllMessages = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([{}]);

  const [user, setUser] = useState({});

  useEffect(() => {
    getMessagesByCurrentUser().then(setMessages);
    getCurrentUser().then(setUser);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="ptoListHeader">Messages</Card.Title>
              <p>
                <span className="ptoListName">
                  Hello {user[0]?.user?.first_name}!
                </span>
              </p>
              <p>
                <span className="ptoListInfo">
                  You have the following messages:
                </span>
              </p>
              <Card.Text>
                {messages.map((message) => {
                  return (
                    <Button
                      className="ptoListItem"
                      variant="dark"
                      onClick={() => navigate(`/messages/${message.id}`)}
                    >
                      {message.title}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
            <Button
              className="ptoListItem"
              variant="success"
              onClick={() => navigate(`/messages/create`)}
            >
              Create Message
            </Button>
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
