import { Route, Routes } from "react-router-dom";
import { CMOUsersList } from "../cmousers/CMOUsersList";
import { CMOUserDetails } from "../cmousers/CMOUserDetails";
import { AdminDashboard } from "../dashboard/AdminDashboard";
import { MessageForm } from "../messages/MessageForm";
import { MessageComments } from "../messages/MessageComments";
import { AllMessagesAdmin } from "../messages/MessagesAllAdmin";
import { MessageSingle } from "../messages/MessageSingle";
import { MessageUpdate } from "../messages/MessageUpdate";
import { CommentForm } from "../messages/CommentForm";
import { CMOUserDetailsUpdate } from "../cmousers/CMOUserDetailsUpdate";
import { SeedPTO } from "../pto/SeedPTO";
import { PTOList } from "../pto/ListPTO";
import { PTOSingle } from "../pto/EmployeePTO";
import { AdminPTORequestList } from "../ptorequests/AdminPTORequestList";
import { AdminPTORequestApproval } from "../ptorequests/AdminPTORequestApproval";
import { UpdatePTO } from "../pto/UpdatePTO";

export const AdminViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/messages" element={<AllMessagesAdmin />} />
        <Route path="/messages/create" element={<MessageForm />} />
        <Route path="/messages/:messageId" element={<MessageSingle />} />
        <Route path="/messages/update/:messageId" element={<MessageUpdate />} />
        <Route
          path="/messages/:messageId/comments"
          element={<MessageComments />}
        />
        <Route
          path="/messages/:messageId/comments/create"
          element={<CommentForm />}
        />
        <Route path="/cmousers" element={<CMOUsersList />} />
        <Route path="/cmousers/:userId" element={<CMOUserDetails />} />
        <Route
          path="/cmousers/:userId/update"
          element={<CMOUserDetailsUpdate />}
        />
        <Route path="/pto" element={<PTOList />} />
        <Route path="/pto/:ptoId" element={<PTOSingle />} />
        <Route path="/pto/:ptoId/update" element={<UpdatePTO />} />
        <Route path="/pto/create" element={<SeedPTO />} />
        <Route path="/ptorequests/pending" element={<AdminPTORequestList />} />
        <Route
          path="/ptorequests/pending/:PTORequestId"
          element={<AdminPTORequestApproval />}
        />
      </Routes>
    </>
  );
};
