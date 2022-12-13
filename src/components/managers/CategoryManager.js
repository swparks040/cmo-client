export const getAllCategories = () => {
  return fetch("http://localhost:8000/categories", {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};

export const getCategoryById = (id) => {
  return fetch(`http://localhost:8000/categories/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};
