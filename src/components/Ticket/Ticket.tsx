import React from "react";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {IoMdTrain} from "react-icons/all";
import './Ticket.style.css'


interface TicketProps {
    stationArrival: string,
    stationDestination: string,
    ticketPrice?: '20 €',

}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 500,
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
    }));

const Ticket = ({stationArrival, stationDestination, ticketPrice,}: TicketProps) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>

                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>

                            <Grid item xs>
                                <Grid item>
                                    <IoMdTrain id={'icon-train'}/>
                                </Grid>
                                <Typography>
                                    <>
                                        <p><span className={'position-gare'}>Gare de départ</span>
                                            <p>{stationDestination}</p>
                                        </p>
                                    </>
                                </Typography>
                            </Grid>

                            <Grid item xs>
                                <Grid item>
                                    <IoMdTrain id={'icon-train'}/>
                                </Grid>
                                <Typography gutterBottom>
                                    <>
                                        <p><span className={'position-gare'}>Gare d'arrivée</span>
                                            <p>{stationArrival}</p>
                                        </p>
                                    </>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <div className={'divPrice'}>
                                        <p className={'position-price'}> {ticketPrice}</p>
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Paper>
        </div>
    );


};
export default Ticket;

