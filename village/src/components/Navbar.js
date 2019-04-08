import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

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
          <Link style={linkStyle} to="/">
            Smurfs
          </Link>
        </Typography>
        <Button style={btnStyle}>
          <Link style={linkStyle} to="/smurf-form">
            Add Smurf
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
