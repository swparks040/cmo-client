import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  deletePTORequest,
  getPTORequestById,
  updatePTORequest,
} from "../managers/PTOManager";
import { updatePTO } from "../managers/PTOManager";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const AdminPTORequestApproval = () => {
  const { PTORequestId } = useParams();
  const navigate = useNavigate();

  const [PTORequest, setPTORequest] = useState({
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
    deletePTORequest(PTORequest.id).then(() => navigate("/ptorequests"));
  };

  const handleClickApprovePTORequest = (event) => {
    event.preventDefault();
    const updatedPTORequest = {
      id: PTORequest.id,
      cmouser: PTORequest.cmouser.id,
      pto: PTORequest.pto,
      start_date: PTORequest.start_date,
      end_date: PTORequest.end_date,
      days_requested: PTORequest.days_requested,
      justification: PTORequest.justification,
      is_approved: true,
    };
    updatePTORequest(updatedPTORequest).then(() => {
      const updatedPTO = {
        id: PTORequest.pto.id,
        cmouser: PTORequest.cmouser.id,
        days_remaining:
          PTORequest.pto.days_remaining - PTORequest.days_requested,
        days_used: PTORequest.pto.days_used + PTORequest.days_requested,
        total_days: PTORequest.pto.total_days,
      };
      updatePTO(updatedPTO).then(() => navigate("/ptorequests"));
    });
  };
  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">PTO Request Details</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Requester</Form.Label>
            <Form.Control
              type="text"
              value={`${PTORequest?.cmouser?.user?.first_name} ${PTORequest?.cmouser?.user?.last_name}`}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="text" value={PTORequest.start_date} disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>End Date</Form.Label>
            <Form.Control type="text" value={PTORequest.end_date} disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Days Requested</Form.Label>
            <Form.Control
              type="text"
              value={PTORequest.days_requested}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Justification</Form.Label>
            <Form.Control
              type="text"
              value={PTORequest.justification}
              disabled
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Approved</Form.Label>
            <Form.Control
              type="text"
              value={PTORequest.is_approved ? "Yes" : "No"}
              disabled
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoListItem"
          variant="success"
          onClick={handleClickApprovePTORequest}
        >
          Approve
        </Button>
        <Button
          className="ptoListItem"
          variant="danger"
          onClick={handleClickDeletePTORequest}
        >
          Delete
        </Button>
        <Button
          className="ptoListItem"
          variant="secondary"
          onClick={() => navigate(`/ptorequests/pending`)}
        >
          Back
        </Button>
      </Card>
    </>
  );
};
