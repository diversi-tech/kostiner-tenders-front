import React from 'react';
import styled from 'styled-components';
import logo from '../image/logo.png';

const FooterWrapper = styled.footer`
  background: #3c3c3c;
  padding: 60px 0 20px;
  color: #d5d5d5;
  border-top: none;
  position: relative;
  display: block;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 0 20px;
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  min-width: auto;
  text-align: center;
  min-height: auto;
  margin-bottom: 20px;

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
      color: rgba(26, 96, 104, 1); /* Change color on hover */
    }
  }
`;

const LogoWrapper = styled(Column)`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .circle {
    width: 70%;
    padding-bottom: 70%;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 49%;
    transform: translateY(-50%);
    z-index: 0;
  }

  img {
    width: 50%;
    max-width: 200px;
    position: relative;
    z-index: 1;
  }
`;

const CopyrightWrapper = styled.div`
  flex-basis: 100%;
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
              <li><a href="#" className="custom-hover">מכרזים לדוגמה</a></li>
              <li><a href="#" className="custom-hover">מסלולי מנוי</a></li>
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
              <input type="text" className="form-control mb-1 custom-input"   />
              <input type="text" className="form-control mb-1 custom-input" placeholder="משפחה" />
              <input type="email" className="form-control mb-1 custom-input" placeholder="מייל" />
              <input type="tel" className="form-control mb-1 custom-input" placeholder="נייד" />
              <textarea className="form-control mb-1" placeholder="הודעה"></textarea>
              <button type="submit" className="btn btn-light">שלח הודעה</button>
            </form>
          </Column>
          <LogoWrapper className="col-md-3 mb-4 mt-md-5 order-md-3 order-1">
            <div className="circle"></div>
            <img src={logo} alt="לוגו של החברה" className="img-fluid mb-3" />
          </LogoWrapper>
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
