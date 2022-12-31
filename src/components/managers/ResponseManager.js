export const getResponsesByMessageId = (messageId) => {
  return fetch(`http://localhost:8000/responses?messages=${messageId}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addResponse = (response) => {
  return fetch(`http://localhost:8000/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(response),
  }).then((res) => res.json());
};

export const deleteResponse = (responseId) => {
  return fetch(`http://localhost:8000/responses/${responseId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};

export const responseEdit = (response) => {
    return fetch(`http://localhost:8000/responses/${response.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(response)
    })
    }

export const getResponseById = (id) => {
    return fetch(`http://localhost:8000/responses/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(res => res.json())
    }