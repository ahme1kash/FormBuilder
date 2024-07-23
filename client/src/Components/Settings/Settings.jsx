import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import logout_icon from "../../Assets/Logout.png";
import "./Settings.css";
const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setSettingsData({ ...settingsData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="settingsPage">
      <div className="settingsdiv">
        <h2 className="settings">Settings</h2>
      </div>
      <div className="settingsContainer">
        <form onSubmit={submitHandler}>
          <div>
            <label className="labelsettingsmail" htmlFor="username">
              Name
            </label>
          </div>
          <div className="inputsettingsContainer">
            <input
              type="text"
              name="name"
              id="username"
              placeholder="Name"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="labelsettingsmail" htmlFor="useremail">
              Email
            </label>
          </div>
          <div className="inputsettingsContainer">
            <input
              type="email"
              name="email"
              id="useremail"
              placeholder="Update Email"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>

          <div>
            <label
              className="labelsettingsoldpassword"
              htmlFor="olduserpassword"
            >
              Old Password
            </label>
          </div>
          <div className="inputsettingsContainer">
            <input
              type="password"
              name="oldPassword"
              id="olduserpassword"
              placeholder="Old Password"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label
              className="labelsettingsnewpassword"
              htmlFor="newuserpassword"
            >
              New Password
            </label>
          </div>
          <div className="inputsettingsContainer">
            <input
              type="password"
              name="newPassword"
              id="newuserpassword"
              placeholder="New Password"
              onChange={inputHandler}
              autoComplete="off"
            />
          </div>

          <div className="submitsettingscontainer">
            <input type="submit" className="submit" value="Update" />
          </div>
        </form>
      </div>
      <div className="logoutcontainer">
        <a href="/">
          <img className="logout" src={logout_icon} alt="logout_icon" />
        </a>
        <span>
          <NavLink
            to="/"
            style={{
              color: "red",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Logout
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default Settings;
