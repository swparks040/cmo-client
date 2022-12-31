export const getPTObyCurrentUser = () => {
  return fetch(`http://localhost:8000/pto?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllPTO = () => {
  return fetch(`http://localhost:8000/pto`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
}
