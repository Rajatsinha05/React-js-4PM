import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBlog } from "../redux/Blog/Action";

const AddBlog = () => {
  let [title, setTitle] = useState("");
  let [img, setImg] = useState("");
  let [content, setContent] = useState("");
  let dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    let blog = {
      title,
      img,
      content,
      id: Date.now()
    }

    dispatch(createBlog(blog))
    setContent("")
    setImg("")
    setTitle("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBlog;
