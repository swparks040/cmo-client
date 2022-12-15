import { useState } from "react";
import NavBar from "./nav /NavBar";

import { ApplicationViews } from "./views/ApplicationViews";

export const CMO = () => {
  const [token, setTokenState] = useState(localStorage.getItem("auth_token"));

  const setToken = (newToken) => {
    localStorage.setItem("auth_token", newToken);
    setTokenState(newToken);
  };

  return (
    <>
      <NavBar />
      <ApplicationViews token={token} setToken={setToken} />
    </>
  );
};
