import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
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
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@material-ui/core';
import { LockOpen, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useSnackbar } from 'notistack';

import Copyright from '../../components/utils/copyright';

import * as userActions from '../../store/auth/actions';
import api from '../../services/api';

// import { isEmpty, isValidEmail } from '../../utils/validatons';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
  },
  // padding: theme.spacing(6)   *Se houver footer,
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const timer = useRef();
  const {enqueueSnackbar} = useSnackbar();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    try {
      if (!loading) {
        setLoading(true);
        timer.current = window.setTimeout(() => {
          setLoading(false);
        }, 2000);
      }

      const response = await api.post('/login', {
        email,
        password,
      });

      if (response.data.token) {
        dispatch(userActions.login(response.data));
      }

      enqueueSnackbar(response.data.message, {variant: 'success'});
    } catch (error) {
      enqueueSnackbar('Por favor, confira os dados inseridos e tente novamente.', {variant: 'warning'});
    }
  }

  // console.log('isEmpty:', isEmpty('abcd')); // isEmpty: string is not empty and does not contain spaces
  // console.log('isValidEmail:', isValidEmail('abc@11gmail.com')); // isValidEmail: email is valid
  // console.log('isValidEmail:', isValidEmail('ab@c@11gmail.com')); // isValidEmail: email is invalid

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            id="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((e) => !e)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={password}
            required
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"  // TODO 
          />
            <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.wrapper}
            onClick={() => handleSubmit()}
            >
              Sign In
              {loading && 
                <CircularProgress size={24} className={classes.circularProgress} />}
            </Button>
          <div className={classes.form}>
            <Grid container>
            <Grid item xs>
              <Link to="/change-passw">
                Change your password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-up">
                Sign Up
              </Link>
            </Grid>
          </Grid>
          </div>   
        </form>
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
}
