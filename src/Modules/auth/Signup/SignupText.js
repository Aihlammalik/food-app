import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PeopleIcon from '@material-ui/icons/People';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';
import LocationCityTwoToneIcon from '@material-ui/icons/LocationCityTwoTone';
import {Button } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Enter Email</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <br/>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
   <br/>

<FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Phone Number</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PhoneAndroidIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <br/>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">UserName</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PeopleIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <br/>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">Country</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <PublicTwoToneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <br/>

      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">City</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationCityTwoToneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    
  <br />
  <Button variant="contained" color="secondary" style={{backgroundColor:"black" , borderRadius:"40px"  , marginTop:"50px",marginBottom:"30px"}}>
  SignUp
</Button>
   
    </div>
  );
}
