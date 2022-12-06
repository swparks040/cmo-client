import { useState } from "react";
import { ApplicationViews } from "./views/ApplicationViews";
import { getAllUsers } from "./managers/UserManager";
import { useEffect } from "react";

export const CMO = () => {
  const [token, setTokenState] = useState(localStorage.getItem("auth_token"));
  const [users, setUserState] = useState([]);

  const setToken = (newToken) => {
    localStorage.setItem("auth_token", newToken);
    setTokenState(newToken);
  };

  useEffect(() => {
    if (token) {
      getAllUsers().then((usersFromAPI) => {
        setUserState(usersFromAPI);
      });
    }
  }, []);

  const loggedInUser = users.find((user) => user.tokenNumber === token);

  return (
    <>
      <ApplicationViews
        token={token}
        setToken={setToken}
        loggedInUser={loggedInUser}
      />
    </>
  );
};
