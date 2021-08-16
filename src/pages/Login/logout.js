import React from 'react';
// import { makeStyles } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as userActions from '../../store/auth/actions';

// import Header from '../../components/header';
// import { Container } from './styles';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     zIndex: -1,
//   },
//   footer: {
//     padding: theme.spacing(1.5, 2),
//     marginTop: 'auto',
//     // backgroundColor: 'blue',
//     backgroundImage: 'url(https://imgur.com/pqdICWJ)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'dark'
//         ? theme.palette.grey[300]
//         : theme.palette.grey[500],
//   },
// }));

export default function Home() {
  // const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div
    // className={classes.footer}
    >
      {/* <Header /> */}
      <form>
        <h3>Sair</h3>
        <button type="button" onClick={() => dispatch(userActions.logout())}>
          Logout
        </button>
      </form>
    </div>
  );
}
