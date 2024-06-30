import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import Chip from '@mui/joy/Chip';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Modal from '@mui/material/Modal';
import IconStepper from './stepPay'

export default function Product() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cardData = [
    {
      title: "דו\"ח חד פעמי",
      subtitle: "תוצאות מכרז בודד",
      buttonText: "לרכישה",
      features: ["דוח מפורט למכרז בודד"]
    },
    {
      title: "מנוי קבוע",
      subtitle: "סקירה שנתית של תוצאות מכרזים",
      buttonText: "לרכישה",
      features: ["דוח מפורט", "מידע שוטף בתחומים נבחרים בתיבת המייל", "שלושה תחומים לבחירה"]
    },
    {
      title: "דו\"ח חודשי",
      subtitle: " תוצאות של מכרזי החודש בתחומים נבחרים",
      buttonText: "לרכישה",
      features: ["דוח מפורט", "סקירה חודשית בתחומים נבחרים", "שלושה תחומים לבחירה"]
    }
  ];

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        פתח כרטיסים
      </Button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box
          sx={{
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            position: 'relative'
          }}
        >
                <IconStepper/>

          {cardData.map((card, index) => (
            <Card
              key={index}
              size="lg"
              variant="outlined"
              sx={{
                minWidth: 360,
                boxShadow: '0px 3px 6px #00000029',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
            >
              {card.title === "מנוי קבוע" && (
                <Chip
                  size="sm"
                  variant="outlined"
                  color="warning"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: '8px',
                  }}
                >
                  MOST POPULAR
                </Chip>
              )}

              <Typography level="h2" textAlign="center">{card.title}</Typography>
              <Divider inset="none" />
              <Typography level="h6" textAlign="center">{card.subtitle}</Typography>
              <Divider inset="none" />
              <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
                {card.features.map((feature, index) => (
                  <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ textAlign: 'center', marginLeft: 'auto', marginRight: '10px' }}>{feature}</Typography>
                    <ListItemDecorator>
                      <Check sx={{ color: 'rgba(26,96,104,255)' }} />
                    </ListItemDecorator>
                  </ListItem>
                ))}
              </List>
              <Divider inset="none" />
              <CardActions>
                <Button
                  variant="soft"
                  color="neutral"
                  endDecorator={<KeyboardArrowRight sx={{ color: 'rgb(10, 43, 41)' }} />}
                  sx={{
                    backgroundColor: 'rgba(26,96,104,255)',
                    '&:hover': {
                      backgroundColor: 'rgb(129, 175, 164)',
                    },
                    color: '#ffffff',
                  }}
                >
                  {card.buttonText}
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Modal>
    </>
  );
}
