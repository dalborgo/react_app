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
        backgroundColor: 'red'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        height: '100%',
        color: theme.palette.text.primary,
        backgroundColor: 'cyan',
        textAlign: 'center'
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
                        alignItems={'baseline'}
                        direction={'row'}
                        justify={'center'}
                    >
                        {[0, 1, 2].map(value => (
                            <Grid key={value} item xs={12} sm={4} style={{backgroundColor:'red'}}>
                                <Paper
                                    className={classes.paper}
                                    style={{ paddingTop: (value + 1) * 100, height: (value + 1) * 100  }}
                                >
                                    <Typography variant="title"> {`CELL ${value + 1}`} </Typography>
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
