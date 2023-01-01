import { Route, Routes } from "react-router-dom";
import { CMOUsersList } from "../cmousers/CMOUsersList";
import { CMOUserDetails } from "../cmousers/CMOUserDetails";
import { AdminDashboard } from "../dashboard/AdminDashboard";
import { MessageForm } from "../messages/MessageForm";
import { MessageResponses } from "../messages/MessageResponses";
import { AllMessagesAdmin } from "../messages/MessagesAllAdmin";
import { MessageSingle } from "../messages/MessageSingle";
import { MessageUpdate } from "../messages/MessageUpdate";
import { ResponseForm } from "../messages/ResponseForm";
import { CMOUserDetailsUpdate } from "../cmousers/CMOUserDetailsUpdate";

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
          path="/messages/:messageId/responses"
          element={<MessageResponses />}
        />
        <Route
          path="/messages/:messageId/responses/create"
          element={<ResponseForm />}
        />
        <Route path="/cmousers" element={<CMOUsersList />} />
        <Route path="/cmousers/:userId" element={<CMOUserDetails />} />
        <Route
          path="/cmousers/:userId/update"
          element={<CMOUserDetailsUpdate />}
        />
      </Routes>
    </>
  );
};
