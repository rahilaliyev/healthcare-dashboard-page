import React, { useState } from "react";
import "../styles/Search.scss";
import SearchIcon from "../assets/Search-icon.png";
import Notification from "../assets/notification-icon.png";
import Avatar from "../assets/avatar-circle.png";

const Search = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleSideBar = () => {
    setSidebar(!sidebar);
    document.querySelector(".Sidebar").classList.toggle("active");

    document
      .querySelector(".hamburger-menu")
      .classList.toggle("hamburger-rotate");
  };

  return (
    <div>
      <div className="search-and-notification">
        <div class="hamburger-menu" onClick={handleSideBar}>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
          <div class="hamburger-line"></div>
        </div>
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
