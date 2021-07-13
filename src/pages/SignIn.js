import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
const SignIn = () => {
  return (
    <div className="signIn">
      <div className="head">
        <Link to="/">
          <img className="signInImage" src="img/login.webp" alt="" />
        </Link>
      </div>

      <div className="area">
        <h1>Sign-In</h1>
        <form>
          <label htmlFor="email">Email or Mobile phone number</label>
          <input type="email" name="email" id="mail" />
          <label htmlFor="email">Password</label>
          <input type="password" name="password" id="secret" />
          <button className="loginBtn" type="submit">
            Sign-In
          </button>
        </form>
        <div className="area_down">
          <p>Dont have an account?</p>
          <button className="signupBtn" type="submit">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
