import React, { useState } from "react";
import { GoogleAuth, LoggedInWithEmail, SignupWithEmail } from "./config";

const App = () => {
  let [userData, setUserData] = useState({ email: "", password: "" });
  const signupWithGoogle = async () => {
    let res = await GoogleAuth();
    console.log(res);
  };
  const handleInput = (e) => {
    let { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let res = await SignupWithEmail(userData.email, userData.password);
    // console.log(res);

  let res=await LoggedInWithEmail(userData.email, userData.password)
  console.log(res);
  

  };
  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={userData.email}
          name="email"
          onChange={handleInput}
        />
        <input
          type="text"
          value={userData.password}
          name="password"
          onChange={handleInput}
        />
        <input type="submit" value="login"/>
      </form>
      <button onClick={signupWithGoogle}>Google</button>
    </div>
  );
};

export default App;
