import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LoginText from './loginText'
import Image from '../../../CommonComponent/Assets/pizza1.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
   
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <h1 style={{backgroundColor:"black", color:"whitesmoke", paddingTop:"60px", paddingBottom:"40px" , borderRadius:"30px"}}>Login</h1>

            <LoginText />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <h1>Welcome Back!</h1>
<img width="500px" height="450px" src={Image} />
          </Paper>
        </Grid>
     
      </Grid>
    </div>
  );
}
