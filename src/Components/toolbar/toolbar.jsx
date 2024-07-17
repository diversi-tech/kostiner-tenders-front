import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navigationitems from '../router/navigationitems';
import './toolbar.css';
import logo from '../../image/logo.png';

const Toolbar = ({ isAuthenticated, isAdmin, setScrollToSection }) => {
    const navigate = useNavigate();

    const handleNavItemClick = (e, item) => {
        if (item.link.startsWith('#')) {
            e.preventDefault();
            const sectionId = item.link.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                const yOffset = window.innerWidth < 768 ? -220 : -125; // Adjust this value to set the offset
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({
                    top: y,
                    behavior: 'smooth',
                });
                navigate('/', { state: { scrollToSection: sectionId } });
                setScrollToSection(sectionId); // Set state for scrolling after navigating to home
            }
        } else {
            navigate(item.link);
        }
    };

    const renderNavItem = (item, index) => {
        if ((!isAuthenticated && item.isAuthRequired) ||
            (isAuthenticated && item.label === 'התחברות' && !item.isAdmin) ||
            (!isAuthenticated && item.label === 'התנתקות' && !item.isAdmin) ||
            (isAuthenticated && item.label === 'דוגמא למכרזים' && !item.isAdmin) ||
            (!isAuthenticated && item.label === 'תוצאות מכרזים' && !item.isAdmin)) {
            return null;
        }

        if (isAdmin && isAuthenticated) {
            if (item.isAdmin || item.label === 'התנתקות') {
                return (
                    <li key={index} className="navbar-item">
                        <Link to={item.link} className="custom-link" onClick={(e) => handleNavItemClick(e, item)}>{item.label}</Link>
                    </li>
                );
            }
        } else {
            if (!item.isAdmin) {
                return (
                    <li key={index} className="navbar-item">
                        <Link to={item.link} className="custom-link" onClick={(e) => handleNavItemClick(e, item)}>{item.label}</Link>
                    </li>
                );
            }
        }

        return null;
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        navigate('/');
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
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
};

export default Toolbar;