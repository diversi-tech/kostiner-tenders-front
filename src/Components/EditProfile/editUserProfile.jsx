// import { useState, useEffect } from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import { Divider } from '@mui/material';
// import { styled } from '@mui/system';

// const BackgroundBox = styled(Box)({
//   minHeight: '100vh',  
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: '#f0f0f0',  
//   position: 'relative',  
//   overflow: 'hidden',  
// });

// const GradientCircle = styled(Box)(({ size, color, top, left }) => ({
//   position: 'absolute',
//   width: size,
//   height: size,
//   borderRadius: '50%',
//   background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
//   top,
//   left,
//   zIndex: 0,
//   filter: 'blur(80px)', 
// }));

// const EditBox = styled(Box)({
//   backgroundColor: 'white',
//   borderRadius: '12px',
//   padding: '40px 20px',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
//   position: 'relative',
//   zIndex: 1,
//   textAlign: 'center',
//   maxWidth: '500px',
//   width: '100%',
//   margin: '0 20px',
// });

// export default function EditUserProfile() {
//   const [formUserName, setUserName] = useState('');
//   const [formUserEmail, setUserEmail] = useState('');
//   const [formBankName, setBankName] = useState('');
//   const [formAccountNumber, setAccountNumber] = useState('');
//   const [formBranchNumber, setBranchNumber] = useState('');
//   const [originalUserName, setOriginalUserName] = useState('');
//   const [originalUserEmail, setOriginalUserEmail] = useState('');
//   const [originalBankName, setOriginalBankName] = useState('');
//   const [originalAccountNumber, setOriginalAccountNumber] = useState('');
//   const [originalBranchNumber, setOriginalBranchNumber] = useState('');
//   const [saving, setSaving] = useState(false);

//   // Fetch user details from the server
//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const response = await fetch('https://kostiner-tender-1111.onrender.com/api/get-user', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',
//         });
  
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//         const userData = await response.json();
  
//         setUserName(userData.userName);
//         setUserEmail(userData.userEmail);
//         setBankName(userData.bankName);
//         setAccountNumber(userData.accountNumber);
//         setBranchNumber(userData.branchNumber);
//         setOriginalUserName(userData.userName);
//         setOriginalUserEmail(userData.userEmail);
//         setOriginalBankName(userData.bankName);
//         setOriginalAccountNumber(userData.accountNumber);
//         setOriginalBranchNumber(userData.branchNumber);
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };
  
//     fetchUserDetails();
//   }, []);

//   const handleNameChange = (event) => {
//     setUserName(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setUserEmail(event.target.value);
//   };

//   const handleBankNameChange = (event) => {
//     setBankName(event.target.value);
//   };

//   const handleAccountNumberChange = (event) => {
//     setAccountNumber(event.target.value);
//   };

//   const handleBranchNumberChange = (event) => {
//     setBranchNumber(event.target.value);
//   };

//   const handleSave = async () => {
//     const userData = {
//       userName: formUserName,
//       userEmail: formUserEmail,
//       bankName: formBankName,
//       accountNumber: formAccountNumber,
//       branchNumber: formBranchNumber,
//     };
  
//     try {
//       setSaving(true);
  
//       const response = await fetch('https://kostiner-tender-1111.onrender.com/api/put-user', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',  // Important to include credentials
//         body: JSON.stringify(userData),
//       });
  
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
  
//       alert('Details saved successfully!');
  
