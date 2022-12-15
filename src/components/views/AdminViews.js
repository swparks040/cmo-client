import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import { MessageForm } from "../messages/MessageForm";
import NavBar from "../nav /NavBar";

export const AdminViews = () => {
  return (
    <>
      <Routes>
        <NavBar />
        <Route path="/" element={<Dashboard />} />
        <Route path="/messages/create" element={<MessageForm />} />
      </Routes>
    </>
  );
};
