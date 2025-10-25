import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '../assets/images/unit1living.png';
import entrywayImage from '../assets/images/3.jpeg';
import unit1Image from '../assets/images/unit1.png';
import unit2Image from '../assets/images/5.png';
import unit3Image from '../assets/images/22.png';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to split text into animated letters
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index}>{char}</span>
    ));
  };

  return (
    <div className="bg-white">
      {/* Hero Section - S&P Style with Nav Overlay */}
      <section className="relative" style={{ height: '60vh', minHeight: '525px', maxHeight: '725px', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Timeless Brookfields Executive Housing"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.3)',
              objectPosition: 'center',
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        <div
          className="relative z-10 h-full flex items-center justify-center text-center"
          style={{
            paddingTop: '100px',
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="container">
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              color: '#FFFFFF',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              lineHeight: '1.4',
              marginBottom: '32px'
            }}>
              EXECUTIVE CORPORATE HOUSING<br />IN DOWNTOWN WESTPORT
            </h1>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#FFFFFF',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '48px'
            }}>
              FULLY FURNISHED · ALL-INCLUSIVE · FLEXIBLE TERMS
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/properties#available-residences" className="btn btn-primary">
                VIEW AVAILABILITY
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                SCHEDULE TOUR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights - 4 Column Grid - WHITE BACKGROUND */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '24px',
                color: '#999999'
              }}>01</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                HISTORIC<br />BUILDING
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                color: 'var(--color-text-light)',
                lineHeight: '1.6'
              }}>
                Built 1886<br />Renovated 2025
              </p>
            </div>
            <div className="text-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '24px',
                color: '#999999'
              }}>02</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                METRO-NORTH<br />ACCESS
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                color: 'var(--color-text-light)',
                lineHeight: '1.6'
              }}>
                5 Minutes to Station<br />70 Min to NYC
              </p>
            </div>
            <div className="text-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '24px',
                color: '#999999'
              }}>03</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                PRIME<br />LOCATION
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                color: 'var(--color-text-light)',
                lineHeight: '1.6'
              }}>
                Walking Distance<br />to Downtown
              </p>
            </div>
            <div className="text-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '24px',
                color: '#999999'
              }}>04</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                ONE MONTHLY<br />PAYMENT
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                color: 'var(--color-text-light)',
                lineHeight: '1.6'
              }}>
                Fully Furnished<br />Utilities Included
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section - Centered - CREAM BACKGROUND */}
      <section style={{ backgroundColor: '#ECEAE6', padding: '100px 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)',
              lineHeight: '1.5'
            }}>
              WHERE HISTORIC CHARM MEETS<br />MODERN SOPHISTICATION
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              marginBottom: '0'
            }}>
              Most professionals face an impossible choice: settle for the cold minimalism of a modern high-rise condo with premium amenities, or embrace the charm of a historic home while sacrificing contemporary luxury. Timeless Brookfields exists because that choice shouldn't have to be made. We've meticulously reimagined this 1886 Westport colonial estate to preserve every ounce of its historic soul—the soaring ceilings, gracious proportions, and authentic architectural character that make these homes irreplaceable—while infusing each residence with the caliber of luxury finishes, smart home technology, and sophisticated amenities found in Connecticut's most exclusive new developments. The result is something genuinely rare: a home where you can enjoy morning coffee in a space steeped in history, then seamlessly control your environment with cutting-edge technology, all without sacrificing an inch of charm or convenience. This is corporate housing reimagined for people who want the best of both worlds—without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Residences Section - Clean Images */}
      <section style={{ backgroundColor: '#F5F5F5' }}>
        {/* Top 2 Units - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <Link to="/properties" style={{ overflow: 'hidden', height: '500px', cursor: 'pointer' }}>
            <img
              src={unit1Image}
              alt="Two-Bedroom Executive Suite"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
          </Link>
          <Link to="/properties" style={{ overflow: 'hidden', height: '500px', cursor: 'pointer' }}>
            <img
              src={unit2Image}
              alt="Two-Bedroom Executive Suite"
              className="w-full h-full object-cover"
              style={{ display: 'block' }}
            />
          </Link>
        </div>

        {/* Unit 3 - Full Width */}
        <Link to="/properties" style={{ overflow: 'hidden', height: '500px', cursor: 'pointer', display: 'block' }}>
          <img
            src={unit3Image}
            alt="One-Bedroom Executive Residence"
            className="w-full h-full object-cover"
            style={{ display: 'block' }}
          />
        </Link>
      </section>

      {/* Location Highlight */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)',
              lineHeight: '1.5'
            }}>
              THE HEART OF DOWNTOWN WESTPORT
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              marginBottom: '48px'
            }}>
              Westport ranks among Connecticut's safest and most affluent communities, home to the world's largest hedge fund and offering a 70-minute express commute to Manhattan's Grand Central Terminal. Our property places you steps from acclaimed dining, cultural venues, and the vibrant downtown corridor.
            </p>
            <Link to="/location" className="btn btn-primary">
              EXPLORE NEIGHBORHOOD
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section style={{ backgroundColor: '#ECEAE6', padding: '100px 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)'
            }}>
              TRUSTED BY LEADING ORGANIZATIONS
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              marginBottom: '48px'
            }}>
              We partner with HR departments and relocation managers to provide turnkey housing for executives, consultants, and healthcare professionals on temporary assignments in Fairfield County.
            </p>
            <Link to="/corporate" className="btn btn-primary">
              CORPORATE SOLUTIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
