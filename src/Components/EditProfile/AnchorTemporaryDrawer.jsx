import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HistoryIcon from '@mui/icons-material/History';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './AnchorTemporaryDrawer.css';
import Login from '../../Server/Auth';
const icons = {
  'התנתקות': <ExitToAppIcon />,
  'עריכת פרופיל': <PersonIcon />,
  'לוח בקרה': <DashboardIcon />,
  'סטטוס בקשות': <AssignmentIcon />,
  'היסטורית רכישות': <HistoryIcon />
};
const AnchorTemporaryDrawer = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ left: false, selectedOption: null });
  const { user, setUser } = useContext(UserContext);
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };
  const handleItemClick = (text) => {
    setState({ ...state, selectedOption: text });
    switch (text) {
      case 'עריכת פרופיל':
        navigate(user.role === 'user' ? '/user-profile' : '/admin-profile');
        break;
      case 'התנתקות':
        handleLogout();
        break;
      case 'סטטוס בקשות':
        navigate('/status-requests');
        break;
      case 'היסטורית רכישות':
        navigate('/purchase-history');
        break;
      case 'לוח בקרה':
        navigate('/dashboard');
        break;
      default:
        break;
    }
  };
  const handleLogout = () => {
    Login.logout();
  };
  const userName = user ? user.name : '';
  const userEmail = user ? user.email : '';
  const menuItems = [
    { text: 'התנתקות', role: ['user', 'admin'] },
    { text: 'עריכת פרופיל', role: ['user', 'admin'] },
    { text: 'לוח בקרה', role: ['admin'] },
    { text: 'סטטוס בקשות', role: ['user'] },
    { text: 'היסטורית רכישות', role: ['user'] }
  ];
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <Box className="drawer-header">
        <Avatar className="drawer-avatar">
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
        {menuItems
          .filter(item => item.role.includes(user.role))
          .map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={state.selectedOption === item.text}
                onClick={() => handleItemClick(item.text)}
                className="list-item-button"
              >
                <ListItemIcon className="list-item-icon">
                  {icons[item.text] || <PersonIcon />}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          // justifyContent: 'flex-end',
          alignItems: 'flex-end',
          position: 'fixed',
          top: '16px',
          marginLeft: '45px',
          color: 'rgba(26, 96, 104, 255)',
          cursor: 'pointer',
          zIndex: 1, // Ensure it's above other content
          transition: 'color 0.3s',
          marginTop: '30px', // Optional: Adjust vertical alignment
          // marginRight: '10px', // Optional: Adjust horizontal alignment
        }}
        onClick={toggleDrawer(true)}
        aria-label="account"
        className="drawer-account-icon"
      >
        <AccountCircleOutlinedIcon />
      </Box>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer(false)}
        onClick={toggleDrawer(false)}
        variant="persistent"
        PaperProps={{
          sx: { width: 250, overflow: 'hidden' },
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
export default AnchorTemporaryDrawer;







