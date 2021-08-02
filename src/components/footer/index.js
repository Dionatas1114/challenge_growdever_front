import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Typography,
  Link,
  CssBaseline,
  makeStyles,
  // Button,
} from '@material-ui/core';
// TODO refatorar com webpack para substituir ../../../ por @app
import { version } from '../../../package.json';

// import * as a from '../../store/footer/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    zIndex: -1,
  },
  footer: {
    padding: theme.spacing(1.5, 2),
    marginTop: 'auto',
    // backgroundColor: 'blue',
    // background: 'https://imgur.com/pqdICWJ',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[300]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();
  // const numero = useSelector((state) => state.footer);
  // const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="textSecondary" align="center">
            {'© '}
            <Link color="inherit" href="https://www.growdev.com.br/">
              Growdev
            </Link>{' '}
            {new Date().getFullYear()}
            {` | Software v${version}.`}
            {/* Contador: {numero}
            <Button onClick={() => dispatch(a.incrementarContador())}>+</Button>
            <Button onClick={() => dispatch(a.decrementarContador())}>-</Button> */}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
