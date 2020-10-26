import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import DefaultData from './DefaultData.json';
import {CardHeader, Grid, Paper, TableCell} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Line, Doughnut, Pie, Bar} from 'react-chartjs-2';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";


const doubleLineState = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 200, 0 ,0);
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(1, 'rgba(200, 214, 229,0.1)');

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

const doughnutState = (canvas) => {
    const ctx = canvas.getContext('2d');

    return {
        labels: ['Social', 'Search Engines', 'Direct', 'Other'],
        datasets: [
            {
                data: [260, 125, 54, 146],
                fill: true,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    '#dddddd'
                ],
                borderWidth: 3,
            }
        ],
    }
}

const compareBarState = (canvas) => {
    return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: [54,67,41,55,62,45,55,73,60,76,48,79],
                label: 'mobile',
                fill: true,
                backgroundColor: 'rgb(116, 185, 255)',
                barThickness: 5

            },
            {
                data: [69,66,24,48,52,51,44,53,62,79,51,68],
                label: 'desktop',
                barThickness: 5
            }
        ]
    }
}

const createData = (subject, revenue, value) => {
    return {subject, revenue, value}
}
const createProjectsData = (project, start, end, state, assign) => {
    return {project, start, end, state, assign}
}

const tableRows = [
    createData('Social', 260, "+35%"),
    createData('Search Engines', 125, "-12%"),
    createData('Direct', 54, "+46%"),
    createData('Other', 146, "+35%")
]
const projectRows = [
    createProjectsData('Project Aurora', '01/01/2020', '31/06/2020', 'Done', 'James Dalton'),
    createProjectsData('Project Eagle', '01/01/2020', '31/06/2020', 'In Progress', 'Tracy Mack'),
    createProjectsData('Project Fireball', '01/01/2020', '31/06/2020', 'Done', 'Sallie Love'),
    createProjectsData('Project Omega', '01/01/2020', '31/06/2020', 'Cancelled', 'Glenda Jang'),
    createProjectsData('Project Yoda', '01/01/2020', '31/06/2020', 'Done', 'Raymond Ennis'),
    createProjectsData('Project Zulu', '01/01/2020', '31/06/2020', 'Done', 'Matthew Winters'),
]

const canvas = document.createElement('canvas');
const doubleLinearData = doubleLineState(canvas);
const doughnutData = doughnutState(canvas)
const compareBarData = compareBarState(canvas);

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
                display: false,
            }
        }],
        yAxes: [{
            gridLines:{
                lineWidth: 0.5
            }
        }]
    }
}

const doughnutOptions = {
    title: {
        display: false
    },
    responsive: true,
    legend: {
        display: false
    },
    cutoutPercentage: 85
}

const compareBarOptions = {
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
            gridLines: {
                display: false
            },
            ticks: {
                beginAtZero: false,
                max: 79,
                min: 20,
                stepSize: 20
            }
        }]
    }
}



const useStyle = makeStyles((theme) => ({
    holdBottom: {
        marginBottom: "25px"
    },
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
    },
    centerDoughnutText: {
        position: "absolute",
        padding: "inherit",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
    },
    table: {
        // minWidth: 650
        marginTop: "10px",
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
        <div className={classes.holdBottom}>
            <Grid container spacing={0} className={classes.gridContainer}>
                {getSaleData}
            </Grid>
            <Grid container spacing={0}>
                <Grid item lg={8} md={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Total revenue" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>
                            <div>
                                <Line data={doubleLinearData} options={doubleLineOptions} height={110}/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={4} md={12}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Weekly sales" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent>
                            <div style={{position:"relative"}}>
                                <Doughnut data={doughnutData} options={doughnutOptions} height={102}/>
                                <div className={classes.centerDoughnutText}>
                                    <Typography variant={"h6"}>+27%</Typography>
                                    <Typography variant={"caption"}>more sales</Typography>
                                </div>
                            </div>
                            <TableContainer component={Paper} elevation={0} className={classes.table}>
                                <Table size={"small"}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell style={{padding:"8px", fontWeight:"600"}}>Source</TableCell>
                                            <TableCell align={"right"} style={{padding:"8px", fontWeight:"600"}}>Revenue</TableCell>
                                            <TableCell align={"right"} style={{padding:"8px", fontWeight:"600"}}>Value</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {tableRows.map((row)=>(
                                            <TableRow key={row.subject}>
                                                <TableCell component="th" scope="row" style={{padding:"8px"}}>
                                                    {row.subject}
                                                </TableCell>
                                                <TableCell align={"right"} style={{padding:"8px"}}>{row.revenue}</TableCell>
                                                {
                                                    `${row.value}`.charAt(0) === '+' ? <TableCell align={"right"} style={{padding:"8px", color: "green"}}>{row.value}</TableCell> :
                                                        <TableCell align={"right"} style={{padding:"8px",color: "red"}}>{row.value}</TableCell>
                                                }

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

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
                            <div>
                                <Bar data={compareBarData} options={compareBarOptions} height={200}/>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={8} xs={12} style={{height:"200px"}}>
                    <Card className={classes.chartCard} elevation={0}>
                        <CardHeader title="Latest projects" action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }/>
                        <CardContent >
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Start Date</TableCell>
                                            <TableCell>End Date</TableCell>
                                            <TableCell>State</TableCell>
                                            <TableCell>Assignee</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {projectRows.map((row)=> (
                                            <TableRow key={row.project}>
                                                <TableCell component="th" scope="row">
                                                    {row.project}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.start}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.end}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.state}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row.assign}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
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