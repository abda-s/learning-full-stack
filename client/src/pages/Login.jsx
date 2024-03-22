import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
      if(response.data.error){
        setError(response.data.error);
      }else{
        sessionStorage.setItem("accessToken",response.data)
      }
    }).catch((error) => {
      if (error.response && error.response.data && error.response.data.error) {
        // Server responded with an error message
        setError(error.response.data.error);
      } else {
        // Unexpected error occurred
        setError("An unexpected error occurred");
      }
    });;


  };
  return (
    <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      {error && <div className="error">{error}</div>}
      <button onClick={login}> Login </button>
    </div>
  );
}

export default Login;
