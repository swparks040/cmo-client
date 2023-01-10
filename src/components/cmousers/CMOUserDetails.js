import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, deleteUser } from "../managers/UserManager";
import { getAllFamilyMembersByUserId } from "../managers/FamilyManager";
import "./CMOUsers.css";

export const CMOUserDetails = () => {
  const navigate = useNavigate();

  const { userId } = useParams();

  const [user, setUser] = useState({
    id: 0,
    full_name: "",
    username: "",
    number_of_familymembers: "",
    email: "",
    salary: "",
    job_position: "",
    birthday: "",
    date_hired: "",
    date_evaluated: "",
    date_promoted: "",
    profile_image_url: "",
  });

  const [familyMembers, setFamilyMembers] = useState([
    {
      cmouser: 0,
      first_name: "",
      last_name: "",
      family_member_relationship: 0,
      birthday: "",
      anniversary: "",
      graduation: "",
    },
  ]);

  useEffect(() => {
    getUserById(userId).then(setUser);
  }, []);

  useEffect(() => {
    getAllFamilyMembersByUserId(user.id).then(setFamilyMembers);
  }, [user]);

  const handleClickDeleteUser = (event) => {
    event.preventDefault();
    deleteUser(user.id).then(() => navigate("/cmousers"));
  };

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="ptoListHeader">
                {user.full_name}
              </Card.Title>
              <Card.Text>
                <span className="ptoListName">
                  Username: {user?.user?.username}
                </span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">Email: {user?.user?.email}</span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">Salary: {user.salary}</span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">
                  Job Position: {user.job_position}
                </span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">Birthday: {user.birthday}</span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">
                  Date Hired: {user.date_hired}
                </span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">
                  Date Evaluated: {user.date_evaluated}
                </span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">
                  Date Promoted: {user.date_promoted}
                </span>
              </Card.Text>
              <Card.Text>
                <span className="ptoListName">
                  Number of Family Members: {familyMembers?.length}
                </span>
              </Card.Text>
            </Card.Body>
            <Button
              className="ptoListItem"
              variant="secondary"
              onClick={() => navigate(`/cmousers/${user.id}/update`)}
            >
              Edit
            </Button>
            <Button
              className="ptoListItem"
              variant="danger"
              onClick={handleClickDeleteUser}
            >
              Delete
            </Button>
            <Button
              className="ptoListItem"
              variant="secondary"
              onClick={() => navigate(`/cmousers`)}
            >
              Back
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );
};
