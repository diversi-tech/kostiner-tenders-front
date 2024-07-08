import React from 'react';
import { Link } from 'react-router-dom';
import navigationitems from '../router/navigationitems';
import './toolbar.css';
import logo from '../../image/logo.png';

const Toolbar = ({ isAuthenticated, isAdmin }) => {

    const renderNavItem = (item, index) => {
        // Check if the item should be rendered based on user type
        if ((!isAuthenticated && item.isAuthRequired) || (isAuthenticated && item.label === 'הרשמה/התחברות')) {
            return null;
        }

        // Render items for admin
        if (isAdmin) {
            if (item.isAdmin) {
                return (
                    <li key={index} className="navbar-item">
                        <Link to={item.link} className="custom-link">{item.label}</Link>
                        {item.submenu && (
                            <ul className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link to={subItem.link} className="custom-link">{subItem.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            }
        } else {
            // Render items for non-admin users
            if (!item.isAdmin) {
                return (
                    <li key={index} className="navbar-item">
                        <Link to={item.link} className="custom-link">{item.label}</Link>
                        {item.submenu && (
                            <ul className="submenu">
                                {item.submenu.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <Link to={subItem.link} className="custom-link">{subItem.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            }
        }

        return null; // Default to not rendering the item if conditions are not met
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="navbar">
            <ul className="navbar-list">
                {navigationitems.map((item, index) => renderNavItem(item, index))}
            </ul>
            <img src={logo} alt="Logo" className="navbar-logo" onClick={handleLogoClick} />
        </div>
    );
}

export default Toolbar;
