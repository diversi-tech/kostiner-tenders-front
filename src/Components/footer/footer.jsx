import React, {useState, useContext } from 'react';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';
import './footer.css';
import { UserContext } from '../../context/userContext'; // הנחה שיש הקשר חיבור משתמש
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
  const { loggedIn } = useContext(UserContext); // שימוש בהקשר חיבור משתמש
  const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const token = localStorage.getItem('authToken'); // קבלת הטוקן מה-localStorage
        try {
            const response = await axios.post(
                'http://kostiner-tenders-back.onrender.com/auth/contact',
                formData,
                {
                    headers: {
                        // 'Authorization': `${token}`, // הוספת הטוקן בכותרת Authorization
                        'Content-Type': 'application/json'
                    }
                }
            );
            toast.success(response.data.message); 
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            toast.error('There was an error sending the message!'); // הצגת הודעת שגיאה
            console.error('There was an error sending the message!', error);
        }
    };
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-content row">
          <div className="column col-md-3 mb-4">
            <h3>ניווט</h3>
            <ul className="list-unstyled">
              <li><Link to="/product" className="custom-hover">מסלולי מנוי</Link></li>
              <li><Link to="/about" className="custom-hover">עלינו</Link></li>
              <li><Link to="/help" className="custom-hover">עזרה</Link></li>
              {/* <li><a href="#" className="custom-hover">צור קשר</a></li> */}
              {!loggedIn && (
                <li><Link to="/login" className="custom-hover">כניסת מנויים</Link></li>
              )}
            </ul>
          </div>
          {/* <div className="column col-md-6 mb-3 contact-form">
            <h3>צור קשר</h3>
            <form>
              <input type="text" className="form-control mb-1 custom-input" placeholder="שם" />
              <input type="text" className="form-control mb-1 custom-input" placeholder="משפחה" />
              <input type="email" className="form-control mb-1 custom-input" placeholder="מייל" />
              <input type="tel" className="form-control mb-1 custom-input" placeholder="נייד" />
              <textarea className="form-control mb-1 custom-input" placeholder="הודעה"></textarea>
              <button type="submit" className="btn btn-light">שלח הודעה</button>
            </form>
          </div> */}
           <div className="column col-md-6 mb-3 contact-form">
            <h3>צור קשר</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="form-control mb-1 custom-input" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="שם" 
                    required
                />
                <input 
                    type="text" 
                    className="form-control mb-1 custom-input" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="משפחה" 
                    required
                />
                <input 
                    type="email" 
                    className="form-control mb-1 custom-input" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="מייל" 
                    required
                />
                <input 
                    type="tel" 
                    className="form-control mb-1 custom-input" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="נייד" 
                    required
                />
                <textarea 
                    className="form-control mb-1 custom-input" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="הודעה" 
                    required
                />
                <button type="submit" className="btn btn-light">שלח הודעה</button>
            </form>
            <ToastContainer /> {/* הוספת הרכיב של ToastContainer */}
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
