import { Navigate, Outlet } from "react-router-dom";
import { AdminViews } from "./AdminViews";
import { EmployeeViews } from "./EmployeeViews";

export const Authorized = () => {
  // get is_staff from local storage
  const CMOStaffUser = localStorage.getItem("is_staff");
  const CMOStaff = JSON.parse(CMOStaffUser);
  // display staff view
  if (localStorage.getItem("auth_token") && CMOStaff) {
    return (
      <>
        <Outlet /> <AdminViews />
      </>
    );
    // display employee view
  } else if (localStorage.getItem("auth_token") && !CMOStaff) {
    return (
      <>
        <Outlet /> <EmployeeViews />
      </>
    );
  }

  return <Navigate to="/login" replace />;
};
