import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './item1.css';
import Item from './item';
import DownloadButton from './downloadButton';

function ItemsList({ items }) {
    return (
        <section id="result-section">
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12}>
                    <Box
                        sx={{
                            backgroundColor: '#f9f9f9', // צבע לבן אפור ממש בהיר
                            border: '1px solid rgba(26,96,104,255)', // גבול בצבע המבוקש
                            color: 'black',
                            p: 2,
                            borderRadius: 1,
                            // marginTop: '75px'
                        }}
                    >
                        <Typography variant="h4" gutterBottom sx={{ color: 'rgba(26,96,104,255)' }}>
                            רשימת פריטים
                        </Typography>
                        <TableContainer>
                            <Table className="item-table" sx={{ backgroundColor: 'white' }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>שם הגוף</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>שם ומספר המכרז</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>תאריך פרסום</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>תאריך הגשה</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>קטגוריות</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>שם הזוכה ופרטי</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>מציעים</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>מידע על הזוכה</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>סכום ההצעה</TableCell>
                                        <TableCell sx={{ color: 'rgba(26,96,104,255)', borderColor: 'rgba(26,96,104,255)' }}>ID</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {items.map((item, index) => (
                                        <Item
                                            key={index}
                                            company={item.company}
                                            nameTender={item.nameTender}
                                            datePublished={item.datePublished}
                                            dateSubmission={item.dateSubmission}
                                            category={item.category}
                                            winnerDetails={item.winnerDetails}
                                            offer={item.offer}
                                            winnerData={item.winnerData}
                                            bidAmount={item.bidAmount}
                                            id={item.id}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <DownloadButton items={items} />
                </Grid>
            </Grid>
        </section>
    );
}

ItemsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            company: PropTypes.string.isRequired,
            nameTender: PropTypes.string.isRequired,
            datePublished: PropTypes.string.isRequired,
            dateSubmission: PropTypes.string.isRequired,
            category: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
            winnerDetails: PropTypes.string.isRequired,
            offer: PropTypes.string.isRequired,
            winnerData: PropTypes.string.isRequired,
            bidAmount: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ItemsList;
