import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../managers/UserManager";
import { getAllFamilyMembersByUserId } from "../managers/FamilyManager";

export const CMOUserDetails = () => {
  const navigate = useNavigate();
  
  const { userId } = useParams();
  
  const [user, setUser] = useState({
    id: 0,
    full_name: "",
    username: "",
    number_of_familymembers: "",
    email: "",
    salary: "",
    job_position: "",
    birthday: "",
    date_hired: "",
    date_evaluated: "",
    date_promoted: "",
    profile_image_url: "",

  });

  const [familyMembers, setFamilyMembers] = useState([{
    cmouser: 0,
    first_name: "",
    last_name: "",
    family_member_relationship: 0,
    birthday: "",
    anniversary: "",
    graduation: "",
  }]);

  useEffect(() => {
    getAllFamilyMembersByUserId(user.id).then((data) => {
      const familyMembers = data.find((f) => f.id === parseInt(user.id));
      if (familyMembers) {
        setFamilyMembers(familyMembers);
      }
    });
  }, []);

  useEffect(() => {
    getUserById(userId).then(setUser);
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>{user.full_name}</Card.Title>
              <Card.Text>Username: {user?.user?.username}</Card.Text>
              <Card.Text>Email: {user?.user?.email}</Card.Text>
              <Card.Text>Salary: {user.salary}</Card.Text>
              <Card.Text>Job Position: {user.job_position}</Card.Text>
              <Card.Text>Birthday: {user.birthday}</Card.Text>
              <Card.Text>Date Hired: {user.date_hired}</Card.Text>
              <Card.Text>Date Evaluated: {user.date_evaluated}</Card.Text>
              <Card.Text>Date Promoted: {user.date_promoted}</Card.Text>
              <Card.Text>Number of Family Members: {familyMembers.length}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Button onClick={() => navigate(`/cmousers`)}>Back</Button>
    <Button onClick={() => navigate(`/cmousers/${user.id}/update`)}>Edit</Button>
    </>
  );
};
