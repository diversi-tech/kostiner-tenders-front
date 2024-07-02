
const navigationitems = [
    { label: 'הרשמה/התחברות', link: '/Connection', isAuthRequired: false, isAdmin: false },
    { label: 'תמיכה ועזרה', link: '/help', isAuthRequired: false, isAdmin: false },
    {
        label: 'תוצאות מכרזים', link: '/result', isAuthRequired: false, isAdmin: false
    },
    { label: 'מסלול מנוי', link: '/product', isAuthRequired: false, isAdmin: false },
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
];

export default navigationitems;