//       setOriginalUserName(formUserName);
//       setOriginalUserEmail(formUserEmail);
//       setOriginalBankName(formBankName);
//       setOriginalAccountNumber(formAccountNumber);
//       setOriginalBranchNumber(formBranchNumber);
//     } catch (error) {
//       console.error('Error saving user details:', error);
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleCancel = () => {
//     setUserName(originalUserName);
//     setUserEmail(originalUserEmail);
//     setBankName(originalBankName);
//     setAccountNumber(originalAccountNumber);
//     setBranchNumber(originalBranchNumber);
//   };

//   return (
//     <BackgroundBox>
//       {/* Background circles */}
//       <GradientCircle size="600px" color={{ r: 26, g: 96, b: 104, a: 0.5 }} top="-200px" left="-200px" />
//       <GradientCircle size="400px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="50%" left="70%" />
//       <GradientCircle size="300px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="80%" left="20%" />

//       {/* Edit box */}
//       <EditBox>
//         <Typography variant="h5" gutterBottom>
//           החשבון שלך
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             marginBottom: 2,
//             marginLeft: 1.5,
//             marginTop: 2,
//           }}
//         >
//           <Avatar sx={{ bgcolor: 'rgba(26,96,104,255)', marginRight: 2 }}>
//             {originalUserName ? originalUserName.charAt(0).toUpperCase() : ''}
//           </Avatar>
//           <Divider orientation="vertical" flexItem sx={{ marginLeft: 2 }} />
//           <Box sx={{ marginLeft: 2 }}>
//             <Typography variant="subtitle1">
//               <b>{originalUserName}</b>
//             </Typography>
//             <Typography variant="body2">{originalUserEmail}</Typography>
//           </Box>
//         </Box>

//         <TextField
//           fullWidth
//           margin="normal"
//           label="שם מלא"
//           value={formUserName}
//           onChange={handleNameChange}
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="אימייל"
//           value={formUserEmail}
//           onChange={handleEmailChange}
//         />
        
//         <Divider sx={{ marginY: 2 }} /> {/* Divider between email and bank details */}
        
//         <TextField
//           fullWidth
//           margin="normal"
//           label="שם הבנק"
//           value={formBankName}
//           onChange={handleBankNameChange}
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="מספר חשבון"
//           value={formAccountNumber}
//           onChange={handleAccountNumberChange}
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="מספר סניף"
//           value={formBranchNumber}
//           onChange={handleBranchNumberChange}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSave}
//             disabled={saving}
//             sx={{ marginRight: 2 }}
//           >
//             שמור
//           </Button>
//           <Button variant="outlined" onClick={handleCancel} disabled={saving}>
//             בטל
//           </Button>
//         </Box>
//       </EditBox>
//     </BackgroundBox>
//   );
// }
import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import { styled } from '@mui/system';
import { UserContext } from '../../context/userContext';

const BackgroundBox = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f0f0f0',
  position: 'relative',
  overflow: 'hidden',
});

const GradientCircle = styled(Box)(({ size, color, top, left }) => ({
  position: 'absolute',
  width: size,
  height: size,
  borderRadius: '50%',
  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  top,
  left,
  zIndex: 0,
  filter: 'blur(80px)',
}));

const EditBox = styled(Box)({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '40px 20px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  maxWidth: '500px',
  width: '100%',
  margin: '0 20px',
});

