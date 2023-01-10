import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPendingPTORequests } from "../managers/PTOManager";

export const AdminPTORequestList = () => {
  const navigate = useNavigate();

  const [PTORequests, setPTORequests] = useState([{}]);

  useEffect(() => {
    getPendingPTORequests().then(setPTORequests);
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="ptoListHeader">PTO Requests</Card.Title>
          <p>
            <span className="ptoListInfo">
              You have {PTORequests.length} pending PTO Requests:
            </span>
          </p>
          <Card.Text>
            {PTORequests.map((PTORequest) => {
              return (
                <Button
                  className="ptoListItem"
                  variant="dark"
                  onClick={() =>
                    navigate(`/ptorequests/pending/${PTORequest.id}`)
                  }
                >
                  {PTORequest?.cmouser?.user?.first_name}{" "}
                  {PTORequest?.cmouser?.user?.last_name} begins{" "}
                  {PTORequest.start_date}
                </Button>
              );
            })}
          </Card.Text>
        </Card.Body>
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
