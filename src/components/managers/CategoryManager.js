export const getAllCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getCategoryById = (id) => {
  return fetch(`http://localhost:8000/categories/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};
