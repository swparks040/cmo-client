// PTO Manager //
export const getAllPTO = () => {
  return fetch(`http://localhost:8000/pto`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPTObyCurrentUser = () => {
  return fetch(`http://localhost:8000/pto?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPTObyUserId = (id) => {
  return fetch(`http://localhost:8000/pto?cmouser=${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};


export const seedPTO = (pto) => {
  return fetch(`http://localhost:8000/pto`, {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pto),
  }).then((res) => res.json());
}

export const updatePTO = (pto) => {
  return fetch(`http://localhost:8000/pto/${pto.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pto),
  }).then((res) => res.json());
}

export const deletePTO = (ptoId) => {
  return fetch(`http://localhost:8000/pto/${ptoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};

// PTO Request Manager //
export const getAllPTORequests = () => {
  return fetch(`http://localhost:8000/ptorequests`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPTORequestbyCurrentUser = () => {
  return fetch(`http://localhost:8000/ptorequests?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const createPTORequest = (request) => {
  return fetch(`http://localhost:8000/ptorequests`, {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  }).then((res) => res.json());
}

export const updatePTORequest = (ptorequest) => {
  return fetch(`http://localhost:8000/ptorequests/${ptorequest.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ptorequest),
  }).then((res) => res.json());
}
