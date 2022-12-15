import { useEffect, useState } from "react";
import { getAllCategories } from "../managers/CategoryManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addMessage } from "../managers/MessageManager";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
export const PTOForm = () => {
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

  const handleClickSaveMessage = (event) => {
    event.preventDefault();

    const newMessage = {
      cmouser: currentUser.id,
      category: message.category,
      publication_date: message.publication_date,
      title: message.title,
      content: message.content,

    };

    if (message.category === 0) {
      window.alert("Please select a category");
    } else {
      addMessage(newMessage).then(() => navigate("/messages"));
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
            <option value={0}>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="title">Subject</Form.Label>
          <Form.Control
            type="text"
            id="title"
            required
            autoFocus
            placeholder="Summary"
            value={message.title}
            onChange={changeMessageState}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="content">Content</Form.Label>
          <Form.Control
            as="textarea"
            id="content"
            required
            autoFocus
            placeholder="Provide details and/or justification"
            value={message.content}
            onChange={changeMessageState}
          />
        </Form.Group>
        <Button onClick={handleClickSaveMessage}>Save Message</Button>
        <Button onClick={() => navigate(`/messages`)}>Back</Button>
      </Form>
    </>
  );
};
