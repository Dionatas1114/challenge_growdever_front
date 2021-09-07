import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClassIcon from '@material-ui/icons/Class';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import SettingsIcon from '@material-ui/icons/Settings';

import CustomTooltip from '../../components/utils/customTooltip';

export const firstListItems = (
  <div>
    <CustomTooltip title="Home" placement="right">
      <ListItem button to="/" component={Link}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Student Registration" placement="right">
      <ListItem button to="/student-regist" component={Link}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Student Registration" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Classes" placement="right">
      <ListItem button to="/classes" component={Link}>
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="Classes" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Reserved Classes" placement="right">
      <ListItem button to="/reserved-classes" component={Link}>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Reserved Classes" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Certificate" placement="right">
      <ListItem button to="/certificate" component={Link}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Certificate" />
      </ListItem>
    </CustomTooltip>
  </div>
);

export const secondListItems = (
  <div>
    <CustomTooltip title="To-Do" placement="right">
      <ListItem button to="/to-do" component={Link}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="To-Do" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Calendar" placement="right">
      <ListItem button to="/calendar" component={Link}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Library" placement="right">
      <ListItem button to="/library" component={Link}>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
    </CustomTooltip>
  </div>
);

export const thirdListItems = (
  <div>
  <CustomTooltip title="Payment" placement="right">
      <ListItem button to="/payment" component={Link}>
        <ListItemIcon>
          <CreditCardRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Payment" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Contact us" placement="right">
      <ListItem button to="/contact-us" component={Link}>
        <ListItemIcon>
          <PhoneCallbackIcon />
        </ListItemIcon>
        <ListItemText primary="Contact us" />
      </ListItem>
    </CustomTooltip>
    <CustomTooltip title="Settings" placement="right">
      <ListItem button to="/settings" component={Link}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </CustomTooltip>
  </div>
);
