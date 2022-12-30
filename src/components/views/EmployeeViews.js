import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import { FamilyMemberList } from "../family/FamilyAll";
import { FamilyDeclare } from "../family/FamilyDeclare";
import { FamilyUpdate } from "../family/FamilyUpdate";
import { FamilySingle } from "../family/FamilySingle";
import { AllMessages } from "../messages/MessagesAll";
import { MessageForm } from "../messages/MessageForm";
import { MessageUpdate } from "../messages/MessageUpdate";
import { MessageSingle } from "../messages/MessageSingle";
import { PTOForm } from "../pto/RequestPTO";

export const EmployeeViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages" element={<AllMessages />} />
        <Route path="/messages/create" element={<MessageForm />} />
        <Route path="/messages/:messageId" element={<MessageSingle />} />
        <Route path="/messages/update/:messageId" element={<MessageUpdate />} />
        <Route path="/family" element={<FamilyMemberList />} />
        <Route path="/familymembers/create" element={<FamilyDeclare />} />
        <Route path="/familymembers/:familyMemberId" element={<FamilySingle />} />
        <Route path="/familymembers/update/:familyMemberId" element={<FamilyUpdate />} />
        <Route path="/pto/create" element={<PTOForm />} />
      </Routes>
    </>
  );
};
