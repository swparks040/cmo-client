export const getPTObyUserId = (id) => {
  return fetch(`http://localhost:8000/pto?cmouser=${id}`, {
    headers: {
      Authorization: `Token ${JSON.parse(localStorage.getItem("auth_token")).token}`,
    },
  }).then((res) => res.json());
};

