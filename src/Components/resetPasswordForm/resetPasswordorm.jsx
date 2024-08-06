import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TextField, Button, IconButton, Typography, Card, CardContent } from '@mui/material';
import './resetPasswordForm.css';
import { useNavigate } from 'react-router-dom';

const ResetPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const nav = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validatePassword = (password) => {
    const hasDigit = /\d/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const isValidLength = password.length >= 8;

    if (!hasDigit) {
      return 'הסיסמה חייבת להכיל לפחות ספרה אחת';
    }
    if (!hasLetter) {
      return 'הסיסמה חייבת להכיל לפחות אות אחת באנגלית';
    }
    if (!isValidLength) {
      return 'הסיסמה חייבת להיות לפחות באורך של 8 תווים';
    }
    return null;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError('סיסמאות אינן תואמות');
      return;
    }

    try {
      const token = localStorage.getItem('resetToken');
      console.log("token",token);
      const response = await fetch('https://kostiner-tenders-back.onrender.com/auth/reset-password/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ access_token: token, new_password: password }),
      });

      if (!response.ok) {
        const responseData = await response.json();
        if (response.status === 401) {
          setError('הטוקן פג תוקף');
        } else {
          throw new Error(responseData.message || 'Failed to reset password');
        }
      }

      const responseData = await response.json();
      setSuccessMessage(responseData.message);
      setError(null);
      nav('/');
    } catch (error) {
      if (error.message === 'Failed to reset password') {
        setError('Failed to reset password. Please try again.');
      } else {
        setError(error.message);
      }
    }
  };

  const handlePasswordFocus = () => {
    setShowRules(true);
  };

  const handlePasswordBlur = () => {
    setShowRules(false);
  };

  return (
    <Card
      style={{
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '50px',
        padding: '40px',
        borderRadius: '12px',
        border: '2px solid rgba(26,96,104,255)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        position: 'relative',
      }}
    >
      <CardContent>
        <Typography variant="h4" component="h2" style={{ color: '#0A3F3D', textAlign: 'center', marginBottom: '20px' }}>
          איפוס סיסמה
        </Typography>
        <form onSubmit={handleResetPassword} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '20px', width: '100%', maxWidth: '450px' }}>
            <Typography variant="body1" style={{ color: '#0A3F3D', marginBottom: '10px', fontSize: '1.2rem' }}>
              סיסמה חדשה
            </Typography>
            <TextField
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              required
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                ),
                style: {
                  fontSize: '1.2rem',
                  padding: '6px 10px',
                  color: '#0A3F3D',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#0A3F3D',
                }
              }}
              style={{
                borderRadius: '8px',
                height: '60px',
              }}
            />
            {showRules && (
              <div className="tooltip-content visible">
                <div className="tooltip-arrow"></div>
                <ul className="rules-list">
                  <li style={{ color: /\d/.test(password) ? 'green' : 'red', fontSize: '0.9rem' }}>
                    <span>{/\d/.test(password) ? '✓' : '✘'}</span> ספרה אחת לפחות
                  </li>
                  <li style={{ color: /[a-zA-Z]/.test(password) ? 'green' : 'red', fontSize: '0.9rem' }}>
                    <span>{/[a-zA-Z]/.test(password) ? '✓' : '✘'}</span> אותיות אנגליות
                  </li>
                  <li style={{ color: password.length >= 8 ? 'green' : 'red', fontSize: '0.9rem' }}>
                    <span>{password.length >= 8 ? '✓' : '✘'}</span> מינימום 8 תווים
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div style={{ marginBottom: '20px', width: '100%', maxWidth: '450px' }}>
            <Typography variant="body1" style={{ color: '#0A3F3D', marginBottom: '10px', fontSize: '1.2rem' }}>
              אימות סיסמה
            </Typography>
            <TextField
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                  </IconButton>
                ),
                style: {
                  fontSize: '1.2rem',
                  padding: '6px 10px',
                  color: '#0A3F3D',
                },
              }}
              InputLabelProps={{
                style: {
                  color: '#0A3F3D',
                }
              }}
              style={{
                borderRadius: '8px',
                height: '60px',
              }}
            />
          </div>
          {error && <Typography variant="body2" color="error" style={{ marginBottom: '15px', fontSize: '1rem' }}>{error}</Typography>}
          {successMessage && <Typography variant="body2" style={{ color: 'green', marginBottom: '15px', fontSize: '1rem' }}>{successMessage}</Typography>}
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: 'rgba(26,96,104,255)',
              color: '#fff',
              padding: '14px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              width: '100%',
              maxWidth: '450px',
            }}
          >
            אפס סיסמה
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordForm;
