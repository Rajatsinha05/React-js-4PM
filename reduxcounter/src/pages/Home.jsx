import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog } from '../redux/Blog/Action';

const Home = () => {

  let { blogs } = useSelector(store => store.blogs)
  console.log(blogs);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBlog(id))

  }
  return (
    <div>
      {
        blogs.map((ele) => (
          <div>

            <h1>{ele.title}</h1>
            <img src={ele.img} alt="" height="300px" width="300px" />
            <p>{ele.content}</p>
            <button onClick={() => handleDelete(ele.id)}>delete</button>
          </div>
        ))
      }


    </div>
  )
}

export default Home