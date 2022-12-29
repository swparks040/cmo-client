import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import { FamilyMemberList } from "../family/FamilyAll";
import { FamilyDeclare } from "../family/FamilyDeclare";
import { FamilyUpdate } from "../family/FamilyUpdate";
import { MessageForm } from "../messages/MessageForm";
import { AllMessages } from "../messages/MessagesAll";
import { PTOForm } from "../pto/RequestPTO";

export const EmployeeViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages" element={<AllMessages />} />
        <Route path="/messages/create" element={<MessageForm />} />
        <Route path="/pto/create" element={<PTOForm />} />
        <Route path="/family" element={<FamilyMemberList />} />
        <Route path="/family/create" element={<FamilyDeclare />} />
        <Route path="/family/:familyMemberId/update" element={ <FamilyUpdate />} />
      </Routes>
    </>
  );
};
