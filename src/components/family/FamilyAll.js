import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

//get all family members by user id, then render each family member with an option to update said family members.

export const AllFamilyMembers = () => {
  const navigate = useNavigate();
  return (
    <>
      Render All Family Members
      <Button onClick={() => navigate(`/family/create`)}>Declare Family</Button>
      <Button onClick={() => navigate(`/`)}>Back</Button>
    </>
  );
};
