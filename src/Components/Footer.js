import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
  return (
    <Grid 
      style={{
        backgroundColor: "#24252A",
        color: "white",
        padding: "30px",
      }}
      container
    >
      <Grid xs={6} item>
        <Typography variant="h5" style={{ fontWeight: "bolder" }}>
          Shoe Store
        </Typography>
        <Typography>
          Pakistan's top online shoe store
        </Typography>
        <AddIcCallIcon/>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          +923447924445
        </span>
        <br></br>
        <EmailIcon/>
        <span style={{ fontSize: "1.5rem", paddingLeft: ".5rem" }}>
          majaved63@gmail.com
        </span>
        <br></br>
        <br></br>
         <a href="https://www.facebook.com/atif.javed.902">
         <FacebookIcon/>
        </a>
        <TwitterIcon/>
        <LinkedInIcon/>
        </Grid>
        <Grid xs={6} item>
        <Typography variant="h5">Quick Links</Typography>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <Typography>Home</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="product">
          <Typography>Products</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="about">
          <Typography>About</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="contact">
          <Typography>Contact</Typography>
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="Signin">
          <Typography>Signin / Signup</Typography>
        </Link>
      </Grid>
      </Grid>
  );
};

export default Footer;
