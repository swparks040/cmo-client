export const getAllMessages = () => {
  return fetch("http://localhost:8000/messages", {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getAllMessagesByCategory = (categoryId) => {
  if (categoryId === 0) {
    return fetch("http://localhost:8000/messages", {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("auth_token")).token
        }`,
      },
    }).then((res) => res.json());
  } else {
    return fetch(`http://localhost:8000/messages?category=${categoryId}`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("auth_token")).token
        }`,
      },
    }).then((res) => res.json());
  }
};

export const getMessageById = (id) => {
  return fetch(`http://localhost:8000/messages/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const getMessagesByCurrentUser = () => {
  return fetch(`http://localhost:8000/messages?user=current`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addMessage = (message) => {
  return fetch("http://localhost:8000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(message),
  }).then((res) => res.json());
};

export const updateMessage = (message) => {
  return fetch(`http://localhost:8000/messages/${message.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(message),
  });
};

export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:8000/messages/${messageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};
