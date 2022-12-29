export const getAllUsers = () => {
  return fetch("http://localhost:8000/cmousers", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getUserById = () => {
  return fetch(`http://localhost:8000/cmousers?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addUser = (user) => {
  return fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const updateUser = (user) => {
  return fetch(`http://localhost:8000/cmousers/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(user),
  });
};

export const deleteUser = (userId) => {
  return fetch(`http://localhost:8000/users/${userId}`, {
    method: "DELETE",
  });
};

export const getCurrentUser = () => {
  return fetch("http://localhost:8000/cmousers/current", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};
