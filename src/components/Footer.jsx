import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper function to split text into animated letters
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} style={char === ' ' ? { display: 'inline-block', width: '0.3em' } : {}}>{char === ' ' ? '\u00A0' : char}</span>
    ));
  };

  return (
    <>
      {/* CTA Section - S&P Style */}
      <section className="py-section group" style={{ backgroundColor: '#FFFFFF', cursor: 'pointer' }}>
        <div className="container text-center">
          <h2 className="property-title-dark" style={{
            fontSize: '32px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            color: 'var(--color-text)'
          }}>
            {splitText('BEGIN YOUR STAY WITH')}<br />{splitText('TIMELESS BROOKFIELDS')}
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--color-text)',
            margin: '0 auto 32px auto'
          }}></div>
          <p style={{
            fontSize: '16px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '48px',
            color: 'var(--color-text-light)'
          }}>
            SCHEDULE A TOUR
          </p>
          <Link
            to="/contact#inquiry-form"
            className="view-button"
            style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '20px',
              padding: '12px 0',
              position: 'relative',
              backgroundColor: '#FFFFFF'
            }}
          >
            <span className="view-dash" style={{
              display: 'inline-block',
              width: '50px',
              height: '1px',
              backgroundColor: 'var(--color-text)'
            }}></span>

            {/* Border drawing elements */}
            <span className="view-border-top" style={{ backgroundColor: 'var(--color-text)' }}></span>
            <span className="view-border-right" style={{ backgroundColor: 'var(--color-text)' }}></span>
            <span className="view-border-bottom" style={{ backgroundColor: 'var(--color-text)' }}></span>
            <span className="view-border-left" style={{ backgroundColor: 'var(--color-text)' }}></span>

            INQUIRE NOW
          </Link>
        </div>
      </section>

      {/* Contact Info Section - S&P Style - Slender */}
      <section
        id="contact-section"
        style={{
          backgroundColor: '#3d3d3d',
          padding: '32px 0',
          transition: 'background-color 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3d3d3d'}
      >
        <div className="container text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#CCCCCC'
            }}>
              FOR INQUIRIES & AVAILABILITY
            </span>
            <span style={{ color: '#666666' }}>|</span>
            <a href="tel:+17472247827" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: '#CCCCCC',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}>
              (747) 224-7827
            </a>
            <span style={{ color: '#666666' }}>|</span>
            <a href="mailto:sales@timelessbrookfields.com" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: '#CCCCCC',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#CCCCCC'}>
              SALES@TIMELESSBROOKFIELDS.COM
            </a>
          </div>
        </div>
      </section>

      {/* Footer Main - S&P Style */}
      <footer style={{
        backgroundColor: '#1a1a1a',
        padding: '64px 0 40px 0'
      }}>
        <div className="container">
          {/* Single Line Menu with Centered Slogan - S&P Style */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-20 text-center">
            {/* Left Links */}
            <Link to="/properties" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              PROPERTIES
            </Link>
            <Link to="/location" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              NEIGHBORHOOD
            </Link>
            <Link to="/about" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              ABOUT
            </Link>

            {/* Center Slogan */}
            <span style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              padding: '0 16px'
            }}>
              EXECUTIVE HOUSING REIMAGINED
            </span>

            {/* Right Links */}
            <Link to="/corporate" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              CORPORATE
            </Link>
            <Link to="/contact" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              CONTACT
            </Link>
            <Link to="/portal" style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#999999',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
            onMouseLeave={(e) => e.target.style.color = '#999999'}>
              TENANT PORTAL
            </Link>
          </div>

          {/* Logo Centered */}
          <div className="flex justify-center" style={{ paddingTop: '90px', paddingBottom: '25px' }}>
            <Logo variant="reverse" />
          </div>

          {/* Address - Matching S&P Font Size */}
          <div className="text-center mb-12">
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#999999',
              marginBottom: '0'
            }}>
              DOWNTOWN WESTPORT, CONNECTICUT
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8">
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              color: '#666666',
              marginBottom: '0'
            }}>
              &copy; {currentYear} TIMELESS BROOKFIELDS LLC. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
