import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import DefaultData from './DefaultData.json';
import {CardHeader, Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Line } from 'react-chartjs-2';

const doubleLineState = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0 , 300 ,0);
    gradient.addColorStop(0, '#20f08b');
    gradient.addColorStop(0.5, '#20f08b');
    gradient.addColorStop(1, '#07dfb1');

    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                fill: true,

                lineTension: 0.5,
                gradientFill: 'rgb(10,12,122)',
                backgroundColor: gradient,
                pointBackgroundColor: '#ffffff',
                borderColor: 'rgb(116, 185, 255)',
                borderWidth: 2.5,
                data: [2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3428, 2917, 3327],
            },
            {
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(0, 0, 0, 0.2)',
                borderCapStyle: 'dotted',
                borderWidth: 2.5,
                pointBackgroundColor: '#ffffff',
                borderDash: [3, 3],
                data: [985, 724, 629, 883, 900, 1214, 1476, 1212, 1554, 2128, 1446, 1827],
            }
        ],
    }
}

const canvas = document.createElement('canvas');
const doubleLinearData = doubleLineState(canvas);

const doubleLineOptions = {
    title: {
        display: false
    },
    legend: {
        display: false
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines:{
                lineWidth: 0.5
            }
        }]
    }
}

const useStyle = makeStyles((theme) => ({
    root: {
        margin: "8px",
    },
    gridContainer: {
        marginTop: "15px",
    },
    typoInCard: {
        fontWeight: "600",
        fontSize: "1.5rem",
        marginTop: "10px",
        marginBottom: "10px"
    },
    typoSpanInCard: {
        fontSize: "1rem",
        lineHeight: "1.75"
    },
    spanInCard: {
        fontWeight: "600",
        color: theme.palette.success.main
    },
    spanInCardDanger: {
        fontWeight: "600",
        color: theme.palette.error.main
    },
    chartCard: {
        margin: "0.5rem",

    }
}))



const Default = () => {
    const classes = useStyle();
    const defaultData = DefaultData;

    const getSaleData = defaultData.map((data) => (
        <Grid item md={3} sm={6} xs={12}>
            <Card className={classes.root} elevation={0}>
                <CardContent style={{paddingBottom: "14px"}}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid>
                            <Typography variant="body1">
                                {`${data.title}`}
                            </Typography>

                        </Grid>
                        <Grid>
                            <Chip label={`${data.chip}`} size="small"/>
                        </Grid>
                    </Grid>

                    <Typography className={classes.typoInCard}>
                        {`${data.content}`}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.typoSpanInCard}>
                        {`${data.id}` % 2 != 0 ? <span className={classes.spanInCard}>
                                {`${data.percent}`}&nbsp;&nbsp;
                            </span>
                        :
                            <span className={classes.spanInCardDanger}>
                                {`${data.percent}`}&nbsp;&nbsp;
                            </span>
                        }
                        {`${data.since}`}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        )
    );

    return (
        <div>
            <Grid container spacing={0} className={classes.gridContainer}>
                {getSaleData}
            </Grid>
            <Grid container spacing={0}>
                <Grid item lg={8} xs={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Total revenue" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>
                            <div>
                                <Line data={doubleLinearData} options={doubleLineOptions}/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Weekly sales" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={0}>
                <Grid item lg={4} xs={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Mobile / Desktop" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={8} xs={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Latest projects" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div>

            </div>
        </div>
    );
};

export default React.memo(Default);