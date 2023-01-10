import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteFamilyMember,
  getFamilyMembersByCurrentUser,
  getAllFamilyMemberRelationships,
} from "../managers/FamilyManager";
import { getCurrentUser } from "../managers/UserManager";

export const FamilySingle = () => {
  const navigate = useNavigate();

  const { familyMemberId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  const [familymemberrelationships, setFamilyMemberRelationships] = useState(
    []
  );

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const [familyMember, setFamilyMember] = useState({
    cmouser: 0,
    family_member_relationship: 0,
    first_name: "",
    last_name: "",
    birthday: "",
    anniversary: "",
    graduation: "",
  });

  useEffect(() => {
    getFamilyMembersByCurrentUser(currentUser.id).then((data) => {
      const familyMember = data.find((f) => f.id === parseInt(familyMemberId));
      if (familyMember) {
        setFamilyMember(familyMember);
      }
    });
  }, []);

  useEffect(() => {
    getAllFamilyMemberRelationships(familymemberrelationships).then((data) =>
      setFamilyMemberRelationships(data)
    );
  }, []);

  const handleClickDeleteFamilyMember = (event) => {
    event.preventDefault();
    deleteFamilyMember(familyMember.id).then(() => navigate("/familymembers"));
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="ptoListHeader">
            {familyMember.first_name} {familyMember.last_name}
          </Card.Title>
          <Card.Text>
            <span className="ptoListName">
              First Name: {familyMember.first_name}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Last Name: {familyMember.last_name}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Relationship: {familyMember.family_member_relationship.label}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Birthday: {familyMember.birthday}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Anniversary: {familyMember.anniversary}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Graduation: {familyMember.graduation}
            </span>
          </Card.Text>
        </Card.Body>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={() => navigate(`/familymembers/update/${familyMember.id}`)}
        >
          Update
        </Button>
        <Button
          className="ptoListItem"
          variant="danger"
          onClick={handleClickDeleteFamilyMember}
        >
          Delete
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/familymembers`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
