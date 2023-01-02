export const getAllFamilyMembers = () => {
  return fetch("http://localhost:8000/familymembers", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllFamilyMembersById = (id) => {
  return fetch(`http://localhost:8000/familymembers/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllFamilyMembersByUserId = (id) => {
  return fetch(`http://localhost:8000/familymembers?cmouser=${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getFamilyMembersByCurrentUser = () => {
  return fetch(`http://localhost:8000/familymembers?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addFamilyMember = (familyMember) => {
  return fetch("http://localhost:8000/familymembers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(familyMember),
  }).then((res) => res.json());
};

export const getAllFamilyMemberRelationships = () => {
  return fetch("http://localhost:8000/familymemberrelationships", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllFamilyMemberRelationshipsById = (id) => {
  return fetch(`http://localhost:8000/familymemberrelationships/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const updateFamilyMember = (familyMember) => {
  return fetch(`http://localhost:8000/familymembers/${familyMember.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(familyMember),
  }).then((res) => res.json());
};

export const deleteFamilyMember = (familyMemberId) => {
  return fetch(`http://localhost:8000/familymembers/${familyMemberId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};
