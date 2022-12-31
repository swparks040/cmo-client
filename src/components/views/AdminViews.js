import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../dashboard/AdminDashboard";
import { MessageForm } from "../messages/MessageForm";


export const AdminViews = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/messages" element={<AdminDashboard />} />
        <Route path="/messages/create" element={<MessageForm />} />
      </Routes>
    </>
  );
};
