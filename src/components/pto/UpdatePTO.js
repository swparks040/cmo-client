import {useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPTOById } from "../managers/PTOManager";
import { updatePTO } from "../managers/PTOManager";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UpdatePTO = () => {

    const [PTO, setPTO] = useState({
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
        const newPTO = { ...PTO };
        newPTO[event.target.id] = event.target.value;
        setPTO(newPTO);
    };
    
    const handleClickUpdatePTO = (event) => {
        event.preventDefault();
        updatePTO(PTO).then(() => navigate(`/pto/${ptoId}`));
    };
    
    return (
        <>
        <Form>
            <Form.Group>
            <Form.Label>Days Remaining</Form.Label>
            <Form.Control
                id="days_remaining"
                type="number"
                value={PTO.days_remaining}
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
                value={PTO.days_used}
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
                value={PTO.total_days}
                onChange={handleControlledInputChange}
            />
            </Form.Group>
            <Button onClick={handleClickUpdatePTO}>Update PTO</Button>
        </Form>
        </>
    );
    }