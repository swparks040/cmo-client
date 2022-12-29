import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getUserById } from "../managers/UserManager";

//get all family members by user id, then render each family member with an option to update said family members.

export const FamilyMemberList = () => {
  const navigate = useNavigate();
  const [familyMembers, setFamilyMembers] = useState([{}])
  const [user, setUser] = useState({});
  useEffect(() => {
    getFamilyMembersByCurrentUser().then(setFamilyMembers);
    getUserById().then(setUser);
  }, []);
  
  return (
    <>
    <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Declared Family Members</Card.Title>
              <p>Hello {user[0]?.user?.first_name}!</p>
              <p>You have declared the following family members:</p>
              <Card.Text>
              {familyMembers.map(familyMember => {
                return (
                  <p>{familyMember.first_name} {familyMember.last_name}</p>
                )
              })}
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          </Row>
      <Button onClick={() => navigate(`/family/create`)}>Declare Family</Button>
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};
