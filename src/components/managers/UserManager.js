export const getAllUsers = () => {
  return fetch("http://localhost:8000/cmousers", {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(`http://localhost:8000/cmousers/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
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
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
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
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};