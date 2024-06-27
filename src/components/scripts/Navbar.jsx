import "../styles/Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCommentDots,
  faHouseChimney,
  faSortDown,
  faToolbox,
  faUserGroup,
  faTh,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import profiledp from "./assets/profile.webp";

export const Navbar = ({ profile }) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="navLeftSide">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                alt="linkedin logo"
              />
            </div>
            <input className="inputField" type="text" placeholder="Search" />
            <h4 className="text" id="search">
              Search
              </h4>
          </div>
          <div className="navMiddleSide">
            <FontAwesomeIcon
              className="fa-icon"
              id="search-icon"
              icon={faSearch}
            />

            <Link to="/" className="link" onClick={() => handleClick("home")}>
              <FontAwesomeIcon
                className={`fa-icon ${activeLink === "home" ? "active" : ""}`}
                icon={faHouseChimney}
              />
              <h4
                className={`text ${activeLink === "home" ? "active-text" : ""}`}
              >
                Home
              </h4>
            </Link>

            <Link
              to="/mynetwork"
              className="link"
              onClick={() => handleClick("network")}
            >
              <FontAwesomeIcon
                className={`fa-icon ${
                  activeLink === "network" ? "active" : ""
                }`}
                icon={faUserGroup}
              />
              <h4
                className={`text ${
                  activeLink === "network" ? "active-text" : ""
                }`}
              >
                My Network
              </h4>
            </Link>

            <Link
              to="/jobs"
              className="link"
              onClick={() => handleClick("jobs")}
            >
              <FontAwesomeIcon
                className={`fa-icon ${activeLink === "jobs" ? "active" : ""}`}
                icon={faToolbox}
              />
              <h4
                className={`text ${activeLink === "jobs" ? "active-text" : ""}`}
              >
                Jobs
              </h4>
            </Link>

            <Link
              to="/messaging"
              className="link"
              onClick={() => handleClick("messaging")}
            >
              <FontAwesomeIcon
                className={`fa-icon ${
                  activeLink === "messaging" ? "active" : ""
                }`}
                icon={faCommentDots}
              />
              <h4
                className={`text ${
                  activeLink === "messaging" ? "active-text" : ""
                }`}
              >
                Messaging
              </h4>
            </Link>

            <Link
              to="/notification"
              className="link"
              onClick={() => handleClick("notification")}
            >
              <FontAwesomeIcon
                className={`fa-icon ${
                  activeLink === "notification" ? "active" : ""
                }`}
                icon={faBell}
              />
              <h4
                className={`text ${
                  activeLink === "notification" ? "active-text" : ""
                }`}
              >
                Notification
              </h4>
            </Link>

            <div className="navAvatarDiv">
              <img className="avatar" src={profiledp} alt="profile" />
              <h4 className="avatar-text text" id="me">
                Me{" "}
                <FontAwesomeIcon
                  className="fa-icon"
                  icon={faSortDown}
                  id="downArrow"
                />
              </h4>
            </div>
          </div>
          <hr style={{ marginLeft: "5%" }}></hr>
          <div className="navRightSide">
            <div>
              <FontAwesomeIcon className="fa-icon" icon={faTh} />
              <h4 className="text" id="forBusiness">
                For Business
              </h4>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
