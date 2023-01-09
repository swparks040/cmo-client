import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPTObyCurrentUser } from "../managers/PTOManager";
import { getCurrentUser } from "../managers/UserManager";
import { createPTORequest } from "../managers/PTOManager";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./PTORequests.css";

export const RequestPTO = () => {
  const navigate = useNavigate();
  const [cmouser, setUser] = useState({});
  const [PTO, setPTO] = useState([
    {
      id: 0,
      days_remaining: 0,
      total_days: 0,
      days_used: 0,
    },
  ]);
const [request, setRequest] = useState({
  pto: 0,
  cmouser: 0,
  start_date: "",
  end_date: "",
  days_requested: 0,
  justification: "",
  is_approved: false,
});

  useEffect(() => {
    getCurrentUser().then(setUser);
    getPTObyCurrentUser().then(setPTO);
  }, []);

  const handleControlledInputChange = (event) => {
    const newRequest = { ...request };
    newRequest[event.target.id] = event.target.value;
    setRequest(newRequest);
  };

  const handleClickSaveRequest = (event) => {
    event.preventDefault();

    const newRequest = {
        pto: PTO[0].id,
        cmouser: cmouser.id,
        start_date: request.start_date,
        end_date: request.end_date,
        days_requested: request.days_requested,
        justification: request.justification,
        is_approved: false,
  };

    if (request.start_date === "") {
        window.alert("Please select a Start Date");
        } else if (request.end_date === "") {
            window.alert("Please select an End Date");
        } else if (request.days_requested === 0) {
            window.alert("Please enter the number of days requested");
        } else if (request.justification === "") {
            window.alert("Please enter a justification for your request");
        } else {
            createPTORequest(newRequest).then(() => navigate("/"));
        }
    };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          id="start_date"
          onChange={handleControlledInputChange}
          required
          autoFocus
          className="form-control"
          placeholder="Start Date"
          value={request.start_date}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          id="end_date"
          onChange={handleControlledInputChange}
          required
          autoFocus
          className="form-control"
          placeholder="End Date"
          value={request.end_date}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Days Requested</Form.Label>
        <Form.Control
          type="number"
          id="days_requested"
          onChange={handleControlledInputChange}
          required
          autoFocus
          className="form-control"
          placeholder="Days Requested"
          value={request.days_requested}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Justification</Form.Label>
        <Form.Control
          type="text"
          id="justification"
          onChange={handleControlledInputChange}
          required
          autoFocus
          className="form-control"
          placeholder="Justification"
          value={request.justification}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleClickSaveRequest}>
        Submit Request
      </Button>
    </Form>
  );
};


