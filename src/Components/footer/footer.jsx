import React from 'react';
import styled from 'styled-components';
import logo from '../../image/logo.png';
import { Link } from 'react-router-dom';


const FooterWrapper = styled.footer`
  background: #a1a1a1; /* צבע הרקע שונה ל-a1a1a1 */
  padding: 60px 0 20px;
  color: #d5d5d5;
  border-top: none;
  position: relative;
  display: block;
`;


const FooterContent = styled.div`
  display: flex;
  flex-wrap: nowrap; /* Prevent wrapping */
  justify-content: space-around; /* Add space between columns */
  padding: 0 20px;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  min-width: auto;
  text-align: center;
  min-height: auto;
  margin-bottom: 20px; /* Add space at the bottom */

  h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
  }

  ul, form, div {
    list-style-type: none;
    padding: 0;
    text-align: center;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #0a3f3d; /* Change color on hover */
    }
  }
`;

const Navigation = styled(Column)`
  text-align: center; /* Center the text */
`;

const ContactForm = styled(Column)`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  input, textarea {
    padding: 10px;
    width: 80%;
    border: none;
    border-radius: 4px;

    &:focus {
      border-color: #0a3f3d; /* Change border color on focus */
      box-shadow: none;
      outline: none;
    }
  }

  button {
    padding: 10px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #ddd;
    }
  }
`;

const LogoWrapper = styled(Column)`
  text-align: center;

  img {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const CopyrightWrapper = styled.div`
  flex-basis: 100%; /* Full width */
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Copyright = styled.p`
  color: white;
  font-size: 0.9em;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper className="text-light py-10 fixed-bottom">
      <div className="container">
        <FooterContent className="row">
          <Column className="col-md-3 mb-4">
            <h3>ניווט</h3>
            <ul className="list-unstyled">
              {/* <li><Link to="/Product" className="custom-hover">מכרזים לדוגמה</Link></li> */}
              {/* <li><a href="#" className="custom-hover">מסלולי מנוי</a></li> */}
              <li><Link to="/product" className="custom-hover">מסלולי מנוי</Link></li>
              <li><a href="#" className="custom-hover">ליווי וייעוץ</a></li>
              <li><a href="#" className="custom-hover">אודות</a></li>
              <li><a href="#" className="custom-hover">שאלות ותשובות</a></li>
              <li><a href="#" className="custom-hover">צור קשר</a></li>
              <li><a href="#" className="custom-hover">כניסת מנויים</a></li>
            </ul>
          </Column>
          <Column className="col-md-6 mb-4">
            <h3>צור קשר</h3>
            <form>
              <input type="text" className="form-control mb-1 custom-input" placeholder="שם" />
              <input type="text" className="form-control mb-1 custom-input" placeholder="משפחה" />
              <input type="email" className="form-control mb-1 custom-input" placeholder="מייל" />
              <input type="tel" className="form-control mb-1 custom-input" placeholder="נייד" />
              <textarea className="form-control mb-1 custom-input" placeholder="הודעה"></textarea>
              <button type="submit" className="btn btn-light">שלח הודעה</button>
            </form>
          </Column>
          <Column className="col-md-3 mt-5">
            <LogoWrapper>
              <img src={logo} alt="לוגו של החברה" className="img-fluid mb-3" />
            </LogoWrapper>
          </Column>
        </FooterContent>
        <div className="row">
          <div className="col text-center">
            <p>כל הזכויות שמורות &copy; 2024</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;