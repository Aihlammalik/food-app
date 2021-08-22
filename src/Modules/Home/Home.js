import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Animation from './animationText';
import Avatar from './avatar'
import { Button } from '@material-ui/core';
import Slider from "./slider";
import MainCard from './mainCard'
import MobileImage from '../../CommonComponent/Assets/mobile.png'
import ImagePlay from '../../CommonComponent/Assets/play.png'
import Footer from '../../CommonComponent/Footer/Footer'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Animation:{
      paddingTop:"150px",
paddingLeft:"10px",
textAlign: 'center',
padding: theme.spacing(4),

color: theme.palette.text.secondary,

textDecoration:"none"

  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
  footer:{
    backgroundColor:"black"
  }

}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
      <>
    <div className={classes.root} >
      <Grid container spacing={0}>
        
        <Grid item xs={5}>
     
        <Avatar className={classes.paper} />


        </Grid>
        <Grid item xs={5}>
        
<Paper className={classes.Animation}> 
 <Animation />


 </Paper>
 <h1>
    Order from our best restaurants
</h1>
<Button variant="contained" style={{backgroundColor:"black" }} color="primary" href="#contained-buttons">
        Order now
      </Button>
        </Grid>
       

        <Grid item xs={2}>
       
        
                </Grid>
      </Grid>
    </div>


    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Slider />
        </Grid>
       
      </Grid>
    </div>
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
<MainCard />




        </Grid>
       
      </Grid>
    </div>

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>


<img src={MobileImage} />


        </Grid>
       

        <Grid item xs={5}>

<h3 style={{paddingTop:"500px"}}>Get our mobile app and get 20% discount on each deal</h3>
<h3>Amazing deals are waiting for you</h3>
<p>Download now on <b>Play store</b> and <b>App store</b></p>

</Grid>

      </Grid>
      
    </div>
    <div className={classes.footer}>
      <Grid container spacing={0}>
        <Grid item xs={12}>


        <Footer  />

        </Grid>
       

      

      </Grid>
      
    </div>
  
    </>
  );
}
