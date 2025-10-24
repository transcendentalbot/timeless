import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '../assets/images/1.jpeg';
import entrywayImage from '../assets/images/3.jpeg';
import unit1Image from '../assets/images/9.jpeg';
import unit2Image from '../assets/images/6.jpeg';
import unit3Image from '../assets/images/4.jpeg';

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
              <Link to="/properties" className="btn btn-primary">
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
                DOWNTOWN<br />LOCATION
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                color: 'var(--color-text-light)',
                lineHeight: '1.6'
              }}>
                Walking Distance<br />to Everything
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
                ALL-INCLUSIVE<br />LIVING
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
              Timeless Brookfields offers premium executive housing in Connecticut's premier Gold Coast community. Our completely renovated 1886 property combines the elegance of historic architecture with cutting-edge modern amenities. Each spacious residence features generous square footage with abundant natural light from multiple well-appointed windows—providing the perfect blend of classic charm and contemporary comfort without the stark minimalism of modern high-rise condos.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Residences Section - 3 Units Grid */}
      <section style={{ position: 'relative', backgroundColor: '#F5F5F5', boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35), 0 15px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)' }}>
        {/* Centered Heading Overlay */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '14px 38px',
          backdropFilter: 'blur(4px)'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            color: '#FFFFFF',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0',
            whiteSpace: 'nowrap'
          }}>
            AVAILABLE EXECUTIVE RESIDENCES
          </h2>
        </div>

        {/* Top 2 Units - Side by Side - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Unit 1 */}
            <div className="relative group" style={{ overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ aspectRatio: '2/1', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={unit1Image}
                  alt="Two-Bedroom Executive Suite"
                  className="w-full h-full object-cover property-image-zoom"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '40px'
                }}>
                  <h3 className="property-title" style={{
                    fontSize: '24px',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'all 0.4s ease-in-out'
                  }}>
                    {splitText('TWO-BEDROOM')}<br />{splitText('EXECUTIVE')}<span style={{ display: 'inline-block', width: '0.5em' }}> </span>{splitText('SUITE')}
                  </h3>
                  <Link
                    to="/properties"
                    className="view-button"
                    style={{
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '12px 0',
                      width: 'fit-content',
                      position: 'relative'
                    }}
                  >
                    <span className="view-dash" style={{
                      display: 'inline-block',
                      width: '50px',
                      height: '1px',
                      backgroundColor: '#FFFFFF'
                    }}></span>

                    {/* Border drawing elements */}
                    <span className="view-border-top"></span>
                    <span className="view-border-right"></span>
                    <span className="view-border-bottom"></span>
                    <span className="view-border-left"></span>

                    VIEW
                  </Link>
                </div>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="relative group" style={{ overflow: 'hidden', cursor: 'pointer' }}>
              <div style={{ aspectRatio: '2/1', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={unit2Image}
                  alt="Two-Bedroom Executive Suite"
                  className="w-full h-full object-cover property-image-zoom"
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '40px'
                }}>
                  <h3 className="property-title" style={{
                    fontSize: '24px',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontWeight: 300,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    marginBottom: '16px',
                    opacity: 1,
                    transform: 'translateY(0)',
                    transition: 'all 0.4s ease-in-out'
                  }}>
                    {splitText('TWO-BEDROOM')}<br />{splitText('EXECUTIVE')}<span style={{ display: 'inline-block', width: '0.5em' }}> </span>{splitText('SUITE')}
                  </h3>
                  <Link
                    to="/properties"
                    className="view-button"
                    style={{
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '20px',
                      padding: '12px 0',
                      width: 'fit-content',
                      position: 'relative'
                    }}
                  >
                    <span className="view-dash" style={{
                      display: 'inline-block',
                      width: '50px',
                      height: '1px',
                      backgroundColor: '#FFFFFF'
                    }}></span>

                    {/* Border drawing elements */}
                    <span className="view-border-top"></span>
                    <span className="view-border-right"></span>
                    <span className="view-border-bottom"></span>
                    <span className="view-border-left"></span>

                    VIEW
                  </Link>
                </div>
              </div>
            </div>
          </div>

        {/* Unit 3 - Full Width */}
        <div className="relative group" style={{ overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ aspectRatio: '4/1', overflow: 'hidden', position: 'relative' }}>
              <img
                src={unit3Image}
                alt="One-Bedroom Executive Residence"
                className="w-full h-full object-cover property-image-zoom"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '40px'
              }}>
                <h3 className="property-title" style={{
                  fontSize: '24px',
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '16px',
                  opacity: 1,
                  transform: 'translateY(0)',
                  transition: 'all 0.4s ease-in-out'
                }}>
                  {splitText('ONE-BEDROOM')}<br />{splitText('EXECUTIVE')}<span style={{ display: 'inline-block', width: '0.5em' }}> </span>{splitText('RESIDENCE')}
                </h3>
                <Link
                  to="/properties"
                  className="view-button"
                  style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 0',
                    width: 'fit-content',
                    position: 'relative'
                  }}
                >
                  <span className="view-dash" style={{
                    display: 'inline-block',
                    width: '50px',
                    height: '1px',
                    backgroundColor: '#FFFFFF'
                  }}></span>

                  {/* Border drawing elements */}
                  <span className="view-border-top"></span>
                  <span className="view-border-right"></span>
                  <span className="view-border-bottom"></span>
                  <span className="view-border-left"></span>

                  VIEW
                </Link>
              </div>
            </div>
        </div>
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
              EXPLORE LOCATION
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
              CORPORATE INQUIRIES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
