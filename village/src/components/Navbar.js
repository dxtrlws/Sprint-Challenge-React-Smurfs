import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const linkStyle = {
  color: "white",
  textDecoration: "none"
};
const btnStyle = {
  marginLeft: "20px"
};

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" color="inherit">
          <NavLink style={linkStyle} to="/">
            Smurfs
          </NavLink>
        </Typography>
        <Button style={btnStyle}>
          <NavLink style={linkStyle} to="/smurf-form">
            Add Smurf
          </NavLink>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
