import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  CssBaseline,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, MoreVert, ExitToApp } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

import CustomTooltip from '../../components/utils/customTooltip';
import ProfileIcon from '../../components/utils/profileIcons';

import * as userActions from '../../store/auth/actions';

import { firstListItems, secondListItems, thirdListItems } from './leftBar';
// import Home from '../Home';
import Classes from '../Classes';
// import Settings from '../Settings';
// import Image from '../../assets/images/universityBack.jpg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  // },
  // background: {
  //   backgroundImage: `url(${Image})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   backgroundSize: 'cover',
  //   backgroundAttachment: 'fixed',
  //   height: '100%',
  // },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: '#2b385b',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1, // AppBar
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      flexGrow: 1,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    position: 'relative', // Drawer
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  content: {
    flexGrow: 1, // content
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    maxHeight: 240,
    height: '100%',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [openLeftBar, setOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const openProfileMenu = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenProfileMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseProfileMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => dispatch(userActions.logout());

  const profileIconButton = (
    <div>
      <IconButton
      aria-label="redirect to Sign-In page"
      color="inherit"
      size="small"
      onClick={handleOpenProfileMenu}
    >
        <ProfileIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={openProfileMenu}
        onClose={handleCloseProfileMenu}
      >
        <MenuItem onClick={handleCloseProfileMenu}>View Profile</MenuItem>
        <MenuItem to='/change-passw' component={Link}>Change Password</MenuItem>
      </Menu>
    </div>
  );

  const logoutIconButton = (
    <IconButton aria-label="logout" onClick={logout} color="inherit">
      <ExitToApp fontSize="large" />
    </IconButton>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={() => setMobileMoreAnchorEl(null)}
    >
      <MenuItem>
          {profileIconButton}
      </MenuItem>
      <MenuItem>
        <CustomTooltip title="Logout" placement="left">
          {logoutIconButton}
        </CustomTooltip>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, openLeftBar && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            className={clsx(classes.menuButton)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Growdev
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CustomTooltip title="Profile" placement="bottom">
              {profileIconButton}
            </CustomTooltip>
            <CustomTooltip title="Logout" placement="bottom">
              {logoutIconButton}
            </CustomTooltip>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={(e) => setMobileMoreAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !openLeftBar && classes.drawerPaperClose),
        }}
        open={openLeftBar}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>{firstListItems}</List>
        <Divider />
        <List>{secondListItems}</List>
        <Divider />
        <List>{thirdListItems}</List>
      </Drawer>
      <Classes />
      {/* <Settings /> */}
      {/* <Home /> */}
    </div>
  );
}
