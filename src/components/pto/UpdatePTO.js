import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPTOById } from "../managers/PTOManager";
import { updatePTO } from "../managers/PTOManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const UpdatePTO = () => {
  const [pto, setPTO] = useState({
    id: 0,
    cmouser: 0,
    days_remaining: 0,
    days_used: 0,
    total_days: 0,
  });

  const { ptoId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPTOById(ptoId).then(setPTO);
  }, [ptoId]);

  const handleControlledInputChange = (event) => {
    const newPTO = { ...pto };
    newPTO[event.target.id] = event.target.value;
    setPTO(newPTO);
  };

  const handleClickUpdatePTO = (event) => {
    event.preventDefault();
    updatePTO(pto).then(() => navigate(`/pto/${ptoId}`));
  };

  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">Update PTO</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Days Remaining</Form.Label>
            <Form.Control
              id="days_remaining"
              type="number"
              value={pto.days_remaining}
              required
              autoFocus
              onChange={handleControlledInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Days Used</Form.Label>
            <Form.Control
              id="days_used"
              type="number"
              value={pto.days_used}
              required
              autoFocus
              onChange={handleControlledInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Total Days</Form.Label>
            <Form.Control
              id="total_days"
              type="number"
              required
              autoFocus
              value={pto.total_days}
              onChange={handleControlledInputChange}
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={handleClickUpdatePTO}
        >
          Update PTO
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/pto/${pto.id}`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
