import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { seedPTO } from "../managers/PTOManager";
import { getAllUsers } from "../managers/UserManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const SeedPTO = () => {
  const navigate = useNavigate();

  const [cmousers, setCmousers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => setCmousers(data));
  }, []);

  const [cmouserPTO, setCmouserPTO] = useState({
    cmouser: 0,
    total_days: 0,
    days_used: 0,
    days_remaining: 0,
  });

  const handleClickSaveCMOuserPTO = (event) => {
    event.preventDefault();

    const newCmouserPTO = {
      cmouser: cmouserPTO.cmouser,
      total_days: cmouserPTO.total_days,
      days_used: cmouserPTO.days_used,
      days_remaining: cmouserPTO.days_remaining,
    };

    if (cmouserPTO.total_days === 0) {
      window.alert("Please enter a total number of days");
    } else {
      seedPTO(newCmouserPTO).then(() => navigate("/"));
    }
  };

  const changeCmouserPTOState = (event) => {
    const newCmouserPTOState = { ...cmouserPTO };
    newCmouserPTOState[event.target.id] = event.target.value;
    setCmouserPTO(newCmouserPTOState);
  };

  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">Seed PTO</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="cmouser_id">Employees</Form.Label>
            <Form.Control
              as="select"
              id="cmouser"
              value={cmouserPTO.cmouser}
              required
              autoFocus
              onChange={changeCmouserPTOState}
            >
              <option value="0">Select an Employee</option>
              {cmousers.map((cmouser) => (
                <option key={cmouser.id} value={cmouser.id}>
                  {cmouser.full_name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="total_days">Total Days</Form.Label>
            <Form.Control
              type="number"
              id="total_days"
              value={cmouserPTO.total_days}
              required
              autoFocus
              onChange={changeCmouserPTOState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="days_used">Days Used</Form.Label>
            <Form.Control
              type="number"
              id="days_used"
              value={cmouserPTO.days_used}
              required
              autoFocus
              onChange={changeCmouserPTOState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="days_remaining">Days Remaining</Form.Label>
            <Form.Control
              type="number"
              id="days_remaining"
              value={cmouserPTO.days_remaining}
              required
              autoFocus
              onChange={changeCmouserPTOState}
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoListItem"
          variant="success"
          type="submit"
          onClick={handleClickSaveCMOuserPTO}
        >
          Save
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
