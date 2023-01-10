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
      return (
        <Card.Text>
          <span className="ptoListInfo">
            You have not declared any family members.
          </span>
        </Card.Text>
      );
    } else if (familyMembers.length === 1) {
      return (
        <Card.Text>
          <span className="ptoListInfo">
            You have declared the following family member.
          </span>
        </Card.Text>
      );
    } else {
      return (
        <Card.Text>
          <span className="ptoListInfo">
            You have declared the following family members.
          </span>
        </Card.Text>
      );
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="ptoListHeader">
            Declared Family Members
          </Card.Title>
          <Card.Text>
            <span className="ptoListName">
              Hello {user[0]?.user?.first_name}!
            </span>
          </Card.Text>
          {familyMemberPluralization()}
          <Card.Text>
            {familyMembers.map((familyMember) => {
              return (
                <Button
                  className="ptoListItem"
                  variant="dark"
                  onClick={() => navigate(`/familymembers/${familyMember.id}`)}
                >
                  {familyMember.first_name} {familyMember.last_name}
                </Button>
              );
            })}
          </Card.Text>
        </Card.Body>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={() => navigate(`/familymembers/create`)}
        >
          Declare Family
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
