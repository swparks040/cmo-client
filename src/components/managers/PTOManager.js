export const getPTObyUserId = () => {
  return fetch(`http://localhost:8000/pto?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};
