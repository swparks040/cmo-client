export const getCommentsByMessageId = (messageId) => {
  return fetch(`http://localhost:8000/comments?messages=${messageId}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};

export const addComment = (comment) => {
  return fetch(`http://localhost:8000/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(comment),
  }).then((res) => res.json());
};

export const deleteComment = (commentId) => {
  return fetch(`http://localhost:8000/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  });
};

export const commentEdit = (comment) => {
  return fetch(`http://localhost:8000/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
    body: JSON.stringify(comment),
  });
};

export const getCommentById = (id) => {
  return fetch(`http://localhost:8000/comments/${id}`, {
    headers: {
      Authorization: `Token ${
        JSON.parse(localStorage.getItem("auth_token")).token
      }`,
    },
  }).then((res) => res.json());
};
