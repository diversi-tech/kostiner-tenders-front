import React from 'react';
import { Link } from 'react-router-dom';
import navigationitems from '../router/navigationitems';
import './toolbar.css';
import logo from '../../image/logo.png';
import {useState} from "react";
const Toolbar = ({ isAuthenticated, isAdmin }) => {

    const renderNavItem = (item, index) => {
        if (!isAuthenticated && item.isAuthRequired) {
            return null; 
        }
        if (isAuthenticated) {
            if (item.label === 'Login/Register') {
                return null; 
            }
        }
        if (isAdmin && item.isAdmin) {
            return (
                <li key={index} className="navbar-item">
                    <Link to={item.link} className="custom-link">{item.label}</Link>
                </li>
            );
        }
        if (isAuthenticated && !isAdmin) {
            if (item.label === 'Profile Management' || item.label === 'Logout') {
                return (
                    <li key={index} className="navbar-item">
                        <Link to={item.link} className="custom-link">{item.label}</Link>
                    </li>
                );
            }
        }
       

        return (
            <li key={index} className="navbar-item">
                <Link to={item.link} className="custom-link">{item.label}</Link>
                {item.submenu && (
                    <ul className="submenu">
                        {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}  >
                                <Link to={subItem.link} className="custom-link" >{subItem.label}</Link>
                            </li>

                        ))}
                    </ul>
                )}
            </li>
        );
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
