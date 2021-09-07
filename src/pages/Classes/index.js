import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import Carousel from './carousel';
import EnhancedTable from './table';
import Copyright from '../../components/utils/copyright';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    paddingTop: '40px',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    maxHeight: 240,
    height: '100%',
  },
}));

export default function Settings() {
  const classes = useStyles();
  return (
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Classes */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <EnhancedTable />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
  );
}
