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
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const nav = useNavigate();

  const handleNav = (title) => {
    if (title === 'דו"ח חד פעמי') {
      nav('/tenderSearch');
    } else {
      nav('/typeProduct');
    }
  };

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
      subtitle: "תוצאות של מכרזי החודש בתחומים נבחרים",
      buttonText: "לרכישה",
      features: ["דוח מפורט", "סקירה חודשית בתחומים נבחרים", "שלושה תחומים לבחירה"]
    }
  ];

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '5rem 2rem 0 3rem',
        boxSizing: 'border-box',
        overflowY: 'auto',
        margin: 'auto',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          maxWidth: '1200px',
        }}
      >
        {cardData.map((card, index) => (
          <Card
            key={index}
            size="lg"
            variant="outlined"
            sx={{
              minWidth: 380,
              maxWidth: '100%',
              boxShadow: '0px 3px 6px #00000029',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
              marginBottom: '2rem',
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
                onClick={() => handleNav(card.title)}
              >
                {card.buttonText}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      {/* Scrollbar for manual scrolling */}
      <Box
        sx={{
          display: 'block',
          height: '20px', // Adjust height as needed
        }}
      />
    </Box>
  );
}
