import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from "./ActionType";

export const createBlog = (blog) => {
  return {
    type: CREATE_BLOG,
    payload: blog,
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG,
    payload: id,
  };
};

export const updateBlog = (id, blog) => {
  return {
    type: UPDATE_BLOG,
    payload: {
      id: id,
      blog: blog,
    },
  };
};
