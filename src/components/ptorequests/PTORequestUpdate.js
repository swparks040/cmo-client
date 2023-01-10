import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentUser } from "../managers/UserManager";
import {
  getPTORequestById,
  updatePTORequest,
  getAllPTO,
} from "../managers/PTOManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export const PTORequestUpdate = () => {
  const { PTORequestId } = useParams();

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);

  const navigate = useNavigate();
  const [pto, setPTO] = useState({});
  useEffect(() => {
    getAllPTO(pto).then((data) => setPTO(data));
  }, []);

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

  const handleClickSavePTORequest = (event) => {
    event.preventDefault();
    const updatedPTORequest = {
      id: PTORequest.id,
      cmouser: currentUser.id,
      pto: PTORequest.pto,
      start_date: PTORequest.start_date,
      end_date: PTORequest.end_date,
      days_requested: PTORequest.days_requested,
      justification: PTORequest.justification,
      is_approved: PTORequest.is_approved,
    };
    updatePTORequest(updatedPTORequest).then(() => navigate("/ptorequests"));
  };

  const changePTORequestState = (event) => {
    const newPTORequestState = { ...PTORequest };
    newPTORequestState[event.target.id] = event.target.value;
    setPTORequest(newPTORequestState);
  };

  return (
    <>
      <Card>
        <Card.Title className="ptoListHeader">Update PTO Request</Card.Title>
        <Form className="PTORequestForm">
          <Form.Group>
            <Form.Label htmlFor="start_date">Start Date</Form.Label>
            <Form.Control
              type="date"
              id="start_date"
              value={PTORequest.start_date}
              required
              autoFocus
              onChange={changePTORequestState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="end_date">End Date</Form.Label>
            <Form.Control
              type="date"
              id="end_date"
              value={PTORequest.end_date}
              required
              autoFocus
              onChange={changePTORequestState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="days_requested">Days Requested</Form.Label>
            <Form.Control
              type="number"
              id="days_requested"
              value={PTORequest.days_requested}
              required
              autoFocus
              onChange={changePTORequestState}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="justification">Justification</Form.Label>
            <Form.Control
              type="text"
              id="justification"
              value={PTORequest.justification}
              required
              autoFocus
              onChange={changePTORequestState}
            />
          </Form.Group>
        </Form>
        <Button
          className="ptoRequestSubmit"
          variant="success"
          onClick={handleClickSavePTORequest}
        >
          Save PTO Request
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
export default PTORequestUpdate;
