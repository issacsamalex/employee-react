import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css"
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" class="navbar">
          <Toolbar>
            <Typography id="heading" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
            </Typography>
            <Button id="btn" variant="text"><Link to={'/home'} id="btnlink">Home</Link></Button>
            <Button id="primarybtn" variant="contained"><Link to={'/form'} id="primarybtnlink">Employee Form</Link></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
