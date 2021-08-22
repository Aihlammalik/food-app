import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image1 from '../../../CommonComponent/Assets/burger1.png'
import Text from './SignupText'
import './signup.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
   
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
<img className="animationImage" width="100%" src={ image1 } />

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>

              <h1 style={{backgroundColor:"black", color:"whitesmoke", paddingTop:"60px", paddingBottom:"40px" , borderRadius:"30px"}}>SignUp</h1>
          <Text />
          
          </Paper>
        </Grid>
     
      </Grid>
    </div>
  );
}
