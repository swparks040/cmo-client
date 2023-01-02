import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import { getMessageById } from "../managers/MessageManager";
import { addResponse } from "../managers/ResponseManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const ResponseForm = () => {
  const { messageId } = useParams();

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});

  const [message, setMessage] = useState([]);

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const [newResponse, setNewResponse] = useState({
    message: messageId,
    author: currentUser.id,
    content: "",
    created_on: "",
  });

  useEffect(() => {
    getMessageById(messageId).then(setMessage);
  }, [messageId]);

  const changeMessageState = (domEvent) => {
    const copy = { ...message };
    copy[domEvent.target.id] = domEvent.target.value;
    setNewResponse(copy);
  };

  const handleClickSaveResponse = (event) => {
    event.preventDefault();

    const newResponseToAPI = {
      message: messageId,
      author: currentUser.id,
      content: newResponse.content,
      created_on: "",
    };

    addResponse(newResponseToAPI);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label htmlFor="content">Response</Form.Label>
              <Form.Control
                as="textarea"
                id="content"
                required
                autoFocus
                placeholder="Provide a response to the message."
                value={newResponse.content}
                onChange={changeMessageState}
              />
            </Form.Group>
            <Button variant="dark" onClick={handleClickSaveResponse}>
              Save Response
            </Button>
            <Link to={`/messages/${messageId}`}><Button>Return to Message</Button></Link>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};
