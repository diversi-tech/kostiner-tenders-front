import * as React from 'react';
import Box from '@mui/material/Box';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
export default function SvgIconsSize() {
  const nav = useNavigate();
  const handleNav = () => {
    nav('/');
  };
  return (
    <Box sx={{ position: 'absolute', top: 0, right: 0, color: 'white', p: 4 }}>
      <CancelIcon fontSize="large" onClick={handleNav} />
    </Box>
  );
}