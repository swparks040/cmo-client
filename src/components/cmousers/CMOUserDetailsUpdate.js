import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById } from "../managers/UserManager";
import { updateUser } from "../managers/UserManager";
import Card from "react-bootstrap/Card";

export const CMOUserDetailsUpdate = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState({
    id: 0,
    full_name: "",
    job_position: "",
    salary: "",
    birthday: "",
    date_hired: "",
    date_evaluated: "",
    date_promoted: "",
    profile_image_url: "",
  });

  useEffect(() => {
    getUserById(userId).then(setUser);
  }, []);

  const handleClickSaveUser = (event) => {
    event.preventDefault();

    const updatedUser = {
      id: user.id,
      full_name: user.full_name,
      job_position: user.job_position,
      salary: user.salary,
      birthday: user.birthday,
      date_hired: user.date_hired,
      date_evaluated: user.date_evaluated,
      date_promoted: user.date_promoted,
      profile_image_url: user.profile_image_url,
    };

    updateUser(updatedUser).then(() => navigate("/"));
  };

  const changeUserState = (event) => {
    const newUser = { ...user };
    newUser[event.target.id] = event.target.value;
    setUser(newUser);
  };

  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">{user.full_name}</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              id="full_name"
              onChange={changeUserState}
              value={user.full_name}
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Job Position</Form.Label>
            <Form.Control
              type="text"
              id="job_position"
              onChange={changeUserState}
              value={user.job_position}
              required
              autoFocus
              placeholder="Job Position"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="text"
              id="salary"
              onChange={changeUserState}
              value={user.salary}
              required
              autoFocus
              placeholder="Salary"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type="date"
              id="birthday"
              onChange={changeUserState}
              value={user.birthday}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Hired</Form.Label>
            <Form.Control
              type="date"
              id="date_hired"
              onChange={changeUserState}
              value={user.date_hired}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Evaluated</Form.Label>
            <Form.Control
              type="date"
              id="date_evaluated"
              onChange={changeUserState}
              value={user.date_evaluated}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Promoted</Form.Label>
            <Form.Control
              type="date"
              id="date_promoted"
              onChange={changeUserState}
              value={user.date_promoted}
              required
              autoFocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Profile Image URL</Form.Label>
            <Form.Control
              type="text"
              id="profile_image_url"
              onChange={changeUserState}
              value={user.profile_image_url}
              required
              autoFocus
            />
            <Button
              className="ptoListItem"
              variant="dark"
              onClick={handleClickSaveUser}
            >
              Save Employee Details
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </>
  );
};
