import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
export const AllMessages = () => {
  const navigate = useNavigate();
  return (
    <>
      Render All Messages
      <Button onClick={() => navigate(`/messages/create`)}>
        Create Message
      </Button>
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};


// create a page that renders all messages for the current user and display them in a list. Each message should have a button that allows the user to delete the message. The user should also have a button that allows them to create a new message. the message should have the following properties: id, user, category, publication_date, title, and content. 

// Path: src/components/messages/MessagesAll.js