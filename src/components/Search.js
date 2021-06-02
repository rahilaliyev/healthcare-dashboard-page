import React, { useState } from "react";
import "../styles/Search.scss";
import SearchIcon from "../assets/Search-icon.png";
import Notification from "../assets/notification-icon.png";
import Avatar from "../assets/avatar-circle.png";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import { css } from "@emotion/react";
import BarLoader from "react-spinners/BarLoader";

const Search = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSideBar = () => {
    setSidebar(!sidebar);
    document.querySelector(".Sidebar").classList.toggle("active");

    document
      .querySelector(".hamburger-menu")
      .classList.toggle("hamburger-rotate");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const loading = useState(true);
  const [spinner, setSpinner] = useState(false);
  const handleSpinner = () => {
    setSpinner(!spinner);
    document.querySelector(".spinner").classList.toggle("spinnerToggle");
  };
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div>
      <div className="search-and-notification">
        <div className="hamburger-menu" onClick={handleSideBar}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
        <div className="search">
          <img src={SearchIcon} alt="Logo" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="notification-profile">
          <div className="notification" onClick={handleSpinner}>
            <img src={Notification} alt="Notification" />
            <div className="number">
              <span>9</span>
            </div>

            <div className="spinner">
              <div className="arrow_box">
                <div className="sweet-loading">
                  <BarLoader loading={loading} css={override} size={150} />
                </div>
              </div>
            </div>
          </div>
          <div className="profile">
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <img src={Avatar} alt="Avatar" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
