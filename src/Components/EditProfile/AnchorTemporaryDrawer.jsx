
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'; // Icon for admin users
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

const AnchorTemporaryDrawer = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ left: false, selectedOption: null });
  const { user, logout } = useContext(UserContext);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };

  const handleItemClick = (text) => {
    setState({ ...state, selectedOption: text });
    if (text === 'עריכת פרופיל') {
      if(user.role === 'user')
        navigate('/user-profile');
      else if(user.role === 'admin')
        navigate('/admin-profile');
    } else if (text === 'התנתקות') {
      handleLogout();
    } else if (text === 'ניהול משתמשים' && user.role === 'admin') {
      navigate('/manage-users');
    }
    else if(text==='סטטוס בקשות'){
      navigate('/status-requests')
    }
    
  };

  const handleLogout = () => {
    logout();
  };

  const userName = user ? user.name : 'אורח';
  const userEmail = user ? user.email : '';

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 2,
          marginLeft: 1.5,
          marginTop: 2,
        }}
      >
        <Avatar sx={{ bgcolor: 'rgba(26,96,104,255)', marginRight: 2 }}>
          {userName ? userName.charAt(0).toUpperCase() : ''}
        </Avatar>
        <Box>
          <Typography variant="subtitle1">
            <b>{userName}</b>
          </Typography>
          <Typography variant="body2">{userEmail}</Typography>
        </Box>
      </Box>

      <Divider />
      <List>
        {['התנתקות', 'עריכת פרופיל', user.role === 'admin' && 'בקרת מנהל',user.role==='user'&&'סטטוס בקשות',user.role==='user'&&'הסטורית רכישות'].map((text, index) => (
          text && (
            <ListItem key={text} disablePadding>
              <ListItemButton
                selected={state.selectedOption === text}
                onClick={() => handleItemClick(text)}
                sx={{
                  '&:hover': {
                    backgroundColor: '#839a9d',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    transition: 'transform 0.3s ease-in-out',
                    marginRight: '6px',
                    '&:hover': {
                      transform: 'translateX(-6px)',
                    },
                  }}
                >
                  {index % 2 === 0 ? <ExitToAppIcon /> : <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box onClick={toggleDrawer(true)} aria-label="account" sx={{ position: 'fixed', top: 16, left: 16 }}>
        <AccountCircleOutlinedIcon />
      </Box>
      <Drawer 
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        variant="persistent"
        PaperProps={{
          sx: { width: 250 },
        }}
      >
        {list()}
      </Drawer>
      
    </Box>
  );
};

export default AnchorTemporaryDrawer;
