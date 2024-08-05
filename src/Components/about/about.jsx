import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './about.css';

const About = () => {
    const [expanded, setExpanded] = useState(false);
    const panelRefs = {
        panel1: useRef(null),
        panel2: useRef(null),
        panel3: useRef(null),
        panel4: useRef(null)
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            setTimeout(() => {
                panelRefs[panel].current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // גלול כך שהאלמנט יהיה במרכז המסך
                });
            }, 100); // תזמון זה מאפשר לאנימציית הפתיחה של ה-Accordion להסתיים
        }
    };

    return (
        <section id="about-section" className="scrollable-container">
            <Container className="custom-container" maxWidth="xl">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Card className="custom-card">
                            <CardContent className="text-right">
                                <Typography variant="h4" className="title">
                                    ברוכים הבאים לא. קוסטינר
                                </Typography>
                                <Typography variant="body1" className="body-text">
                                    המקום שבו תמצאו מידע מדויק ומעודכן על תוצאות מכרזים פומביים. אנו מתמחים בהפקת דוחות מפורטים הכוללים שם הזוכה, סכום ההצעה הזוכה, משתתפים שנפסלו וסיבות הפסילה.
                                </Typography>
                                <Typography variant="body1" className="body-text">
                                    מה הערך המוסף שלנו ולמה אנחנו טובים יותר מכל חברה אחרת בתחום? אנחנו קוראים כל מכרז ומבינים אותו לעומק לפני שמחליטים לאיזה קטגוריות/תחומים הוא יופץ. דבר זה מבטיח שתקבלו אך ורק מכרזים מדויקים ורלוונטיים לתחומי העיסוק שלכם!!!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card className="custom-card">
                            <CardContent>
                                <Typography variant="h4" className="section-title">
                                    שאלות נפוצות
                                </Typography>
                                {[
                                    {
                                        panel: 'panel1',
                                        question: 'מהי מערכת קוסטינר מכרזים?',
                                        answer: 'מערכת קוסטינר מכרזים היא פלטפורמה אינטרנטית דינמית להפצת מידע על מכרזים פומביים וממשלתיים המתפרסמים בארץ.'
                                    },
                                    {
                                        panel: 'panel2',
                                        question: 'כיצד מערכת קוסטינר מכרזים מבטיחה מכרזים מדויקים?',
                                        answer: 'אנו קוראים כל מכרז ומבינים אותו לעומק לפני שמחליטים לאיזה קטגוריות ותחומים הוא ישויך, כדי להבטיח רלוונטיות מדויקת למשתמשים שלנו.'
                                    },
                                    {
                                        panel: 'panel3',
                                        question: 'למי מיועדת המערכת?',
                                        answer: 'המערכת מיועדת לעיריות, מועצות אזוריות, משרדי ממשלה, חברות ממשלתיות, מוסדות אקדמיים, בתי ספר, בתי חולים ומוסדות רפואיים אחרים ועוד.'
                                    },
                                    {
                                        panel: 'panel4',
                                        question: 'כיצד מערכת קוסטינר מכרזים מבטיחה מכרזים מדויקים?',
                                        answer: 'אנו קוראים כל מכרז ומבינים אותו לעומק לפני שמחליטים לאיזה קטגוריות ותחומים הוא ישויך, כדי להבטיח רלוונטיות מדויקת למשתמשים שלנו.'
                                    }
                                ].map((item) => (
                                    <Accordion
                                        key={item.panel}
                                        expanded={expanded === item.panel}
                                        onChange={handleChange(item.panel)}
                                        className="custom-accordion"
                                        ref={panelRefs[item.panel]}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: 'rgba(26,96,104,255)' }} />}
                                            aria-controls={`${item.panel}a-content`}
                                            id={`${item.panel}a-header`}
                                        >
                                            <Typography>{item.question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {item.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default About;
