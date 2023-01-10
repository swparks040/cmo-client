import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import { deletePTO, getPTObyUserId } from "../managers/PTOManager";

export const PTOSingle = () => {
  const navigate = useNavigate();

  const { ptoId } = useParams();

  const [pto, setPTO] = useState({
    cmouser: 0,
    total_days: 0,
    days_used: 0,
    days_remaining: 0,
  });

  useEffect(() => {
    getPTObyUserId(ptoId).then((data) => {
      const pto = data.find((p) => p.id === parseInt(ptoId));
      if (pto) {
        setPTO(pto);
      }
    });
  }, []);

  const handleClickDeletePTO = (event) => {
    event.preventDefault();
    deletePTO(pto.id).then(() => navigate("/pto"));
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="ptoListHeader">PTO Details</Card.Title>
          <Card.Text>
            <span className="ptoListName">Total Days: {pto.total_days}</span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">Days Used: {pto.days_used}</span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListName">
              Days Remaining: {pto.days_remaining}
            </span>
          </Card.Text>
        </Card.Body>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={() => navigate(`/pto/${pto.id}/update`)}
        >
          Update PTO
        </Button>
        <Button
          className="ptoListItem"
          variant="danger"
          onClick={handleClickDeletePTO}
        >
          Delete PTO
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/pto`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
