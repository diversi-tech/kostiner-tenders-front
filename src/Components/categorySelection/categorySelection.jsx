import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Divider, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableViewIcon from '@mui/icons-material/TableView';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../context/userContext';
import { getAllCategories } from '../../Server/caregory'; // שים לב לנתיב

const ColoredIconButton = styled(IconButton)(({ theme }) => ({
    color: 'rgba(26,96,104,255)',
    '&:hover': {
        color: 'rgba(26,96,104,255)',
    },
}));

const iconMap = {
    default: <TableViewIcon fontSize="large" />,
};

const CategorySelection = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            if (user && user.role === 'admin') {
                const categories = await getAllCategories();
                if (categories) {
                    setCategories(categories.map(category => category.category));
                } else {
                    setCategories([]);
                }
            } else if (user && user.subscriptions && user.subscriptions.categories) {
                setCategories(user.subscriptions.categories);
            } else {
                setCategories([]);
            }
            setLoading(false);
        };

        fetchCategories();
    }, [user]);

    const handleNavigate = (categoryName) => {
        navigate('/categoryTender', { state: { categoryName } });
    };

    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                p: 3, 
                paddingTop: '10%', 
                minHeight: '100vh',
                overflowY: 'scroll', // מאפשר גלילה פנימית
                '&::-webkit-scrollbar': {
                    display: 'none', // מוסיף תמיכה למערכות מבוססות WebKit כמו Chrome ו-Safari
                },
                scrollbarWidth: 'none', // מוסיף תמיכה לדפדפני Firefox
                msOverflowStyle: 'none', // מוסיף תמיכה ל-Internet Explorer ו-Edge
            }}
        >
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {loading ? (
                    Array.from(new Array(3)).map((_, index) => (
                        <Grid item xs={12} sm={4} md={4} key={index}>
                            <Card sx={{ padding: 2 }}>
                                <Skeleton variant="rectangular" width="100%" height={118} />
                                <Skeleton width="60%" />
                                <Skeleton width="80%" />
                            </Card>
                        </Grid>
                    ))
                ) : (
                    categories.length > 0 ? (
                        categories.map((category, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                    onClick={() => handleNavigate(category)}
                                >
                                    <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                                        <ColoredIconButton aria-label={category}>
                                            {iconMap.default}
                                        </ColoredIconButton>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            {category}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    ) : (
                        <Typography variant="body1" align="center">
                            אין קטגוריות זמינות
                        </Typography>
                    )
                )}
            </Grid>
        </Box>
    );
};

export default CategorySelection;
