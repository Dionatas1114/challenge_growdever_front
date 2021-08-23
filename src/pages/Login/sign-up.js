import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
  CircularProgress
} from '@material-ui/core';

import { PersonAdd, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useSnackbar } from 'notistack';

import Copyright from '../../components/utils/copyright';

import api from '../../services/api';
  // const userData = useSelector((state) => state.auth);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  formControl: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  circularProgress: {
    color: green[500],
    position: 'absolute',
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const history = useHistory();
  const timer = useRef();
  const {enqueueSnackbar} = useSnackbar();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    type: 0,
    users: [],
    showPassword: false,
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChangeBoolean = (prop) => () => {
    setValues({ ...values, [prop]: !values[prop] });
  };

  const toSignIn = () => history.push('/sign-in');

  async function handleCreateNewUser(e) {
    e.preventDefault();
    try {
      if (!submitLoading) {
        setSubmitLoading(true);
        timer.current = window.setTimeout(() => {
          setSubmitLoading(false);
        }, 2000);
      }

      const { email, name, type, password } = values;
      const user = { email, name, type, password };

      await api
        .post('/users', 
          user
        )
        .then((res) => {
          return setValues(
            [...values.users, res.data.user],
            enqueueSnackbar(res.data.message, {variant: 'success'}),
            toSignIn()
          );
        })
        .catch((error) =>
          enqueueSnackbar(error.response.data.message, {variant: 'warning'})
        );
    } catch (error) {
      throw e;
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAdd />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleCreateNewUser}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                id="fullName"
                label="Full Name"
                variant="outlined"
                required
                fullWidth
                multiline
                maxRows={2}
                autoFocus
                autoComplete="fname"
                value={values.name}
                onChange={handleChange('name')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
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
                type={values.showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={values.password}
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={5}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  User Type*
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  value={values.type}
                  onChange={handleChange('type')}
                  label="User Type"
                  required
                >
                  <MenuItem value={0}>Growdever</MenuItem>
                  <MenuItem value={1}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
            {submitLoading && 
              <CircularProgress size={24} className={classes.circularProgress} />}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-in" variant="body2">
                Sign in
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
