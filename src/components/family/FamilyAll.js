import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getCurrentUser } from "../managers/UserManager";

export const FamilyMemberList = () => {
  const navigate = useNavigate();

  const [familyMembers, setFamilyMembers] = useState([{}]);

  const [user, setUser] = useState({});

  useEffect(() => {
    getFamilyMembersByCurrentUser().then(setFamilyMembers);
    getCurrentUser().then(setUser);
  }, []);

  const familyMemberPluralization = () => {
    if (familyMembers.length === 0) {
      return <Card.Text>You have not declared any family members.</Card.Text>;
    } else if (familyMembers.length === 1) {
      return (
        <Card.Text>You have declared the following family member.</Card.Text>
      );
    } else {
      return (
        <Card.Text>You have declared the following family members.</Card.Text>
      );
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Declared Family Members</Card.Title>
              <Card.Text>Hello {user[0]?.user?.first_name}!</Card.Text>
              {familyMemberPluralization()}
              <Card.Text>
                {familyMembers.map((familyMember) => {
                  return (
                    <Button
                      variant="dark"
                      onClick={() =>
                        navigate(`/familymembers/${familyMember.id}`)
                      }
                    >
                      {familyMember.first_name} {familyMember.last_name}
                    </Button>
                  );
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button variant="dark" onClick={() => navigate(`/familymembers/create`)}>
        Declare Family
      </Button>
      <Button variant="dark" onClick={() => navigate(`/`)}>
        Back
      </Button>
    </>
  );
};
