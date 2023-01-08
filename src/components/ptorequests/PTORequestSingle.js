import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useParams, useNavigate } from "react-router-dom";
import {
  deletePTORequest,
  getPTORequestById
} from "../managers/PTOManager";
import { getCurrentUser } from "../managers/UserManager";

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
          <Card.Title>
            {PTORequest.start_date} - {PTORequest.end_date}
          </Card.Title>
          <Card.Text>
            <Card.Text>Days Requested: {PTORequest.days_requested}</Card.Text>
            <Card.Text>Justification: {PTORequest.justification}</Card.Text>
            <Card.Text>Is Approved: {PTORequest.is_approved}</Card.Text>
          </Card.Text>
          <Button
            variant="dark"
            onClick={() => navigate(`/ptorequests/${PTORequest.id}/update`)}
          >
            Edit
          </Button>
          <Button variant="dark" onClick={handleClickDeletePTORequest}>
            Delete
          </Button>
          <Button variant="dark" onClick={() => navigate(`/`)}>
            Back
          </Button>
        </Card.Body>
      </Card>
    );
  };

