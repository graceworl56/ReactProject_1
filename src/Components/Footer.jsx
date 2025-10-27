
import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { MdAttachEmail } from 'react-icons/md';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'purple',
    color: '#ecf0f1',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    borderTop: '3px solid purple'
  };

  const sectionStyle = {
    marginBottom: '30px'
  };

  const headingStyle = {
    fontSize: '19px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  const contactInfoStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '8px'
  };

  const emailStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  const phoneStyle = {
    color: '#ecf0f1',
    textDecoration: 'none'
  };

  const builtWithStyle = {
    fontSize: '15px',
    color: 'white',
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid purple'
  };

  const reactStyle = {
    color: 'white',
    fontWeight: 'bold'
  };

  const handleEmailHover = (e) => {
    e.target.style.color = 'white';
  };

  const handleEmailLeave = (e) => {
    e.target.style.color = 'white';
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Contact Us</h3>
        <p style={contactInfoStyle}>
          <a 
            href="mailto:resumebuilder@gmail.com" 
            style={emailStyle}
            onMouseEnter={handleEmailHover}
            onMouseLeave={handleEmailLeave}
          >
            <MdAttachEmail/>
            resumebuilder@gmail.com
          </a>
        </p>
        <p style={contactInfoStyle}>
          <a href="tel:9097654331" style={phoneStyle}>
           <FaPhoneAlt/> 9094568527
          </a>
        </p>
      </div>

      <div style={sectionStyle}>
        <h3 style={headingStyle}>Connect With Us</h3>
        
         
        <div style={{ color: 'white', fontSize: '20px' }}>
          <FaWhatsapp className='me-3'/>
          <FaFacebook className='me-3'/>
          <FaInstagram className='me-3'/>
        </div>
      </div>

      <div style={builtWithStyle}>
         Designed & built with ❤️ using React 
      </div>
    </footer>
  );
};

export default Footer;


