import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            height: theme.spacing(16),
            //      backgroundColor:"gray",
        },
    },
}));
const TypouseStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});


export default function GlobalData() {
    const [getdata, setdat] = useState();
    useEffect(() => {
        async function fetchglobaldata() {
            const apidata = await fetch('https://disease.sh/v3/covid-19/all')
            const getdataJson = apidata.json();
            console.log("api", getdataJson)
            setdat(getdataJson);
        }
fetchglobaldata();
    }
    )
    const classes = useStyles();
    const Typo = TypouseStyles();
    return (
        <div className={classes.root}>

            <Paper elevation={3} style={{ backgroundColor: '#f3fab6', color: "black", fontWeight: "bold" }}>
                <div className={Typo.root}>
                    <Typography variant="h4" gutterBottom>
                    {getdata & getdata.activePerOneMillion}
                        </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Global Dta of Today's
      </Typography>
                </div>
            </Paper >

            <Paper elevation={3} style={{ backgroundColor: '#f3fab6', color: "orange", fontWeight: "bold" }}>
                <div className={Typo.root}>
                    <Typography variant="h4" gutterBottom>
                        1000
      </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Active
      </Typography>
                </div>
            </Paper >

            <Paper elevation={3} style={{ fontWeight: "bold", backgroundColor: '#f3fab6', color: "green" }}>
                <div className={Typo.root}>
                    <Typography variant="h4" gutterBottom>
                        1000
      </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Recieved
      </Typography>
                </div>
            </Paper >

            <Paper elevation={3} style={{ backgroundColor: '#f3fab6', fontWeight: "bold", color: "red" }}>
                <div className={Typo.root}>
                    <Typography variant="h4" gutterBottom>
                        1000
      </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Facilitates
      </Typography></div>
            </Paper >
 
        </div>
    );
}
