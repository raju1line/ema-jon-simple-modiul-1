import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="from-container">
      <div>
        <div className="title">
          <h1 className="from-title">Login</h1>
        </div>
        <form>
          <div className="from-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="Email" id="" />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <div>
            <input className="from-submit" type="submit" value="Login" />
          </div>
        </form>
        <div className="signup-link">
          <p>
            <span>New to Ema-john?</span>
            <Link className="from-link" to="/signup">
              Create New Account
            </Link>
          </p>
        </div>
        <div className="horizontal-divider">
          <div className="line-right" />
          <p>or</p>
          <div className="line-left" />
        </div>
        <button className="submit-google" type="submit" value="">
          {<FcGoogle size={40}/>}Sign with google
        </button>
      </div>
    </div>
  );
};

export default Login;
