import { useEffect, useState } from "react";
import { getMessageById } from "../managers/MessageManager";
import { getCommentsByMessageId } from "../managers/CommentManager";
import { getCurrentUser } from "../managers/UserManager";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MessageComments = () => {
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();
  const [message, setMessage] = useState({});
  const [comments, setComments] = useState([]);
  const { messageId } = useParams();

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  useEffect(() => {
    getMessageById(messageId).then((messageData) => setMessage(messageData));
  }, [messageId]);

  useEffect(() => {
    getCommentsByMessageId(messageId).then((messageCommentData) =>
      setComments(messageCommentData)
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
          {comments.map((comment) => {
            return (
              <>
                <Card.Text>{comment.content}</Card.Text>
                <Card.Text>{comment.author}</Card.Text>
              </>
            );
          })}
        </Card.Body>
      </Card>
      <Button
        variant="dark" onClick={() => navigate(`/messages/${messageId}/comments/create`)}
      >
        Add Comment
      </Button>
    </>
  );
};
