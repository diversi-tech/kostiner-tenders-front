
const navigationitems = [
    { label: 'Login/Register', link: '/Connection', isAuthRequired: false, isAdmin: false },
    { label: 'Support and Help', link: '/help', isAuthRequired: false, isAdmin: false },
    {
        label: 'Tender results',
        submenu: [
            { label: 'One-time report', link: '/one_time' },
            { label: 'Monthly report', link: '/monthly' },
            { label: 'Permanent subscription', link: '/subscription' },
        ],
        isAuthRequired: false,
        isAdmin: false,
    },
    { label: 'Tenders for purchase', link: '/tenders-for-purchase', isAuthRequired: false, isAdmin: false },
    {
        label: 'General',
        submenu: [
            { label: 'Introduction', link: '/introduction' },
            { label: 'About', link: '/about' },
        ],
        isAuthRequired: false,
        isAdmin: false,
    },
    { label: 'Logout', link: '/logout', isAuthRequired: true, isAdmin: false },
    { label: 'Profile Management', link: '/profile-management', isAuthRequired: true, isAdmin: false },
    { label: 'Cleaning', link: '/cleaning', isAuthRequired: true, isAdmin: false },
    { label: 'Control Panel', link: '/control-panel', isAuthRequired: true, isAdmin: true },
    { label: 'User Management', link: '/user-management', isAuthRequired: true, isAdmin: true },
];

export default navigationitems;
