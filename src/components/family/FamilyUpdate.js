import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getAllFamilyMemberRelationships } from "../managers/FamilyManager";
import { updateFamilyMember } from "../managers/FamilyManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const FamilyUpdate = () => {
  const { familyMemberId } = useParams();

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

  useEffect(() => {
    getFamilyMembersByCurrentUser(currentUser.id).then((data) => {
      const familyMember = data.find((f) => f.id === parseInt(familyMemberId));
      if (familyMember) {
        setFamilyMember(familyMember);
      }
    });
  }, [familyMemberId]);

  const handleClickSaveFamilyMember = (event) => {
    event.preventDefault();

    const updatedFamilyMember = {
      id: familyMember.id,
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
      updateFamilyMember(updatedFamilyMember).then(() => navigate("/"));
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
      <Card>
        <Card.Title className="ptoListHeader">
          {familyMember.first_name} {familyMember.last_name}
        </Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Relationship</Form.Label>
            <Form.Control
              as="select"
              value={familyMember.family_member_relationship}
              name="family_member_relationship"
              id="family_member_relationship"
              className="form-control"
              onChange={changeFamilyMemberState}
            >
              <option value="0">Select a Relationship</option>
              {familymemberrelationships.map((fmr) => (
                <option key={fmr.id} value={fmr.id}>
                  {fmr.label}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              id="first_name"
              type="text"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="First Name"
              value={familyMember.first_name}
            />
          </Form.Group>

          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              id="last_name"
              type="text"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Last Name"
              value={familyMember.last_name}
            />
          </Form.Group>

          <Form.Group controlId="birthday">
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              id="birthday"
              type="date"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Birthday"
              value={familyMember.birthday}
            />
          </Form.Group>

          <Form.Group controlId="anniversary">
            <Form.Label>Anniversary</Form.Label>
            <Form.Control
              id="anniversary"
              type="date"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Anniversary"
              value={familyMember.anniversary}
            />
          </Form.Group>

          <Form.Group controlId="graduation">
            <Form.Label>Graduation</Form.Label>
            <Form.Control
              id="graduation"
              type="date"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Graduation"
              value={familyMember.graduation}
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={handleClickSaveFamilyMember}
        >
          Save Family Member
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/familymembers/${familyMember.id}`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};

export default FamilyUpdate;
