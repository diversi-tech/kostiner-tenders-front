import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Help = () => {
    return (
        <Box 
            id="help-section" 
            sx={{ 
                marginTop: '200px',
                marginBottom:'150px',
                padding: 2,
                overflowY: 'auto',
                height: 'calc(100vh - 200px)' 
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" color="rgba(26, 96, 104, 255)" align="center">
                        מסך עזרה ותמיכה
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="center">
                    <Box sx={{ width: '100%', maxWidth: 560 }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/8Ovla8GIaHs"
                            title="הסבר על האתר"
                            frameBorder="0"
                            allowFullScreen
                            style={{ width: '100%', maxHeight: '100%' }}
                        ></iframe>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Help;
