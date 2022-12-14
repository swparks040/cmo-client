export const getAllUsers = () => {
  return fetch("http://localhost:8000/cmousers", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};
export const getAllSubordinateUsers = () => {
  return fetch("http://localhost:8000/cmousers?is_staff=False", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllAdminUsers = () => {
  return fetch("http://localhost:8000/cmousers?is_staff=True", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getCurrentUser = () => {
  return fetch(`http://localhost:8000/cmousers?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getUserById = (id) => {
  return fetch(`http://localhost:8000/cmousers/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addUser = (user) => {
  return fetch("http://localhost:8000/cmousers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
};

export const updateUser = (cmouser) => {
  return fetch(`http://localhost:8000/cmousers/${cmouser.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(cmouser),
  });
};

export const deleteUser = (userId) => {
  return fetch(`http://localhost:8000/cmousers/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};
