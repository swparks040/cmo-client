import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const Dashboard = ({token}) => {
  const navigate = useNavigate()

    return <>
            <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>PTO Portal</Card.Title>
                  <Card.Text>
                    Possible doughnut chart for PTO hours or responsive text...
                  </Card.Text>
                  <Button onClick={() => navigate(`/ptoportal`)}>Request PTO</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Family Portal</Card.Title>
                  <Card.Text>
                    Text for "You have familyMembers family members declared on your account."
                  </Card.Text>
                  <Button onClick={() => navigate(`/familyportal`)}>Update My Family</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Promotions Portal</Card.Title>
                  <Card.Text>
                    Your last Promotion discussion was on 1/1/2021.  You are eligible for promotion on 1/1/2022.
                  </Card.Text>
                  <Button onClick={() => navigate(`/promoportal`)}>Discuss Promotion</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Evaluations Portal</Card.Title>
                  <Card.Text>
                    Your last feedback session was on 1/1/2021.  You are eligible for feedback on 6/1/2022.
                  </Card.Text>
                  <Button onClick={() => navigate(`/evalportal`)}>Discuss Evaluation</Button>
                </Card.Body>
              </Card>
            </Col>
            </Row>
            </>
      ;
    }
