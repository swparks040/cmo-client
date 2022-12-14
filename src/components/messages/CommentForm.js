import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import { getMessageById } from "../managers/MessageManager";
import { addComment } from "../managers/CommentManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CommentForm = () => {
  const navigate = useNavigate();
  const { messageId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  const [message, setMessage] = useState([]);

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const [newComment, setNewComment] = useState({
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
    setNewComment(copy);
  };

  const handleClickSaveComment = (event) => {
    event.preventDefault();

    const newCommentToAPI = {
      message: messageId,
      author: currentUser.id,
      content: newComment.content,
      created_on: "",
    };

    addComment(newCommentToAPI).then(() => {
      navigate(`/messages/${messageId}`);
    });
  };

  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">Add Comment</Card.Title>
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              id="content"
              required
              autoFocus
              placeholder="Provide a comment to the message."
              value={newComment.content}
              onChange={changeMessageState}
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={handleClickSaveComment}
        >
          Add Comment
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/messages/${messageId}`)}
        >
          Return to Message
        </Button>
      </Card>
    </>
  );
};
