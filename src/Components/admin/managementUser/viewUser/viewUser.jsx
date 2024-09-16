import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import { getAllUsers } from '../../../../Server/user';

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const users = await getAllUsers();
      setUsers(users);
      setLoading(false);
    };
    fetchData();
  }, []);

  const truncatePassword = (password) => {
    if (!password) return ''; // אם הסיסמה ריקה או null או undefined, מחזירים מחרוזת ריקה
    return password.length > 10 ? `${password.substring(0, 10)}...` : password;
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'transparent',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        marginTop: 4,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        רשימת משתמשים
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper} sx={{ width: '90%', maxHeight: '70vh' }}>
          <Table stickyHeader sx={{ border: '2px solid rgba(26,96,104,255)', borderRadius: 2 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'rgba(26,96,104,255)' }}>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  שם משתמש
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  סיסמא
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  דואר אלקטרוני
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  סוג מנוי
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  קטגוריות
                </TableCell>
                <TableCell align="center" sx={{ color: 'rgba(26,96,104,255)', fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold' }}>
                  שם עסק
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.user_id} sx={{ borderBottom: 'none' }}>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {user.user_name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    <Tooltip title={user.password || ''} arrow>
                      <span>{truncatePassword(user.password)}</span>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {user.email}
                  </TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {user.subscriptions?.plan_type || '-'}
                  </TableCell>
                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {Array.isArray(user.subscriptions?.categories) ? user.subscriptions.categories.join(', ') : 'לא מוגדר'}
                  </TableCell>

                  <TableCell align="center" sx={{ fontFamily: 'Arial', fontSize: '1rem' }}>
                    {user.business_name || '-'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ViewUser;
