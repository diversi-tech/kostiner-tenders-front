import React from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useNavigate } from 'react-router-dom';
import './statusRequest.css';

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
    <Box className="tender-container">
      {tenderStatuses.map((tender, index) => (
        <Box key={index} className="tender-box">
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
                        <CheckCircleIcon className="icon" style={{ color: 'green' }} />
                        <Typography variant="body1" color="green">
                          הבקשה אושרה והתהליך הסתיים בהצלחה
                        </Typography>
                      </>
                    ) : (
                      <>
                        <HourglassTopIcon className="icon" style={{ color: 'blue' }} />
                        <Typography variant="body1" color="blue">
                          הבקשה אושרה וממתינה לסיום התהליך
                        </Typography>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <CancelIcon className="icon" style={{ color: 'red' }} />
                    <Typography variant="body1" color="red">
                      הבקשה נדחתה
                    </Typography>
                  </>
                )}
              </>
            ) : (
              <>
                <HourglassEmptyIcon className="icon" style={{ color: 'gray' }} />
                <Typography variant="body1">הבקשה בטיפול</Typography>
              </>
            )}
          </Box>
          {tender.isCheck && tender.isRequestApproved && !tender.isPaid && (
            <Typography className="finish-process-text" onClick={handleFinishProcess}>
              לסיום התהליך <span className="finish-link">לחץ כאן</span>
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TenderStatus;
