import React from "react";
import "../styles/Topbar.css";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExampleUser from "../images/avatar.jpg";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-menu">
        <h1>Gallery</h1>
        <div className="icons">
          <EmailIcon cursor="pointer" htmlColor="#e0dfdb" />
          <NotificationsIcon cursor="pointer" htmlColor="#e0dfdb" />
          <Avatar alt="ExampleUser" src={ExampleUser} />
        </div>
      </div>
      <p>Photography is an art of teleporting the past into the future</p>
    </div>
  );
};

export default Topbar;
