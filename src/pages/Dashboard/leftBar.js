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
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import SettingsIcon from '@material-ui/icons/Settings';

import CustomTip from '../../components/utils/customTooltip';

export const mainListItems = (
  <div>
    <CustomTip title="Home" placement="right">
      <ListItem button to="/" component={Link}>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Student Registration" placement="right">
      <ListItem button to="/student-registration" component={Link}>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Student Registration" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Classes" placement="right">
      <ListItem button to="/classes" component={Link}>
        <ListItemIcon>
          <ClassIcon />
        </ListItemIcon>
        <ListItemText primary="Classes" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Reserved Classes" placement="right">
      <ListItem button to="/reserved-classes" component={Link}>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Reserved Classes" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Certificate" placement="right">
      <ListItem button to="/certificate" component={Link}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="Certificate" />
      </ListItem>
    </CustomTip>
  </div>
);

export const secondaryListItems = (
  <div>
    <CustomTip title="To-Do" placement="right">
      <ListItem button to="/to-do" component={Link}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="To-Do" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Calendar" placement="right">
      <ListItem button to="/calendar" component={Link}>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Library" placement="right">
      <ListItem button to="/library" component={Link}>
        <ListItemIcon>
          <LocalLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItem>
    </CustomTip>
  </div>
);

export const configListItems = (
  <div>
    <CustomTip title="Contact us" placement="right">
      <ListItem button to="/contact-us" component={Link}>
        <ListItemIcon>
          <PhoneCallbackIcon />
        </ListItemIcon>
        <ListItemText primary="Contact us" />
      </ListItem>
    </CustomTip>
    <CustomTip title="Settings" placement="right">
      <ListItem button to="/settings" component={Link}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </CustomTip>
  </div>
);
