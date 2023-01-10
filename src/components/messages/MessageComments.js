import { useEffect, useState } from "react";
import { getMessageById } from "../managers/MessageManager";
import { getCommentsByMessageId } from "../managers/CommentManager";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MessageComments = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({});
  const [comments, setComments] = useState([]);
  const { messageId } = useParams();

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
          <Card.Title className="ptoListHeader">{message.title}</Card.Title>
          <Card.Text>{message.content}</Card.Text>
          <Card.Text>{message.created_on}</Card.Text>
          <span className="commentFormat">
            {comments.map((comment) => {
              return (
                <>
                  <span className="comment">
                    <Card.Text>{comment.content}</Card.Text>
                    <Card.Text>{comment.created_on}</Card.Text>
                  </span>
                </>
              );
            })}
          </span>
        </Card.Body>
      </Card>
      <Button
        className="ptoListItem"
        variant="success"
        onClick={() => navigate(`/messages/${messageId}/comments/create`)}
      >
        Add Comment
      </Button>
    </>
  );
};