export default function EditUserProfile() {
  const { user, setUser } = useContext(UserContext);

  const [formUserName, setFormUserName] = useState('');
  const [formUserEmail, setFormUserEmail] = useState('');
  const [formBankName, setFormBankName] = useState('');
  const [formAccountNumber, setFormAccountNumber] = useState('');
  const [formBranchNumber, setFormBranchNumber] = useState('');
  const [originalUserName, setOriginalUserName] = useState('');
  const [originalUserEmail, setOriginalUserEmail] = useState('');
  const [originalBankName, setOriginalBankName] = useState('');
  const [originalAccountNumber, setOriginalAccountNumber] = useState('');
  const [originalBranchNumber, setOriginalBranchNumber] = useState('');
  const [saving, setSaving] = useState(false);

  // Initialize form with user context data
  useEffect(() => {
    if (user) {
      setFormUserName(user.userName);
      setFormUserEmail(user.userEmail);
      setFormBankName(user.bankName);
      setFormAccountNumber(user.accountNumber);
      setFormBranchNumber(user.branchNumber);
      setOriginalUserName(user.userName);
      setOriginalUserEmail(user.userEmail);
      setOriginalBankName(user.bankName);
      setOriginalAccountNumber(user.accountNumber);
      setOriginalBranchNumber(user.branchNumber);
    }
  }, [user]);

  const handleNameChange = (event) => {
    setFormUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setFormUserEmail(event.target.value);
  };

  const handleBankNameChange = (event) => {
    setFormBankName(event.target.value);
  };

  const handleAccountNumberChange = (event) => {
    setFormAccountNumber(event.target.value);
  };

  const handleBranchNumberChange = (event) => {
    setFormBranchNumber(event.target.value);
  };

  const handleSave = async () => {
    const updatedUser = {
      ...user,
      userName: formUserName,
      userEmail: formUserEmail,
      bankName: formBankName,
      accountNumber: formAccountNumber,
      branchNumber: formBranchNumber,
    };
  
    try {
      setSaving(true);
  
      const token = sessionStorage.getItem('token'); 
  
      const response = await fetch('https://kostiner-tender-1111.onrender.com/api/put-user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: ` ${token}`, 
        },
        body: JSON.stringify(updatedUser),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const userData = await response.json();
  
      setUser(userData); // Update context with new user data
      setOriginalUserName(userData.userName);
      setOriginalUserEmail(userData.userEmail);
      setOriginalBankName(userData.bankName);
      setOriginalAccountNumber(userData.accountNumber);
      setOriginalBranchNumber(userData.branchNumber);
      setSaving(false);
      alert('Details saved successfully!');
  
    } catch (error) {
      console.error('Error saving user details:', error);
    }
  };

  const handleCancel = () => {
    setFormUserName(originalUserName);
    setFormUserEmail(originalUserEmail);
    setFormBankName(originalBankName);
    setFormAccountNumber(originalAccountNumber);
    setFormBranchNumber(originalBranchNumber);
  };

  return (
    <BackgroundBox>
      {/* Background circles */}
      <GradientCircle size="600px" color={{ r: 26, g: 96, b: 104, a: 0.5 }} top="-200px" left="-200px" />
      <GradientCircle size="400px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="50%" left="70%" />
      <GradientCircle size="300px" color={{ r: 26, g: 96, b: 104, a: 0.3 }} top="80%" left="20%" />

      {/* Edit box */}
      <EditBox>
        <Typography variant="h5" gutterBottom>
          החשבון שלך
        </Typography>
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
            {originalUserName ? originalUserName.charAt(0).toUpperCase() : ''}
          </Avatar>
          <Divider orientation="vertical" flexItem sx={{ marginLeft: 2 }} />
          <Box sx={{ marginLeft: 2 }}>
            <Typography variant="subtitle1">
              <b>{originalUserName}</b>
            </Typography>
            <Typography variant="body2">{originalUserEmail}</Typography>
          </Box>
        </Box>

        <TextField
          fullWidth
          margin="normal"
          label="שם מלא"
          value={formUserName}
          onChange={handleNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="אימייל"
          value={formUserEmail}
          onChange={handleEmailChange}
        />
        
        <Divider sx={{ marginY: 2 }} /> {/* Divider between email and bank details */}
        
        <TextField
          fullWidth
          margin="normal"
          label="שם הבנק"
          value={formBankName}
          onChange={handleBankNameChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="מספר חשבון"
          value={formAccountNumber}
          onChange={handleAccountNumberChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="מספר סניף"
          value={formBranchNumber}
          onChange={handleBranchNumberChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            disabled={saving}
            sx={{ marginRight: 2 }}
          >
            שמור
          </Button>
          <Button variant="outlined" onClick={handleCancel} disabled={saving}>
            בטל
          </Button>
        </Box>
      </EditBox>
    </BackgroundBox>
  );
}
