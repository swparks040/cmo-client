import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import { deletePTO, getPTObyUserId } from "../managers/PTOManager";
import { getCurrentUser } from "../managers/UserManager";

export const PTOSingle = () => {
  const navigate = useNavigate();

  const { ptoId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

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
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>PTO Details</Card.Title>
              <Card.Text>Total Days: {pto.total_days}</Card.Text>
              <Card.Text>Days Used: {pto.days_used}</Card.Text>
              <Card.Text>Days Remaining: {pto.days_remaining}</Card.Text>
              
              <Button variant="danger" onClick={handleClickDeletePTO}>
                Delete PTO
              </Button>
              <Button variant="dark" onClick={() => navigate(`/pto/${pto.id}/update`)}>
                Update PTO
              </Button>
              <Button variant="dark" onClick={() => navigate(`/pto`)}>Back</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
