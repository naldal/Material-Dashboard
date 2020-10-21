import React, {useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import DefaultData from './DefaultData.json';
import axios from 'axios';
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyle = makeStyles((theme) => ({
    root: {
        margin: "8px"
    },
    gridContainer: {
        marginTop: "15px"
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
    }
}))



const Default = () => {
    const classes = useStyle();
    const defaultData = DefaultData;

    const getSaleData = defaultData.map((data) => (
        <Grid item md={3} sm={6} xs={12}>
            <Card className={classes.root} elevation={1}>
                <CardContent>
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
            <Grid container spacing={4} className={classes.gridContainer}>
                {getSaleData}
            </Grid>
        </div>
    );
};

export default React.memo(Default);