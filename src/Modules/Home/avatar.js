import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import image from '../../CommonComponent/Assets/avatar3.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
 
  large: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   
      <Avatar alt="Remy Sharp" src={image} className={classes.large} />
    </div>
  );
}
