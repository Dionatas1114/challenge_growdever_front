import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
} from '@material-ui/core';
import { Autorenew, Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from '../../components/utils/copyright';
// import SimpleBackdrop from '../../components/backdrop';
// import Snacks from '../../components/snacks';

import api from '../../services/api';
// import * as userActions from '../../store/auth/actions';

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
}));

export default function ChangePassw() {
  const classes = useStyles();
  // const history = useHistory();

  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  // const [users, setUsers] = useState([]);

  // function handleSuccessChangePasswMessage() {
  //   alert('ok!');
  // }

  const userData = useSelector((state) => state?.auth);

  // const dispatch = useDispatch();

  // const toSignIn = () => history.push('/sign-in');

  async function handleChangePassw(e) {
    // if (fullNamevalid) {
    e.preventDefault();
    try {
      const userUid = userData.user.uid;
      console.log(`${userUid}, uid`);
      await api
        .put(
          `/users/${userUid}`,
          {
            email,
            oldPassword,
            password,
          }
          // {
          //   headers: { Authorization: `Bearer ${userData.token}` },
          // }
        )
        .then((res) => {
          return console.log(res.data);
        });
      // .catch((error) => alert(error.res?.data?.message));
    } catch (userUid) {
      console.log(`${userUid}, uid`);
    }
    setEmail('');
    setOldPassword('');
    setPassword('');
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
        <form className={classes.form} onSubmit={handleChangePassw} noValidate>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Old Password"
            type={showPassword1 ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword1((e) => !e)}
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            // autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="New Password"
            type={showPassword2 ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword2((e) => !e)}
                  >
                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Change
          </Button>
          {/* <SimpleBackdrop />
          <Snacks /> */}
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
