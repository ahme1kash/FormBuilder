import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Login.css";
import ellipse1 from "../../Assets/ellipse1.png";
import ellipse2 from "../../Assets/ellipse2.png";
import group2 from "../../Assets/group2.png";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!loginData.email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!loginData.password.trim()) {
      validationErrors.password = "password is required";
    }

    setErrors(validationErrors);
  };
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <form onSubmit={submitHandler}>
          <div>
            <label className="labelloginmail" htmlFor="useremail">
              Email
            </label>
          </div>
          <div className="inputloginContainer">
            <input
              type="email"
              name="email"
              id="useremail"
              placeholder="Enter your email"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          {errors.email && <span className="error">{errors.email}</span>}
          <div>
            <label className="labelloginpassword" htmlFor="userpassword">
              Password
            </label>
          </div>
          <div className="inputloginContainer">
            <input
              type="password"
              name="password"
              id="userpassword"
              placeholder="Enter your password"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          {errors.password && <span className="error">{errors.password}</span>}

          <div className="submitlogincontainer">
            <input type="submit" className="submit" value="Login" />
          </div>
          <p
            className="loginhelp"
            style={{
              marginTop: "1em",
              color: "white",
              fontSize: "1.2vw",
              marginLeft: "2em",
            }}
          >
            Don't have an account ?
            <NavLink
              to="/register"
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              &nbsp; Register now
            </NavLink>
          </p>
        </form>
      </div>
      <img src={group2} className="logingroup1" alt="ellipse1 shape" />
      <img src={ellipse2} className="loginellipse2" alt="ellipse2 shape" />
      <img src={ellipse1} className="loginellipse1" alt="ellipse1 shape" />
    </div>
  );
};

export default Login;
