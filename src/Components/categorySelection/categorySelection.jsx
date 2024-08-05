import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Divider, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TableViewIcon from '@mui/icons-material/TableView';
import { styled } from '@mui/material/styles';
import { getAllTenders } from '../../Server/tender';

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
        const fetchTenders = async () => {
            try {
                const tenderData = await getAllTenders();
                const filledLists = tenderData.filter(list => list.length > 0);
                if (filledLists.length > 0) {
                    setCategories(filledLists);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Tenders:', error);
                setLoading(false);
            }
        };
        fetchTenders();
    }, []);

    const handleNavigate = (categoryName, listIndex) => {
        navigate('/categortTender', { state: { categoryName, listIndex } });
    };

    const getGridSize = () => {
        const totalCategories = categories.reduce((acc, list) => acc + list.length, 0);
        if (totalCategories === 1) return 12;
        if (totalCategories === 2) return 6;
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
                    categories.map((list, listIndex) =>
                        list.map((category) => (
                            <Grid item xs={12} sm={gridSize} md={gridSize} key={category.tender_id}>
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
                                    onClick={() => handleNavigate(category.category[0], listIndex)}
                                >
                                    <CardContent sx={{ width: '100%', textAlign: 'center' }}>
                                        <ColoredIconButton aria-label={category.category[0]}>
                                            {iconMap.default}
                                        </ColoredIconButton>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            {category.category.join(', ')}
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body1" align="center">
                                            {category.body_name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )
                )}
            </Grid>
        </Box>
    );
};

export default CategorySelection;
