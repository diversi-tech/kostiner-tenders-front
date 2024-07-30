// import AnchorTemporaryDrawer from '../EditProfile/AnchorTemporaryDrawer'; // Import the AnchorTemporaryDrawer component

const navigationitems = [
    // {label:<AnchorTemporaryDrawer/>,isAuthRequired:false,isAdmin:false},
    { label: 'התחברות', link: '/login', isAuthRequired: false, isAdmin: false },
    { label: 'התנתקות', link: '/logout', isAuthRequired: true, isAdmin: false },
    { label: 'תמיכה ועזרה', link: '#help-section', isAuthRequired: false, isAdmin: false },
    { label: 'דוגמא למכרזים', link: '#result-section', isAuthRequired: false, isAdmin: false },
    { label: 'תוצאות מכרזים', link: '/categotySelect', isAuthRequired: true, isAdmin: false },
    { label: 'מסלול מנוי', link: '/product', isAuthRequired: false, isAdmin: false },
<<<<<<< Updated upstream
    {
        label: 'כללי',
        submenu: [
            { label: 'מידע', link: '/introduction' },
            { label: 'עלינו', link: '/about' },
        ],
        isAuthRequired: false,
        isAdmin: false,
    },
    { label: 'Logout', link: '/logout', isAuthRequired: true, isAdmin: false },
    { label: 'Profile Management', link: '/profile-management', isAuthRequired: true, isAdmin: false },
    { label: 'Clean ing', link: '/cleaning', isAuthRequired: true, isAdmin: false },
    { label: 'Control Panel', link: '/control-panel', isAuthRequired: true, isAdmin: true },
    { label: 'User Management', link: '/user-management', isAuthRequired: true, isAdmin: true },
=======
    { label: 'עלינו', link: '#about-section', isAuthRequired: false, isAdmin: false  },
    { label: 'ניהול משתמשים', link: '/adminDashboard', isAuthRequired: true, isAdmin: true },
    { label: 'ניהול מכרזים', link: '/manageTenders', isAuthRequired: true, isAdmin: true },
>>>>>>> Stashed changes
];

export default navigationitems;
