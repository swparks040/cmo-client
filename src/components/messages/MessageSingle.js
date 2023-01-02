import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCategories } from "../managers/CategoryManager";
import {
  deleteMessage,
  getMessagesByCurrentUser,
} from "../managers/MessageManager";
import { getCurrentUser } from "../managers/UserManager";
import Button from "react-bootstrap/Button";
import { MessageResponses } from "./MessageResponses";

export const MessageSingle = () => {
  const navigate = useNavigate();

  const { messageId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  const [categories, setCategories] = useState({
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
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const handleClickDeleteMessage = (event) => {
    event.preventDefault();
    deleteMessage(message.id).then(() => navigate("/messages"));
  };

  return (
    <>
      <h2>Message Details</h2>
      <p>Title: {message.title}</p>
      <p>Category: {message.category.label}</p>
      <p>Publication Date: {message.publication_date}</p>
      <p>Content: {message.content}</p>
      <Button onClick={() => navigate(`/messages/update/${message.id}`)}>
        Update Message
      </Button>
      <Button variant="danger" onClick={handleClickDeleteMessage}>
        Delete Message
      </Button>
      <Button onClick={() => navigate(`/messages`)}>Back</Button>
      <MessageResponses />
    </>
  );
};
