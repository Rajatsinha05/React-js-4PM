import React from "react";
import { useDispatch } from "react-redux";
import { createUser, LogoutUser } from "../redux/User/Action";

const Signup = () => {
  let dispatch = useDispatch();

  const handleUser = () => {
    let user = {
      username: "react",
      email: "react@gmail.com",
      password: "react",
    };

    dispatch(createUser(user));
  };

  return (
    <div>
      <button onClick={handleUser}>Signup</button>

      <button onClick={()=>dispatch(LogoutUser())}>Logout</button>
    </div>
  );
};

export default Signup;
