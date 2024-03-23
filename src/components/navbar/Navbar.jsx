import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const Navbar = () => {
  const { user, logOut } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    handleClose();
    logOut();
  };
  return (
    <div className="navWrapper">
      <div className="navbar">
        <Link to={"/"}>Home</Link>
        <Link to={"/tour"}>Tours</Link>
        <Link to={"/visa"}>Visa</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/booking"}>Bookings</Link>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/register">
            <MenuItem onClick={handleClose}>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem onClick={handleClose}>Sign In</MenuItem>
          </Link>
          <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
        </Menu>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="{}"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMenu}
        >
          {user ? (
            <Tooltip title={user.email}>
              <Avatar alt={user} src={user.photoUrl} />
            </Tooltip>
          ) : (
            <AccountCircle />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default Navbar;
