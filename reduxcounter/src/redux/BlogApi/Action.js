import axios from "axios";
import { CREATE_BLOG, FETCH_BLOG, GET_BLOGS } from "./ActionType";

export const getBlogs = () => async (dispatch) => {
  dispatch({
    type: FETCH_BLOG,
  });

  try {
    let blogs = await axios.get("http://localhost:3000/blogs");
    dispatch({
      type: GET_BLOGS,
      payload: blogs.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const postBlogs = (blog) => async (dispatch) => {
  dispatch({
    type: FETCH_BLOG,
  });

  try {
    let blogs = await axios.post("http://localhost:3000/blogs", blog);
    dispatch({
      type: CREATE_BLOG,
      payload: blogs.data,
    });
  } catch (error) {
    console.log(error);
  }
};
