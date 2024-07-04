import React from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container py-5">
        <div className="footer-content row">
          <div className="column col-md-3 mb-4">
            <h3>ניווט</h3>
            <ul className="list-unstyled">
              <li><Link to="/product" className="custom-hover">מסלולי מנוי</Link></li>
              <li><a href="#" className="custom-hover">ליווי וייעוץ</a></li>
              <li><a href="#" className="custom-hover">אודות</a></li>
              <li><a href="#" className="custom-hover">שאלות ותשובות</a></li>
              <li><a href="#" className="custom-hover">צור קשר</a></li>
              <li><a href="#" className="custom-hover">כניסת מנויים</a></li>
            </ul>
          </div>
          <div className="column col-md-6 mb-3 contact-form">
            <h3>צור קשר</h3>
            <form>
              <input type="text" className="form-control mb-1 custom-input" placeholder="שם" />
              <input type="text" className="form-control mb-1 custom-input" placeholder="משפחה" />
              <input type="email" className="form-control mb-1 custom-input" placeholder="מייל" />
              <input type="tel" className="form-control mb-1 custom-input" placeholder="נייד" />
              <textarea className="form-control mb-1 custom-input" placeholder="הודעה"></textarea>
              <button type="submit" className="btn btn-light">שלח הודעה</button>
            </form>
          </div>
          <div className="column col-md-3 mt-5 logo-wrapper">
            <img src={logo} alt="לוגו של החברה" className="img-fluid mb-3" />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>כל הזכויות שמורות &copy; 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
