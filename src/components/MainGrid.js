import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from "./GlobalData"
import CountryData from "./CountryData"
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

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper elevation ={0}style={{color:'#2c5f2dff',backgroundColor:"#ffe77aff"}} variant ="outlined" className={classes.paper}>
         <GlobalData />
              </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation ={0}  variant ="outlined"className={classes.paper}style={{color:'#2c5f2dff',backgroundColor:"#ffe77aff"}}>
              <CountryData />
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}