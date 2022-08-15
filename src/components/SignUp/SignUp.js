import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import auth from "../Login/firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [Error, setError] = useState("");
  const naviget = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelPassword = (e) => {
    setPassword(e.target.value);
  };
  const handelConformPassword = (e) => {
    setConformPassword(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (password !== conformPassword) {
      setError("did'nt match");
      return;
    }git
    if (password.length < 6) {
      setError("Minimum 6 character ");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    naviget("/shop");
  }

  return (
    <div className="from-container">
      <div>
        {/* <p>{user?.email}</p> */}
        <div className="title">
          <h1 className="from-title">Sign up</h1>
        </div>
        <form onSubmit={handelSubmit}>
          <div className="from-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handelEmail} type="email" name="email" id="" />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handelPassword}
              type="password"
              name="password"
              id=""
            />
          </div>
          <div className="from-group">
            <label htmlFor="conform-password">Conform Password</label>
            <input
              onBlur={handelConformPassword}
              type="password"
              name="conformPassword"
              id=""
            />
            <p style={{ color: "red" }}>{Error}</p>
          </div>
          <div>
            <input className="from-submit" type="submit" value="Submit" />
          </div>
        </form>
        <div className="signup-link">
          <p>
            <span>You have a account?</span>
            <Link className="from-link" to="/login">
              Login
            </Link>
          </p>
        </div>
        <div className="horizontal-divider">
          <div className="line-right" />
          <p>or</p>
          <div className="line-left" />
        </div>
        <button className="submit-google" type="submit" value="">
          {<FcGoogle size={40} />}Sign with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
