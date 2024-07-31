import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Divider, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableViewIcon from '@mui/icons-material/TableView';
import { styled } from '@mui/material/styles';
import { getAllTenders } from '../../Server/tender'; // ייבוא הפונקציה מהקובץ המתאים - מסולש

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
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // const fetchDummyTenders = async () => {
        //     // סימולציה של טעינה
        //     await new Promise((resolve) => setTimeout(resolve, 2000));

        //     // נתוני דמה
        //     const dummyTenders = [
        //         { name: 'בניה', description: 'תיאור מכרז 1' },
        //         { name: 'תקשורת', description: 'תיאור מכרז 2' },
        //         { name: 'נקיון', description: 'תיאור מכרז 3' },
        //     ];
        //     setCategories(dummyTenders);
        //     setLoading(false);
        // };
        // fetchDummyTenders();
        const fetchTenders = async () => {
            try {
                const tenderData = await getAllTenders();
                setCategories(tenderData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Tenders:', error);
            }
        };
        fetchTenders();
    }, []);

    const handleNavigate = (categoryName) => {
        navigate('/categortTender');
    };

    const getGridSize = () => {
        const len = categories.length;
        if (len === 1) return 12;
        if (len === 2) return 6;
        return 4;
    };

    const gridSize = getGridSize();

    return (
        <Box sx={{ flexGrow: 1, p: 3, paddingTop: '10%' }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                {loading ? (
                    Array.from(new Array(3)).map((_, index) => (
                        <Grid item xs={12} sm={gridSize} md={gridSize} key={index}>
                            <Card sx={{ padding: 2 }}>
                                <Skeleton variant="rectangular" width="100%" height={118} />
                                <Skeleton width="60%" />
                                <Skeleton width="80%" />
                            </Card>
                        </Grid>
                    ))
                ) : (
                    categories.map((category) => (
                        <Grid item xs={12} sm={gridSize} md={gridSize} key={category.name}>
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
                                onClick={() => handleNavigate(category.name)}
                            >
                                <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                                    <ColoredIconButton aria-label={category.name}>
                                        {iconMap.default}
                                    </ColoredIconButton>
                                    <Typography variant="h5" align="center" gutterBottom>
                                        {category.name}
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body1" align="center">
                                        {category.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default CategorySelection;
