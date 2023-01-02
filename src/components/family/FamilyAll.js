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
                {familyMembers.map((familyMember) => {
                  return (
                    <Button
                    variant="dark" onClick={() =>
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
      <Button variant="dark" onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};
