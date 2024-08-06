import React, { useState, useEffect, useContext } from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Skeleton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import TableViewIcon from '@mui/icons-material/TableView';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { styled } from '@mui/material/styles';
import { UserContext } from '../../context/userContext';
import { getAllCategories } from '../../Server/caregory';
import { getAllTenders } from '../../Server/tender';

const ColoredIconButton = styled(IconButton)(({ theme }) => ({
    color: 'rgba(26,96,104,255)',
    '&:hover': {
        color: 'rgba(26,96,104,255)',
    },
}));

const iconMap = {
    default: <TableViewIcon fontSize="large" />,
    history: <HistoryToggleOffIcon fontSize="large" />,
};

const CategorySelection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const type = location.state?.type || 0;

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            if (type === 1) {
                const tenders = await getAllTenders();
                if (tenders) {
                    const categoriesFromTenders = tenders.history;
                    console.log(categoriesFromTenders);
                    setCategories(Object.keys(categoriesFromTenders));
                } else {
                    setCategories([]);
                }
            } else if (user && user.role === 'admin') {
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
    }, [user, type]);

    const handleNavigate = (categoryName) => {
        navigate('/categoryTender', { state: { categoryName, type } });
    };

    const handlePurchaseHistoryNavigate = () => {
        navigate('/categotySelect', { state: { type: 1 } });
    };

    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                p: 3, 
                paddingTop: '10%', 
                minHeight: '100vh',
                overflowY: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
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
                    <>
                        {categories.length > 0 ? (
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
                        )}
                        {type !== 1 ||  !user.role === 'admin' &&(
                            <Grid item xs={12}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100%',
                                        backgroundColor: 'rgba(26,96,104,0.1)',
                                        transition: 'transform 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                    onClick={handlePurchaseHistoryNavigate}
                                >
                                    <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                                        <ColoredIconButton aria-label="history">
                                            {iconMap.history}
                                        </ColoredIconButton>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            הסטורית רכישות
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}
                    </>
                )}
            </Grid>
        </Box>
    );
};

export default CategorySelection;
