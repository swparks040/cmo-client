import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { getAllFamilyMembers } from "../managers/FamilyManager";
import { getAllMessages } from "../managers/MessageManager";
import { getAllUsers, getUserById } from "../managers/UserManager";
import { getAllPTO } from "../managers/PTOManager";

export const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [familyMembers, setFamilyMembers] = useState([]);
    const [messages, setMessages] = useState([]);
    const [PTO, setPTO] = useState([]);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        getUserById().then(setUser);
        getAllUsers().then(setUsers);
        getAllFamilyMembers().then(setFamilyMembers);
        getAllMessages().then(setMessages);
        getAllPTO().then(setPTO);
    }, []);
    
    return (
        <>
        <Row>
            <Col>
            <Card className="text-center">
                <Card.Header as="h3">Admin Dashboard</Card.Header>
                <Card.Body>
                <Card.Title>Welcome, {user.first_name}!</Card.Title>
                <Card.Text>
                    You have {users.length} users registered in the system.
                </Card.Text>
                <Card.Text>
                    You have {familyMembers.length} family members registered in the
                    system.
                </Card.Text>
                <Card.Text>
                    You have {messages.length} messages in the system.
                </Card.Text>
                <Card.Text>
                    You have {PTO.length} PTO requests in the system.
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </>
    );
    }