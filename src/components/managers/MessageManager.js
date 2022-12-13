export const getAllMessages = () => {
  return fetch("http://localhost:8000/messages", {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};

export const getAllMessagesByCategory = (categoryId) => {
  if (categoryId === 0) {
    return fetch("http://localhost:8000/messages", {
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json());
  } else {
    return fetch(`http://localhost:8000/messages?category=${categoryId}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("auth_token")}`,
      },
    }).then((res) => res.json());
  }
};

export const getMessageById = (id) => {
  return fetch(`http://localhost:8000/messages/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};

export const getMessageByUserId = (token) => {
  return fetch(`http://localhost:8000/messages?user=${token}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then((res) => res.json());
};

export const addMessage = (message) => {
  return fetch("http://localhost:8000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
    body: JSON.stringify(message),
  }).then((res) => res.json());
};

export const updateMessage = (message) => {
  return fetch(`http://localhost:8000/messages/${message.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
    body: JSON.stringify(message),
  });
};

export const deleteMessage = (messageId) => {
  return fetch(`http://localhost:8000/messages/${messageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  });
};
