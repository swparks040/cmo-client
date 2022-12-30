import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import { getAllCategories } from "../managers/CategoryManager";
import Form from "react-bootstrap/Form";
import { getMessagesByCurrentUser, updateMessage } from "../managers/MessageManager";

export const MessageUpdate = () => {
  const { messageId } = useParams();
  
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);

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

  const handleClickSaveMessage = (event) => {
    event.preventDefault();

    const updatedMessage = {
      id: message.id,
      cmouser: currentUser.id,
      category: message.category,
      publication_date: message.publication_date,
      title: message.title,
      content: message.content,

    };

    if (message.category === 0) {
      window.alert("Please select a category");
    } else {
      updateMessage(updatedMessage).then(() => navigate("/messages"));
    }
  };

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);

  const changeMessageState = (event) => {
    const newMessageState = { ...message };
    newMessageState[event.target.id] = event.target.value;
    setMessage(newMessageState);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="category_id">Category</Form.Label>
          <Form.Control
            as="select"
            id="category"
            value={message.category}
            required
            autoFocus
            onChange={changeMessageState}
          >
            <option value="0">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="title">Title</Form.Label>
          <Form.Control
            type="text"
            id="title"
            value={message.title}
            required
            autoFocus
            onChange={changeMessageState}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="content">Content</Form.Label>
          <Form.Control
            type="text"
            id="content"
            value={message.content}
            required
            autoFocus
            onChange={changeMessageState}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleClickSaveMessage}
        >
          Save Message
        </Button>
      </Form>
    </>
  );
};
