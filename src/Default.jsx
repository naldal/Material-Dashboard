import React from 'react';
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import {ThemeProvider} from "@material-ui/styles";

const useStyle = makeStyles((theme) => ({
    root: {
        margin: "8px"
    },
    gridContainer: {
        marginTop: "15px"
    },
}))

const chipTheming = createMuiTheme({
    overrides: {
        MuiChip: {
            sizeSmall: {
                width: "50px"
            },
            labelSmall: {
                fontSize: "0.5rem"
            }
        }
    }
})

const Default = () => {
    const classes = useStyle();

    return (
        <div>
            <Grid container spacing={4} className={classes.gridContainer}>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} elevation={1}>
                        <CardContent>
                            <Grid container justify="space-between" alignItems="center">
                                <Grid>
                                    <Typography variant="body1">
                                        Sales Today
                                    </Typography>

                                </Grid>
                                <Grid>
                                    <ThemeProvider theme={chipTheming}>
                                        <Chip label="Today" size="small"/>
                                    </ThemeProvider>
                                </Grid>
                            </Grid>
                            {/* grid container end */}
                            <div>
                                2.532
                            </div>
                            <Grid container>
                                <Grid>
                                    + 26 %
                                </Grid>
                                <Grid>

                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} elevation={1}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} elevation={1}>
                        <CardContent>
                            this is one
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                    <Card className={classes.root} elevation={1}>
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