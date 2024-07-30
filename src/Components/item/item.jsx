    import React from 'react';
    import PropTypes from 'prop-types';
    import './item.css';

    function Item({ company, nameTender, datePublished, dateSubmission, category, winnerDetails, offer, winnerData, bidAmount, id }) {
        return (
            <tr>
                <td data-label="שם הגוף">{company}</td>
                <td data-label="שם ומספר המכרז">{nameTender}</td>
                <td data-label="תאריך פרסום">{datePublished}</td>
                <td data-label="תאריך הגשה">{dateSubmission}</td>
                <td data-label="קטגוריות">{Array.isArray(category) ? category.join(', ') : category}</td>
                <td data-label="שם ופרטי הזוכה">{winnerDetails}</td>
                <td data-label="מציעים">{offer}</td>
                <td data-label="מידע על הזוכה">{winnerData}</td>
                <td data-label="סכום ההצעה">{bidAmount}</td>
                <td data-label="ID">{id}</td>
            </tr>
        );
    }

    Item.propTypes = {
        company: PropTypes.string.isRequired,
        nameTender: PropTypes.string.isRequired,
        datePublished: PropTypes.string.isRequired,
        dateSubmission: PropTypes.string.isRequired,
        category: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string)
        ]).isRequired,
        winnerDetails: PropTypes.string.isRequired,
        offer: PropTypes.string.isRequired,
        winnerData: PropTypes.string.isRequired,
        bidAmount: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    };

    export default Item;
