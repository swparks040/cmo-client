import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import {
  addFamilyMember,
  getAllFamilyMemberRelationships,
} from "../managers/FamilyManager";

export const FamilyDeclare = () => {
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

  const handleClickSaveFamilyMember = (event) => {
    event.preventDefault();

    const newFamilyMember = {
      cmouser: currentUser.id,
      family_member_relationship: familyMember.family_member_relationship,
      first_name: familyMember.first_name,
      last_name: familyMember.last_name,
      birthday: familyMember.birthday,
      anniversary: familyMember.anniversary,
      graduation: familyMember.graduation,
    };

    if (familyMember.family_member_relationship === 0) {
      window.alert("Please select a Family Member Relationship");
    } else {
      addFamilyMember(newFamilyMember).then(() => navigate("/"));
    }
  };

  useEffect(() => {
    getAllFamilyMemberRelationships().then((data) =>
      setFamilyMemberRelationships(data)
    );
  }, []);

  const changeFamilyMemberState = (event) => {
    const newFamilyMemberState = { ...familyMember };
    newFamilyMemberState[event.target.id] = event.target.value;
    setFamilyMember(newFamilyMemberState);
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="family_member_relationship_id">
            Family Member Relationship
          </Form.Label>
          <Form.Control
            as="select"
            id="family_member_relationship"
            value={familyMember.family_member_relationship}
            required
            autoFocus
            onChange={changeFamilyMemberState}
          >
            <option value={0}>Select Relationship</option>
            {familymemberrelationships.map((familymemberrelationship) => (
              <option
                key={familymemberrelationship.id}
                value={familymemberrelationship.id}
              >
                {familymemberrelationship.label}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="first_name">First Name</Form.Label>
          <Form.Control
            type="text"
            id="first_name"
            required
            autoFocus
            placeholder="First Name"
            value={familyMember.first_name}
            onChange={changeFamilyMemberState}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="last_name">Last Name</Form.Label>
          <Form.Control
            type="text"
            id="last_name"
            required
            autoFocus
            placeholder="Last Name"
            value={familyMember.last_name}
            onChange={changeFamilyMemberState}
          />
        </Form.Group>
        <Form.Group htmlFor="birthday">
          <Form.Label htmlFor="birthday">Birthday</Form.Label>
          <Form.Control
            type="date"
            id="birthday"
            required
            autoFocus
            value={familyMember.birthday}
            onChange={changeFamilyMemberState}
          />
        </Form.Group>
        <Form.Group htmlFor="anniversary">
          <Form.Label htmlFor="anniversary">Anniversary</Form.Label>
          <Form.Control
            type="date"
            id="anniversary"
            required
            autoFocus
            value={familyMember.anniversary}
            onChange={changeFamilyMemberState}
          />
        </Form.Group>
        <Form.Group htmlFor="graduation">
          <Form.Label htmlFor="graduation">Graduation</Form.Label>
          <Form.Control
            type="date"
            id="graduation"
            required
            autoFocus
            value={familyMember.graduation}
            onChange={changeFamilyMemberState}
          />
        </Form.Group>
        <Button onClick={handleClickSaveFamilyMember}>Save</Button>
        <Button onClick={() => navigate(`/familymembers`)}>Back</Button>
      </Form>
    </>
  );
};
