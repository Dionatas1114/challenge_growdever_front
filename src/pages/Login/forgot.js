import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { VpnKey } from '@material-ui/icons';

import Copyright from '../../components/utils/copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.action.active,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  generated: {
    margin: theme.spacing(0, 0, 3),
  },
  copy: {
    margin: theme.spacing(1.5, 0, 3),
  },
  submit: {
    margin: theme.spacing(0, 0, 3),
  },
}));

const pass = '123';

export default function SignIn() {
  const classes = useStyles();
  const click = () => {
    console.log('click');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKey />
        </Avatar>
        <Typography component="h1" variant="h6">
          Forgot your password?
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Grid container>
            <Grid item xs className={classes.generated}>
              {/* WatchLater icon */}
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label={pass}
                type="password"
                id="password"
                disabled
              />
            </Grid>
            <Grid item className={classes.copy}>
              <Button
                variant="contained"
                color="primary"
                onClick={click}
              >
                Copy
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={click}
          >
            Generate Temporary Password
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/sign-in" variant="body2">
                Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up" variant="body2">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
}
