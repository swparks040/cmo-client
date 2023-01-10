import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../managers/CategoryManager";
import {
  deleteMessage,
  getMessagesByCurrentUser,
} from "../managers/MessageManager";
import { getCurrentUser } from "../managers/UserManager";
import Button from "react-bootstrap/Button";
import { MessageComments } from "./MessageComments";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const MessageSingle = () => {
  const navigate = useNavigate();

  const { messageId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  const [category, setCategory] = useState({
    id: 0,
    label: "",
  });

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const [message, setMessage] = useState({
    cmouser: 0,
    category: 0,
    publication_date: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    getMessagesByCurrentUser(currentUser.id).then((data) => {
      const message = data.find((m) => m.id === parseInt(messageId));
      if (message) {
        setMessage(message);
      }
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((data) => setCategory(data));
  }, []);

  const handleClickDeleteMessage = (event) => {
    event.preventDefault();
    deleteMessage(message.id).then(() => navigate("/messages"));
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="ptoListHeader">Message Details</Card.Title>
              <Card.Text>
                <Card.Text>
                  <span className="ptoListInfo">Title: {message.title}</span>
                </Card.Text>
                <Card.Text>
                  <span className="ptoListInfo">
                    Publication Date: {message.publication_date}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span className="ptoListInfo">
                    Category: {message.category.label}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span className="ptoListInfo">
                    Content: {message.content}
                  </span>
                </Card.Text>
              </Card.Text>
            </Card.Body>
            <Button
              className="ptoListItem"
              variant="success"
              onClick={() => navigate(`/messages/update/${message.id}`)}
            >
              Update Message
            </Button>
            <Button
              className="ptoListItem"
              variant="danger"
              onClick={handleClickDeleteMessage}
            >
              Delete Message
            </Button>
            <Button variant="secondary" onClick={() => navigate(`/messages`)}>
              Back
            </Button>
            <MessageComments />
          </Card>
        </Col>
      </Row>
    </>
  );
};
