import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom";
export const AllMessages = () => {
    const navigate = useNavigate()
    return <>Render All Messages
    <Button onClick={() => navigate(`/messages/create`)}>Create Message</Button>
    <Button onClick={() => navigate(`/`)}>Back</Button></>
}