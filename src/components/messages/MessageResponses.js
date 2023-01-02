import { useEffect, useState } from "react";
import { getMessageById } from "../managers/MessageManager";
import { getResponsesByMessageId } from "../managers/ResponseManager";
import { getCurrentUser } from "../managers/UserManager";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MessageResponses = () => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState({});
  const [responses, setResponses] = useState([]);
  const { messageId } = useParams();

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  useEffect(() => {
    getMessageById(messageId).then((messageData) => setMessage(messageData));
  }, [messageId]);

  useEffect(() => {
    getResponsesByMessageId(messageId).then((messageResponseData) =>
      setResponses(messageResponseData)
    );
  }, [messageId]);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{message.title}</Card.Title>
          <Card.Text>{message.content}</Card.Text>
          <Card.Text>{message.created_on}</Card.Text>
          <Card.Text>{message.author}</Card.Text>
          {responses.map((response) => {
            return (
              <>
                <Card.Text>{response.content}</Card.Text>
                <Card.Text>{response.author}</Card.Text>
              </>
            );
          })}
        </Card.Body>
      </Card>
      <Button
        onClick={() => navigate(`/messages/${messageId}/responses/create`)}
      >
        Add Response
      </Button>
    </>
  );
};
