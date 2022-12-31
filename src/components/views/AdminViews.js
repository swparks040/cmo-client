import { Route, Routes } from "react-router-dom";
import { AdminDashboard } from "../dashboard/AdminDashboard";
import { MessageForm } from "../messages/MessageForm";
import NavBar from "../nav /NavBar";

export const AdminViews = () => {
  return (
    <>
      <Routes>
        <NavBar />
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/messages/create" element={<MessageForm />} />
      </Routes>
    </>
  );
};