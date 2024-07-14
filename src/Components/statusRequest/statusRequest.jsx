import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useNavigate } from 'react-router-dom';

const tenderStatuses = [
  {
    nameTendet: "מזון ומסחר תעופתי",
    isCheck: true,
    isRequestApproved: true,
    isPaid: false,
  },
  {
    nameTendet: "תחבורה",
    isCheck: true,
    isRequestApproved: true,
    isPaid: true,
  },
  {
    nameTendet: "שרותים רפואיים",
    isCheck: true,
    isRequestApproved: false,
    isPaid: false,
  },
  {
    nameTendet: "בתי ספר",
    isCheck: false,
    isRequestApproved: false,
    isPaid: false,
  },
];

const TenderStatus = () => {
  const navigate = useNavigate();

  const handleFinishProcess = () => {
    navigate('/creditcard', {
      state: { endProcess: true }
    });
  };

  return (
    <Box
      sx={{
        width: '33vw',
        height: '100%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      {tenderStatuses.map((tender, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            backgroundColor: '#f0f0f0',
            padding: '1rem',
            marginBottom: '1rem',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography variant="h6" gutterBottom>
            שם המכרז המבוקש: <br />
            {tender.nameTendet}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {tender.isCheck ? (
              <>
                {tender.isRequestApproved ? (
                  <>
                    {tender.isPaid ? (
                      <>
                        <CheckCircleIcon sx={{ color: 'green', fontSize: 30, marginLeft: '0.5rem' }} />
                        <Typography variant="body1" color="green">
                          הבקשה אושרה והתהליך הסתיים בהצלחה
                        </Typography>
                      </>
                    ) : (
                      <>
                        <HourglassTopIcon sx={{ color: 'blue', fontSize: 30, marginLeft: '0.5rem' }} />
                        <Typography variant="body1" color="blue">
                          הבקשה אושרה וממתינה לסיום התהליך
                        </Typography>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <CancelIcon sx={{ color: 'red', fontSize: 30, marginLeft: '0.5rem' }} />
                    <Typography variant="body1" color="red">
                      הבקשה נדחתה
                    </Typography>
                  </>
                )}
              </>
            ) : (
              <>
                <HourglassEmptyIcon sx={{ color: 'gray', fontSize: 30, marginLeft: '0.5rem' }} />
                <Typography variant="body1">הבקשה בטיפול</Typography>
              </>
            )}
          </Box>
          {tender.isCheck && tender.isRequestApproved && !tender.isPaid && (
            <Typography
              sx={{
                marginTop: '0.5rem',
                color: 'black',
                textAlign: 'center',
              }}
            >
              לסיום התהליך{' '}
              <span
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: 'rgba(26,96,104,255)',
                }}
                onClick={handleFinishProcess}
              >
                לחץ כאן
              </span>
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TenderStatus;
