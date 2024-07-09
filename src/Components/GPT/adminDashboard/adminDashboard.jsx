import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>לוח מחוונים לניהול</h2>
      <ul>
        <li><Link to="/upload-csv">העלה קובצי CSV למכרז ספציפי</Link></li>
        <li><Link to="/view-tenders">הצג וערוך את פרטי המכרז</Link></li>
      </ul>
    </div>
  );
}

export default AdminDashboard;
