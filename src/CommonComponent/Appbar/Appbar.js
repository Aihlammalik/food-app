import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Avatar from '../Avatar/Avatar';
import Avatar2 from '../Avatar/Avatar2';
import Image from '../Assets/background.png'
import {Link} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  appbar:{
    backgroundColor:"black",
    color:"white",
    borderBottomLeftRadius:"600px",
    borderEndEndRadius:"600px",
    backgroundImage:`url(${Image})`
  },
button1:{
  marginLeft:"40px"
},
button2:{
  marginLeft:"8px"
},
button3:{
  marginLeft:"8px"
},
button4:{
  marginLeft:"8px"
},
  root: {
    flexGrow: 1,
 

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft:"80px",
    fontWeight:1000
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appbar}>
        <Toolbar>
        
          <Typography variant="h5" className={classes.title}>
 
      <Avatar2/>
          </Typography>
         
          
          
        <Avatar/>
     <Link to="/home">    <Button color="inherit">User</Button> </Link> 
        </Toolbar>
        <Toolbar>
        <Link to="/">     <Button color="inherit" className={classes.button1}>Home</Button></Link> 
        <Link to="/login">    <Button color="inherit" className={classes.button2}>Login</Button></Link> 

        <Link to="/signup">  <Button color="inherit" className={classes.button3}>SignUp</Button></Link>  
        <Button color="inherit" className={classes.button4}>Contact Us</Button>

        </Toolbar>
        
      </AppBar>
    </div>
  );
}
