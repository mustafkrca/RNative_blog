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
          content: action.payload.content
        },
      ];
      case "delete_blogpost":
        return state.filter((item) =>item.id !== action.payload );
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return (title,content,callback) => {
    dispatch({ type: "add_blogpost",payload:{title : title,content :content} });
    if (callback) {
      callback()
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost",payload : id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost,deleteBlogPost },
  []
);