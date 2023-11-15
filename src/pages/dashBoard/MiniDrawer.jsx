import * as React from 'react';
import { useState } from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import keepLogo from '../../assets/GoogleKeepNoteLogo.jpeg';
import setShowNote from './DashBoard.jsx';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {deleteNote} from '../../service/NoteService.js'
import { useNavigate } from 'react-router-dom';
import './MiniDrawer.css';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

export default function MiniDrawer({ allNotes, setShowNote ,setViewType,viewType}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //const [isListView, setIsListView] = useState(true);

  const toggleViewType = () => {
    setViewType(prevView => (prevView === 'list' ? 'grid' : 'list'));
  };

  const [anchor, setAnchor] = useState(null);

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

const nav = useNavigate();

  const handleLogOut = () => {
      nav('/');
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{
        backgroundColor: 'white'
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color: 'Grey'
            }}
          >
            <MenuIcon />
          </IconButton>
          <img src={keepLogo} width={'40px'} height={'40px'} />
          <Typography variant="h6" noWrap component="div" sx={{
            color: 'Grey',marginRight: '8px'
          }}>
            Fundoo Note
          </Typography>
          <Search className='searchBar'>
            <SearchIconWrapper >
              <SearchIcon sx={{
                color: 'Grey'
              }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{
                color: 'Grey'
              }}
            />
          </Search>
          <IconButton sx={{
            color: 'grey',
            marginLeft: '250px'
          }}>
            <RefreshOutlinedIcon />
          </IconButton>
          <IconButton
            sx={{
              color: 'grey',
              marginLeft: '5px',
            }}
            onClick={toggleViewType}
          >
            { viewType === 'list' ? <ViewListOutlinedIcon /> : <GridViewOutlinedIcon/> }
          </IconButton>
          <IconButton sx={{ color: 'grey', marginLeft: '5px' }}><SettingsOutlinedIcon /></IconButton>

          <IconButton onClick={handleClick}>
            <AccountCircleIcon />
          </IconButton>
          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={handleClose}
          >
            <MenuItem>Profile</MenuItem>

            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          {['Notes', 'Reminders', 'Edit Labels', 'Archive', 'Trash'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}

                onClick={() => {
                  if (text === 'Notes') {
                    setShowNote(text);
                    console.log(text)
                  } else if (text === 'Archive') {
                      setShowNote(text);
                    } else if (text === 'Trash') {
                      setShowNote(text);
                    } else {
                      allNotes();
                    }                  
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 5 === 0 ? < LightbulbOutlinedIcon /> :
                    index % 5 === 1 ? <NotificationsNoneOutlinedIcon /> :
                      index % 5 === 2 ? < ModeEditOutlineOutlinedIcon /> :
                        index % 5 === 3 ? <ArchiveOutlinedIcon /> :
                          <DeleteIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

