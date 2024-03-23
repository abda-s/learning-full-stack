import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);

  const [error, setError] = useState("");
  let navigate = useNavigate();

  const login = () => {

    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token)
        setAuthState({ username: response.data.username, id: response.data.id, state: true });
        navigate(`/`)
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
