import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image from '../../CommonComponent/Assets/map.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor:"black",
        color:"white"
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>


                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <h2>Top Cities</h2>
                        <ul>
                        <li>Lahore</li>
                            <li> Rawalpindi</li>
                            <li>Islamabad </li>
                            <li> Gujranwala</li>
                            <li> Karachi</li>
                            <li> Hyderabad</li>
                            <li> Faisalabad</li>
                         
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>

                    <ul>
                    <li> Peshawar </li>
                            <li>Sialkot</li>
                            <li> Quetta</li>
                            <li> Multan</li>
                            <li> Sargodha</li>
                        </ul>

                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
<h2>Partner</h2>

                    <ul>
                            <li>Arshad</li>
                            <li> Ali</li>
                            <li>Aihlam </li>
                            <li> Naveed</li>
                            <li> Sami</li>
                            <li> Hyderabad</li>
                            <li> Faisalabad</li>
                         
                        </ul>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Paper className={classes.paper}>
                        <img src={image} width="300px" />
                             <ul>
                       <li>+9221-99886688</li>
                       <li>Email:dummy#@gmail.com</li>
                   

                            
                         
                        </ul></Paper>
                </Grid>
            </Grid>
        </div>
    );
}
