import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@material-ui/core';
import { Autorenew, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useSnackbar } from 'notistack';

import Copyright from '../../components/utils/copyright';

import api from '../../services/api';
import * as userActions from '../../store/auth/actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.light,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
  },
}));

export default function ChangePassw() {
  const classes = useStyles();
  const {enqueueSnackbar} = useSnackbar();
  const timer = useRef();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: '',
    oldPassword: '',
    password: '',
    showOldPassword: false,
    showPassword: false,
  });
  
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeBoolean = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  function logout() {
    dispatch(userActions.logout());
  } 

  const userData = useSelector((state) => state?.auth);

  async function handleChangePassw(e) {
    e.preventDefault();
    try {
      if (!submitLoading) {
        setSubmitLoading(true);
        timer.current = window.setTimeout(() => {
          setSubmitLoading(false);
        }, 2000);
      }

      const { uid, name, type } = userData.user;
      const { email, oldPassword, password } = values;

      const res = await api
        .put(
          `/users/${uid}`,
          {
            name,
            email,
            type,
            oldPassword,
            password,
          },
          {
            headers: { Authorization: `Bearer ${userData.token}`},
          }
        );

        enqueueSnackbar(res.data.message, {variant: 'success'});
      logout();
    } catch (error) {
      enqueueSnackbar('Por favor, confira os dados inseridos e tente novamente.', {variant: 'warning'});
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Autorenew />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <form className={classes.form} onSubmit={handleChangePassw}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            id="email"
            value={values.email}
            onChange={handleChange('email')}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Old Password"
            type={values.showOldPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleChangeBoolean('showOldPassword')}
                  >
                    {values.showOldPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="oldPassword"
            value={values.oldPassword}
            onChange={handleChange('oldPassword')}
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type={values.showPassword ? 'text' : 'password'}
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
              ),
            }}
            id="password"
            value={values.password}
            onChange={handleChange('password')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change
            {submitLoading && 
                <CircularProgress size={24} className={classes.circularProgress} />}
          </Button>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link to="/">
              Back to Dashboard
            </Link>
          </Grid>
        </form>
      </div>
      <Box mt={6}>
        <Copyright />
      </Box>
    </Container>
  );
}
