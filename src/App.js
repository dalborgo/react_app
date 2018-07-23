import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
//import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
//import Types from "./Types";



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        height:'100vh',
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '50%',
        color: theme.palette.text.primary,
    }
});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root}>
                <Grid item xs={12}>
                    <Grid
                        container
                        className={classes.demo}
                        spacing={16}
                        alignItems={'center'}
                        direction={'row'}
                        justify={'center'}
                        style={{backgroundColor:'red'}}
                    >
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item>
                                <Paper
                                    className={classes.paper}
                                >
                                    {`Cell ${value + 1}`}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(App);
