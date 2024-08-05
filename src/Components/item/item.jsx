// src/components/Item.js
import React from 'react';
import PropTypes from 'prop-types';
import './item.css';

function Item({ company, nameTender, datePublished, dateSubmission, category, winnerDetails, participants, winnerName, bidAmount, estimate }) {
    return (
        <tr>
            <td data-label="שם הגוף">{company}</td>
            <td data-label="שם ומספר המכרז">{nameTender}</td>
            <td data-label="תאריך פרסום">{datePublished}</td>
            <td data-label="תאריך הגשה">{dateSubmission}</td>
            {/* <td data-label="קטגוריות">{Array.isArray(category) ? category.join(', ') : category}</td> */}
            <td data-label="שם ופרטי הזוכה">{winnerDetails}</td>
            <td data-label="מציעים">{Array.isArray(participants) ? participants.join(', ') : participants}</td>
            <td data-label="שם הזוכה">{winnerName}</td>
            <td data-label="סכום ההצעה">{bidAmount}</td>
            <td data-label="אומדן">{estimate}</td>
        </tr>
    );
}

Item.propTypes = {
    company: PropTypes.string.isRequired,
    nameTender: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    dateSubmission: PropTypes.string.isRequired,
    // category: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.arrayOf(PropTypes.string)
    // ]).isRequired,
    winnerDetails: PropTypes.string.isRequired,
    participants: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    winnerName: PropTypes.string.isRequired,
    bidAmount: PropTypes.string.isRequired,
    estimate: PropTypes.string.isRequired,
};

export default Item;
