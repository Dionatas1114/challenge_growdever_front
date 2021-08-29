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

import api from '../../services/api';
import * as userActions from '../../store/auth/actions';
// isEmpty,
// import { isValidEmail } from '../../utils/validations/validators';
// import { TextMaskCustom } from '../../utils/masks/masks';

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
    backgroundColor: theme.palette.primary.light,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeBoolean = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (!submitLoading) {
        setSubmitLoading(true);
        timer.current = window.setTimeout(() => {
          setSubmitLoading(false);
        }, 2000);
      }

      const { email, password } = values;

      const response = await api.post('/login', 
        { email, password }
      );

      if (response.data.token) {
        dispatch(userActions.login(response.data));
      }

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
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            // error={valid}
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
                    onClick={handleChangeBoolean('showPassword')}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            autoComplete="current-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            required
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"  // TODO 
          />
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.wrapper}
            >
              Sign In
              {submitLoading && 
                <CircularProgress size={24} className={classes.circularProgress} />}
            </Button>
          <div className={classes.form}>
            <Grid container>
            <Grid item xs>
              <Link to="/forgot">
                Forgot password?
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
