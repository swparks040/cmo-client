//create a new component called FamilySingle.js that will display the details of a single family member using the useParams hook. The component should display the following information: first name, last name, relationship, birthday, anniversary, and a button that will navigate the user to the FamilyUpdate form. The component should also display a button that will delete the family member from the database. Use useNavigate instead of history.push to navigate the user to the FamilyList component after the family member has been deleted.

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteFamilyMember,
  getFamilyMembersByCurrentUser,
  getAllFamilyMemberRelationships,
} from "../managers/FamilyManager";
import { getCurrentUser } from "../managers/UserManager";

export const FamilySingle = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const navigate = useNavigate();
  const [familymemberrelationships, setFamilyMemberRelationships] = useState(
    []
  );
  const [familyMember, setFamilyMember] = useState({
    cmouser: 0,
    family_member_relationship: 0,
    first_name: "",
    last_name: "",
    birthday: "",
    anniversary: "",
    graduation: "",
  });
  const { familyMemberId } = useParams();

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
    deleteFamilyMember(familyMember.id).then(() => navigate("/family"));
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
      <button onClick={() => navigate(`/familymembers/update/${familyMember.id}`)}>
        Update
      </button>
      <button onClick={handleClickDeleteFamilyMember}>Delete</button>
    </>
  );
};
