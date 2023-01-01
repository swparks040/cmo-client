import React, { useEffect, useState } from "react";
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
    getAllFamilyMemberRelationships().then((data) =>
      setFamilyMemberRelationships(data)
    );
  }, []);

  const handleClickDeleteFamilyMember = (event) => {
    event.preventDefault();
    deleteFamilyMember(familyMember.id).then(() => navigate("/familymembers"));
  };

  return (
    <>
      <h2>Family Member Details</h2>
      <p>First Name: {familyMember.first_name}</p>
      <p>Last Name: {familyMember.last_name}</p>
      <p>Relationship: {familyMember.family_member_relationship.label}</p>
      <p>Birthday: {familyMember.birthday}</p>
      <p>Anniversary: {familyMember.anniversary}</p>
      <p>Graduation: {familyMember.graduation}</p>
      <button
        onClick={() => navigate(`/familymembers/update/${familyMember.id}`)}
      >
        Update
      </button>
      <button onClick={handleClickDeleteFamilyMember}>Delete</button>
    </>
  );
};
