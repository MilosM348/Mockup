import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
  InputBase
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search'
import { fade } from '@material-ui/core/styles'

const headersData = [
  {
    label: "Explore",
    href: "/",
  },
  {
    label: "My items",
    href: "/",
  },
  {
    label: "Following",
    href: "/",
  },
  {
    label: "Activity",
    href: "/",
  },
  {
    label: "How it works",
    href: "/",
  },
  {
    label: "Community",
    href: "/",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    paddingRight: "25px",
    paddingLeft: "25px",
    paddingBottom: 15,
    paddingTop: 30,
    borderBottom: '1px solid #2d216c',
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    cursor: 'pointer',
  },
  menuButton: {
    marginRight: "9px",
    fontSize: "12px",
    color: 'white'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
  search: {
    borderRadius: 30,
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '35px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  button: {
    textTransform: 'none',
    outline: 'none !important',
    color: 'white', 
    borderRadius: 20, 
    width: "20ch",
    height: '36px',
  },
}));

export default function Nav() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1200
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {Logo}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <div>{getMenuButtons()}</div>
        <div style={{ display: 'flex' }}>
          <Button className={classes.button} style={{ backgroundColor: '#3CBDFE', marginRight: '20px', }} variant="contained">
            Create
          </Button>
          <Button className={classes.button} style={{ backgroundColor: '#EA5714'}} variant="contained">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <div style={{ display: 'flex' }}>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {Logo}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <Button className={classes.button} style={{ backgroundColor: '#3CBDFE', marginRight: '20px', }} variant="contained">
            Create
          </Button>
          <Button className={classes.button} style={{ backgroundColor: '#EA5714'}} variant="contained">
            Connect Wallet
          </Button>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const Logo = (
    <div>
      <img src="/logo.png"></img>
    </div>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <div>
      <div className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </div>
    </div>
  );
}
