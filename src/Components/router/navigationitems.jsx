
const navigationitems = [
    { label: 'התחברות', link: '/login', isAuthRequired: false, isAdmin: false },
    { label: 'התנתקות', link: '/logout', isAuthRequired: true, isAdmin: false },
    { label: 'תמיכה ועזרה', link: '#help-section', isAuthRequired: false, isAdmin: false },
    { label: 'דוגמא למכרזים', link: '#result-section', isAuthRequired: false, isAdmin: false },
    { label: 'תוצאות מכרזים', link: '/categotySelect', isAuthRequired: true, isAdmin: false },
    { label: 'מסלול מנוי', link: '/product', isAuthRequired: false, isAdmin: false },
    { label: 'עלינו', link: '#about-section', isAuthRequired: false, isAdmin: false  },
    { label: 'ניהול משתמשים', link: '/adminDashboard', isAuthRequired: true, isAdmin: true },
    { label: 'ניהול מכרזים', link: '/manageTenders', isAuthRequired: true, isAdmin: true },
];

export default navigationitems;
