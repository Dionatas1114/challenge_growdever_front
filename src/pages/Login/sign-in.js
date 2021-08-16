import React, { useState } from 'react';
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
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOpen, Visibility, VisibilityOff } from '@material-ui/icons';

import Copyright from '../../components/utils/copyright';

// import { isEmpty, isValidEmail } from '../../utils/validatons';

import api from '../../services/api';
import * as userActions from '../../store/auth/actions';

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1.5, 0, 2),
  },
  // Se houver footer,
  // padding: theme.spacing(6)
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  async function handleSubmit() {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      if (response.data.token) {
        dispatch(userActions.login(response.data));
      }
    } catch (error) {
      console.log(error);
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
            // label="Email Address"
            name="email"
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
            name="password" // TODO Visibility     VisibilityOff
            // label="Password"
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
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleSubmit()}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/change-passw" variant="body2">
                Change your password?
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
