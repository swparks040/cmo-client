import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Dashboard } from "../dashboard/Dashboard";
import NavBar from "../nav /NavBar";
import { Authorized } from "../views/Authorized";

export const ApplicationViews = ({ token, setToken, loggedInUser }) => {
  return (
    <>
      {token ? (
        <NavBar
          token={token}
          setToken={setToken}
          loggedInUser={loggedInUser}
        ></NavBar>
      ) : null}
      <Routes>
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        {/* <Route path="/ptoportal" element={<PTODetails setToken={setToken} />} /> */}
        {/* <Route path="/familyportal" element={<FamilyDetails setToken={setToken} />} /> */}
        {/* <Route path="/promoportal" element={<PromoDetails setToken={setToken} />} /> */}
        {/* <Route path="/evalportal" element={<EvalDetails setToken={setToken} />} /> */}
        {/* <Route path="/newemployeeform" element={<NewEmployeeForm setToken={setToken} />} /> */}
        <Route element={<Authorized token={token} />} />
      </Routes>
    </>
  );
};
