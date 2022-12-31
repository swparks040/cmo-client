import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../managers/UserManager";

export const CMOUserDetails = () => {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById().then((users) => {
      const user = users.find((u) => u.id === parseInt(userId));
      setUser(user);
    });
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{user.full_name}</Card.Title>
              <Card.Text>
                <p>Username: {user.username}</p>
                <p>Number of Family Members: {user.number_of_familymembers}</p>
                <p>Email: {user.email}</p>
                <p>Salary: {user.salary}</p>
                <p>Job Position: {user.job_position}</p>
                <p>Birthday: {user.birthday}</p>
                <p>Date Hired: {user.date_hired}</p>
                <p>Date Evaluated: {user.date_evaluated}</p>
                <p>Date Promoted: {user.date_promoted}</p>
                <p>Profile Image URL: {user.profile_image_url}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button onClick={() => navigate(`/cmousers`)}>Back</Button>
    </>
  );
};



