import React, { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
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
  CircularProgress
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import { VpnKey } from '@material-ui/icons';
import { green } from '@material-ui/core/colors';
import { useSnackbar } from 'notistack';

import api from '../../services/api';

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
    marginTop: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const timer = useRef();
  const {enqueueSnackbar} = useSnackbar();

  const [email, setEmail] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!submitLoading) {
        setSubmitLoading(true);
        timer.current = window.setTimeout(() => {
          setSubmitLoading(false);
        }, 2000);
      }

      const response = await api.post('/forgot-email', 
        { email }
      );
      enqueueSnackbar(response.data.message, {variant: 'success'});
    } catch (error) {
      enqueueSnackbar('Por favor, confira os dados inseridos e tente novamente.', {variant: 'warning'});
    }
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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send Temporary Password
            {submitLoading && 
              <CircularProgress size={24} className={classes.circularProgress} />}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/sign-in">
                Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">
                Sign Up 
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
