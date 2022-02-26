import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  //  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    console.log(e);
  };

  const register = (e) => {
    console.log(e);
  };

  return (
    <div className="login">
      <Link to="/" className="login__logo">
        <h2>Elearn</h2>
      </Link>

      <div className="login__container">
        <h2>Sign in</h2>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Rasuta's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Rasuta account
        </button>
      </div>
    </div>
  );
}

export default Login;
