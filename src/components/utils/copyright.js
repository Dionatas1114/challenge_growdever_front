import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { version } from '../../../package.json';

const Copyright = () => {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Aretusa Systems
      </Link>{' '}
      {new Date().getFullYear()}
      {' - '}
      {`v${version}`}
    </Typography>
  );
};

export default Copyright;
