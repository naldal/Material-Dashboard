import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyle = makeStyles({
    gridContainer: {
        marginTop: "15px"
    }
})

const Default = (props) => {
    const classes = useStyle();

    return (
        <div>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} raised={false}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} raised={false}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} raised={false}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} raised={false}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Default;