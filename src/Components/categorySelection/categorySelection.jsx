import React from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';
import { styled } from '@mui/material/styles';

const ColoredIconButton = styled(IconButton)(({ theme }) => ({
    color: 'rgba(26,96,104,255)',
    '&:hover': {
        color: 'rgba(26,96,104,255)',
    },
}));

const iconMap = {
    בניין: <BuildIcon fontSize="large" />,
    טכנולוגיה: <AssignmentIcon fontSize="large" />,
    משתמשים: <PeopleAltIcon fontSize="large" />,
};

const CategorySelection = ({ categories }) => {
    const navigate = useNavigate();

    const handleNavigate = (categoryName) => {
        // navigate(`/category/${categoryName}`);
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
                {categories.map((category) => (
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
                                    {iconMap[category.name] || <AssignmentIcon fontSize="large" />}
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
                ))}
            </Grid>
        </Box>
    );
};

export default CategorySelection;
