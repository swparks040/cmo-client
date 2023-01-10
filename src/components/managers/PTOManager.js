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

export const getPTOById = (id) => {
  return fetch(`http://localhost:8000/pto/${id}`, {
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
};

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
  });
};

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

export const getPTORequestByCurrentUser = () => {
  return fetch(`http://localhost:8000/ptorequests?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPTORequestByUserId = (id) => {
  return fetch(`http://localhost:8000/ptorequests?cmouser=${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPTORequestById = (id) => {
  return fetch(`http://localhost:8000/ptorequests/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getPendingPTORequests = () => {
  return fetch("http://localhost:8000/ptorequests?is_approved=False", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const createPTORequest = (ptoRequest) => {
  return fetch(`http://localhost:8000/ptorequests`, {
    method: "POST",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ptoRequest),
  }).then((res) => res.json());
};

export const updatePTORequest = (ptoRequest) => {
  return fetch(`http://localhost:8000/ptorequests/${ptoRequest.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ptoRequest),
  });
};

export const deletePTORequest = (ptoRequestId) => {
  return fetch(`http://localhost:8000/ptorequests/${ptoRequestId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};
