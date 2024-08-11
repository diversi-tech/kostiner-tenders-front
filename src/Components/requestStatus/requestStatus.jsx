import { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useNavigate } from 'react-router-dom';
import { getAllRequests } from '../../Server/requests'; // עדכן את הנתיב בהתאם למיקום הקובץ
import './requestStatus.css';

const statusIcons = {
  'approved_pending_payment': {
    icon: HourglassTopIcon,
    color: 'blue',
    text: 'הבקשה אושרה וממתינה לסיום התהליך',
  },
  'approved_paid': {
    icon: CheckCircleIcon,
    color: 'green',
    text: 'הבקשה אושרה והתהליך הסתיים בהצלחה',
  },
  'in_progress': {
    icon: HourglassEmptyIcon,
    color: 'gray',
    text: 'הבקשה בטיפול',
  },
  'rejected': {
    icon: CancelIcon,
    color: 'red',
    text: 'הבקשה נדחתה',
  },
};

// Static data mimicking server response
const mockTenderStatuses = [
  {
    nameTendet: "מזון ומסחר תעופתי",
    status: 'approved_pending_payment', // ממתינה לתשלום
    date: '2024-07-20',
  },
  {
    nameTendet: "תחבורה",
    status: 'approved_paid', // שולם
    date: '2024-07-18',
  },
  {
    nameTendet: "שרותים רפואיים",
    status: 'in_progress', // בטיפול
    date: '2024-07-19',
  },
  {
    nameTendet: "בתי ספר",
    status: 'rejected', // נדחתה
    date: '2024-07-17',
  },
];

const RequestsStatus = () => {
  const [tenderStatuses, setTenderStatuses] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate server response with static data
    setTenderStatuses(mockTenderStatuses);
    // const fetchRequests = async () => {
    //   const data = await getAllRequests();
    //   setTenderStatuses(data);
    // };
    
    // fetchRequests();
  }, []);
  // {
  //   "plan_type": "string",
  //   "purchase_start_date": "2024-08-10",
  //   "purchase_end_date": "2024-08-10",
  //   "categories": [
  //     "string"
  //   ],
  //   "amount": 0
  // }
  const handleFinishProcess = (name) => {
    const dataToSend = {
      'name': name
    };
    navigate('/creditcard', {
      state: { endProcess: true, type: 1, items: dataToSend}
    });
  };

  return (
    <Box
      className="BackgroundBox" // Style for light gray background
    >
      <Box className="GradientCircle1" />
      <Box className="GradientCircle2" />
      <Box className="TenderContainer">
        {tenderStatuses.map((tender, index) => {
          const { status } = tender;
          const { icon: StatusIcon, color, text } = statusIcons[status] || {};
          
          return (
            <Box
              key={index}
              className="TenderBox"
              sx={{
                bgcolor: 'white', // White color
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
              <Typography variant="body2" color="textSecondary">
                תאריך: {tender.date}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {StatusIcon ? (
                  <>
                    <StatusIcon sx={{ color, fontSize: 30, marginLeft: '0.5rem' }} />
                    <Typography variant="body1" color={color}>
                      {text}
                    </Typography>
                  </>
                ) : (
                  <Typography variant="body1">סטטוס לא ידוע</Typography>
                )}
              </Box>
              {tender.status === 'approved_pending_payment' && (
                <Typography
                  className="FinishProcessText"
                  sx={{
                    color: 'black',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                  }}
                >
                  לסיום התהליך{' '}
                  <span
                    className="FinishLink"
                    onClick={()=>handleFinishProcess(tender.nameTendet)}
                  >
                    לחץ כאן
                  </span>
                </Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RequestsStatus;
