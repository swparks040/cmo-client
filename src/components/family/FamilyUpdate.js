import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import { getFamilyMembersByCurrentUser } from "../managers/FamilyManager";
import { getAllFamilyMemberRelationships } from "../managers/FamilyManager";
import { updateFamilyMember } from "../managers/FamilyManager";
import Button from "react-bootstrap/Button";

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
      <form className="familyMemberForm">
        <h2 className="familyMemberForm__title">Update Family Member</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="family_member_relationship">Relationship: </label>
            <select
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
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="first_name">First Name: </label>
            <input
              type="text"
              id="first_name"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="First Name"
              value={familyMember.first_name}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="last_name">Last Name: </label>
            <input
              type="text"
              id="last_name"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Last Name"
              value={familyMember.last_name}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="birthday">Birthday: </label>
            <input
              type="date"
              id="birthday"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Birthday"
              value={familyMember.birthday}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="anniversary">Anniversary: </label>
            <input
              type="date"
              id="anniversary"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Anniversary"
              value={familyMember.anniversary}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="graduation">Graduation: </label>
            <input
              type="date"
              id="graduation"
              onChange={changeFamilyMemberState}
              required
              autoFocus
              className="form-control"
              placeholder="Graduation"
              value={familyMember.graduation}
            />
          </div>
        </fieldset>
        <Button variant="dark"
          className="btn btn-primary"
          onClick={handleClickSaveFamilyMember}
        >
          Save Family Member
        </Button>
      </form>
    </>
  );
};

export default FamilyUpdate;
