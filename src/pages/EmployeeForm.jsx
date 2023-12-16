import React from "react";
import "./EmployeeForm.css";
import { Grid, TextField, Button, Typography } from "@mui/material";


const EmployeeForm = () => {
  
  return (
    <>
      <div className="outer">
        <Grid item xs={12} className="header">
          <Typography variant="h4">New Employee Form</Typography>
        </Grid>
        <Grid item xs={12} className="header1">
          <Typography variant="caption">Please enter your details below</Typography>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <TextField variant="outlined" label="Name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField variant="outlined" label="Designation" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField variant="outlined" label="Location" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField variant="outlined" label="Salary" fullWidth />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button id="ctaprimary" variant="contained">Submit</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default EmployeeForm;
