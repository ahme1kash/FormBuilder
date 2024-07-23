import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "./Register.css";
import ellipse1 from "../../Assets/ellipse1.png";
import ellipse2 from "../../Assets/ellipse2.png";
import group2 from "../../Assets/group2.png";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!registerData.name.trim()) {
      validationErrors.name = "username is required";
    }
    if (!registerData.email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!registerData.password.trim()) {
      validationErrors.password = "password is required";
    }
    if (registerData.confirmPassword.trim().length === 0) {
      console.log("Line 34", registerData.confirmPassword);
      validationErrors.confirmPassword = "confirm password is required";
    } else if (
      registerData.password.trim() !== registerData.confirmPassword.trim()
    ) {
      validationErrors.confirmPassword = "please enter same password as above";
    }

    setErrors(validationErrors);
  };
  return (
    <div className="registerPage">
      <div className="registerContainer">
        <form onSubmit={submitHandler}>
          <div>
            <label className="labelname" htmlFor="username">
              Username
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Enter a username"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          {errors.name && (
            <span className="error" style={{ marginTop: "-2em" }}>
              {errors.name}
            </span>
          )}
          <div>
            <label className="labelmail" htmlFor="useremail">
              Email
            </label>
          </div>
          <div className="inputContainer">
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
            <label className="labelpassword" htmlFor="userpassword">
              Password
            </label>
          </div>
          <div className="inputContainer">
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

          <div>
            <label
              className="labelconfirmpassword"
              htmlFor="userconfirmpassword"
            >
              Confirm Password
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              name="confirmPassword"
              id="userconfirmpassword"
              placeholder="Confirm your password"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
          <div className="submitcontainer">
            <input type="submit" className="submit" value="Sign Up" />
          </div>
          <p
            className="registerhelp"
            style={{
              marginTop: "1em",
              color: "white",
              fontSize: "1.2vw",
              marginLeft: "2em",
            }}
          >
            Already have an account ?
            <NavLink
              to="/login"
              style={{
                color: "blue",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              &nbsp; Login
            </NavLink>
          </p>
        </form>
      </div>
      <img src={group2} className="registergroup1" alt="ellipse1 shape" />
      <img src={ellipse2} className="registerellipse2" alt="ellipse2 shape" />
      <img src={ellipse1} className="registerellipse1" alt="ellipse1 shape" />
    </div>
  );
};

export default Register;
