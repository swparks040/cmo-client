import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import { deletePTORequest, getPTORequestById } from "../managers/PTOManager";
import { getCurrentUser } from "../managers/UserManager";
import "./PTORequests.css";

export const PTORequestSingle = () => {
  const navigate = useNavigate();

  const { PTORequestId } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    getCurrentUser(currentUser).then(setCurrentUser);
  }, []);

  const [PTORequest, setPTORequest] = useState({
    id: 0,
    pto: 0,
    cmouser: 0,
    start_date: "",
    end_date: "",
    days_requested: 0,
    justification: "",
    is_approved: false,
  });

  useEffect(() => {
    getPTORequestById(PTORequestId).then(setPTORequest);
  }, [PTORequestId]);

  const handleClickDeletePTORequest = (event) => {
    event.preventDefault();
    deletePTORequest(PTORequest.id).then(() => {
      navigate("/ptorequests");
    });
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="ptoListHeader">
          {PTORequest.start_date} - {PTORequest.end_date}
        </Card.Title>
        <Card.Text>
          <Card.Text>
            <span className="ptoListInfo">
              Days Requested: {PTORequest.days_requested}
            </span>
          </Card.Text>
          <Card.Text>
            <span className="ptoListInfo">
              Justification: {PTORequest.justification}
            </span>
          </Card.Text>
        </Card.Text>
      </Card.Body>
      <Button
        className="ptoListItem"
        variant="success"
        onClick={() => navigate(`/ptorequests/${PTORequest.id}/update`)}
      >
        Edit
      </Button>
      <Button
        className="ptoListItem"
        variant="danger"
        onClick={handleClickDeletePTORequest}
      >
        Delete
      </Button>
    </Card>
  );
};
