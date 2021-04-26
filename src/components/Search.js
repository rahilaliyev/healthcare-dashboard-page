import React from "react";
import "../styles/Navbar.scss";
import SearchIcon from "../assets/Search-icon.png";
import Notification from "../assets/notification-icon.png";
import Avatar from "../assets/avatar-circle.png";

const Search = () => {
  return (
    <div>
      <div className="search-and-notification">
        <div className="search">
          <img src={SearchIcon} alt="Logo" />
          <input type="search" placeholder="Search" />
        </div>
        <div className="notification-profile">
          <div className="notification">
            <img src={Notification} alt="Notification" />
            <div className="number">
              <span>9</span>
            </div>
          </div>
          <div className="profile">
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
