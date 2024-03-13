import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.random().toString(36).substring(2) + Date.now().toString(36),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((item) => item.id !== action.payload);
    case "edit_blogpost":
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            title: action.payload.title,
            content: action.payload.content,
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    {
      id: 1,
      title: "Python",
      content:
        "Python, basit ve anlaşılır sözdizimi ile bilinen bir yüksek seviyeli programlama dilidir. Genellikle genel amaçlı programlama, web geliştirme, veri analizi ve yapay zeka gibi alanlarda kullanılır. Python, okunabilirliği ve basitliği ile öne çıkar ve büyük bir topluluğa sahiptir. Ayrıca, birçok kütüphane ve çerçeve ile zengin bir ekosisteme sahiptir.",
    },
    {
      id: 2,
      title: "JavaScript",
      content:
        "JavaScript, web geliştirme için yaygın olarak kullanılan bir programlama dilidir. Tarayıcıda çalışan dinamik içerikler oluşturmak için kullanılır ve genellikle HTML ve CSS ile birlikte kullanılır. JavaScript, modern web uygulamalarının temelini oluşturur ve istemci tarafında (client-side) çalışırken, Node.js kullanılarak sunucu tarafında (server-side) da çalışabilir.",
    },
  ]
);
