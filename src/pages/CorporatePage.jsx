import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '../assets/images/11.jpeg';

const CorporatePage = () => {
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
      <span key={index} style={char === ' ' ? { display: 'inline-block', width: '0.3em' } : {}}>{char === ' ' ? '\u00A0' : char}</span>
    ));
  };

  const benefits = [
    { title: 'Cost Efficiency', description: 'Competitive rates vs. extended-stay hotels with volume discounts for 90+ day stays' },
    { title: 'Employee Satisfaction', description: 'Residential feel with full kitchens, in-unit laundry, and private outdoor space' },
    { title: 'Flexible Terms', description: '30-day minimum stay with month-to-month flexibility and easy extensions' },
    { title: 'Prime Location', description: 'Walking distance to downtown, 5 minutes to Metro-North, close to major employers' },
  ];

  const idealFor = [
    'New hire relocations (30-180 day bridge housing)',
    'Interim executives and consultants',
    'Project-based teams',
    'Acquisitions/merger transition housing',
    'International assignees',
    'Temporary office expansions',
  ];

  const industries = [
    'Financial services (hedge funds, private equity, investment banking)',
    'Healthcare (travel nurses, locum tenens, hospital administration)',
    'Consulting firms',
    'Technology companies',
    'Pharmaceutical and life sciences',
    'Legal and professional services',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative" style={{ height: '60vh', minHeight: '525px', maxHeight: '725px', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Corporate Housing Solutions"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.5)',
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
              CORPORATE RELOCATION<br />SOLUTIONS
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
              marginBottom: '48px',
              maxWidth: '800px',
              margin: '0 auto 48px auto'
            }}>
              Seamless, All-Inclusive Housing for Your Valued Employees
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Request Corporate Rate Quote
              </Link>
              <Link to="/properties" className="btn btn-secondary">
                View Residences
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge & Solution - Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '600px' }}>
          {/* Left - The Challenge (Dark) */}
          <div style={{
            backgroundColor: '#2d2d2d',
            padding: '80px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}>
            <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', minHeight: '400px', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{
                  fontSize: '36px',
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '40px',
                  color: '#E5E4E2',
                  lineHeight: '1.3'
                }}>
                  The Challenge
                </h2>
                <div style={{
                  width: '80px',
                  height: '2px',
                  background: 'linear-gradient(90deg, #E5E4E2, transparent)',
                  marginBottom: '40px'
                }}></div>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.9',
                  color: '#B0B0B0',
                  marginBottom: '0'
                }}>
                  Your company is recruiting top talent to Fairfield County or providing temporary housing for consultants, interim executives, or project-based teams. Extended-stay hotels are expensive and lack the comfort of home. Unfurnished apartments require time-consuming setup.
                </p>
              </div>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: '#E5E4E2',
                marginBottom: '0'
              }}>
                Your employees deserve better.
              </p>
            </div>

            {/* Arrow indicator */}
            <div style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
              backgroundColor: '#E5E4E2',
              clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
              zIndex: 10,
              display: 'none'
            }} className="hidden lg:block"></div>
          </div>

          {/* Right - Our Solution (Light) */}
          <div style={{
            backgroundColor: '#F9F9F9',
            padding: '80px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'inset 10px 0 30px rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', minHeight: '400px', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{
                  fontSize: '36px',
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontWeight: 300,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '40px',
                  color: 'var(--color-text)',
                  lineHeight: '1.3'
                }}>
                  Our Solution
                </h2>
                <div style={{
                  width: '80px',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-text), transparent)',
                  marginBottom: '40px'
                }}></div>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.9',
                  color: 'var(--color-text-light)',
                  marginBottom: '0'
                }}>
                  Timeless Brookfields provides turnkey corporate housing that makes relocation effortless. From the moment your employee arrives, everything is ready: fully furnished residences, all utilities connected, premium appliances stocked, high-speed internet active, and professional cleaning scheduled.
                </p>
              </div>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                color: 'var(--color-text)',
                marginBottom: '0'
              }}>
                One monthly rate. Zero hassles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              color: 'var(--color-text)'
            }}>
              Benefits for Your Organization
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto'
            }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  color: 'var(--color-text)'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '14px',
                  lineHeight: '1.8',
                  color: 'var(--color-text-light)'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section style={{ backgroundColor: '#ECEAE6', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '56px',
              color: 'var(--color-text)',
              textAlign: 'center'
            }}>
              Ideal For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {idealFor.map((use, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <span style={{
                    fontSize: '20px',
                    color: 'var(--color-text)',
                    flexShrink: 0
                  }}>—</span>
                  <span style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    color: 'var(--color-text-light)'
                  }}>
                    {use}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div className="text-center mb-20">
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              color: 'var(--color-text)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              YOUR CORPORATE HOUSING SOLUTION
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
          </div>

          <div className="flex justify-center">
            <div style={{ width: '100%', maxWidth: '1100px', overflowX: 'auto' }}>
              <div className="grid grid-cols-4 gap-0" style={{ border: '1px solid #E5E5E5', minWidth: '800px' }}>
              {/* Header Row */}
              <div style={{ padding: '20px 16px', backgroundColor: '#F9F9F9', borderRight: '1px solid #E5E5E5' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: 0
                }}>Features</p>
              </div>
              <div style={{ padding: '20px 16px', backgroundColor: '#242121', borderRight: '1px solid #E5E5E5' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: 0,
                  textAlign: 'center'
                }}>Timeless Brookfields</p>
              </div>
              <div style={{ padding: '20px 16px', backgroundColor: '#F9F9F9', borderRight: '1px solid #E5E5E5' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: 0,
                  textAlign: 'center'
                }}>Hotels</p>
              </div>
              <div style={{ padding: '20px 16px', backgroundColor: '#F9F9F9' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: 0,
                  textAlign: 'center'
                }}>Apartments</p>
              </div>

              {/* CATEGORY 1: ALL-INCLUSIVE MONTHLY RATE */}
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', backgroundColor: '#F5F5F5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--color-text)', marginBottom: 0 }}>All-Inclusive Monthly Rate</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5' }}></div>

              {/* Sub-item: All Utilities Included */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>All Utilities Included</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>

              {/* Sub-item: Fully Furnished */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Fully Furnished</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>

              {/* Sub-item: Flexible Lease Terms */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Flexible Lease Terms</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#4CAF50' }}>Usually</span>
              </div>

              {/* Sub-item: In-Unit Washer & Dryer */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>In-Unit Washer & Dryer</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>

              {/* Sub-item: Dedicated Parking Included */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Dedicated Parking Included</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Extra Cost</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>

              {/* Sub-item: Dedicated Workspace + High-Speed WiFi */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Dedicated Workspace + High-Speed WiFi</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Varies</span>
              </div>

              {/* CATEGORY 2: FULL KITCHEN */}
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', backgroundColor: '#F5F5F5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--color-text)', marginBottom: 0 }}>Full Kitchen <span style={{ color: '#4CAF50', fontSize: '11px', fontWeight: 400 }}>(Save $30-50/day)</span></p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5' }}></div>

              {/* Sub-item: Separate Living & Dining Areas */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Separate Living & Dining Areas</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Suites Only</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>

              {/* Sub-item: Separate Bedrooms */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Separate Bedrooms</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Suites Only</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>

              {/* Sub-item: Premium Appliances */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Premium Appliances</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Rare</span>
              </div>

              {/* CATEGORY 3: HISTORIC CHARACTER + 2025 RENOVATION */}
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', backgroundColor: '#F5F5F5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--color-text)', marginBottom: 0 }}>Historic Character + 2025 Renovation</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}></div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5' }}></div>

              {/* Sub-item: Tranquil Residential Setting · Downtown Convenience */}
              <div style={{ padding: '18px 16px 18px 32px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', color: 'var(--color-text)', marginBottom: 0 }}>Tranquil Residential Setting · Downtown Convenience</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center', backgroundColor: '#F9FFF9' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Rare</span>
              </div>

              {/* CATEGORY 4: FLEXIBLE HOUSEKEEPING SERVICES */}
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', backgroundColor: '#F5F5F5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--color-text)', marginBottom: 0 }}>Flexible Housekeeping Services</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#4CAF50' }}>Weekly/Biweekly</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#999999' }}>✗</span>
              </div>

              {/* CATEGORY 5: PET-FRIENDLY */}
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', backgroundColor: '#F5F5F5' }}>
                <p style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--color-text)', marginBottom: 0 }}>Pet-Friendly (No Extra Days)</p>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '18px', color: '#4CAF50' }}>✓</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', borderRight: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#999999' }}>$50-100/night</span>
              </div>
              <div style={{ padding: '18px 16px', borderTop: '1px solid #E5E5E5', textAlign: 'center' }}>
                <span style={{ fontSize: '12px', color: '#999999' }}>Varies</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Process - Section 5 Style */}
      <section style={{ backgroundColor: '#2d2d2d' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Text */}
          <div className="flex items-center justify-center p-16 lg:p-24">
            <div style={{ maxWidth: '500px' }}>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: '#FFFFFF'
              }}>
                Corporate Inquiry Process
              </h2>
              <div style={{
                width: '60px',
                height: '1px',
                backgroundColor: '#FFFFFF',
                marginBottom: '32px'
              }}></div>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '15px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '0'
              }}>
                Getting started with Timeless Brookfields is simple and straightforward. Our streamlined five-step process ensures your corporate housing needs are handled efficiently, from initial inquiry to your employee's arrival. We handle all the details so you can focus on what matters most.
              </p>
            </div>
          </div>
          {/* Right - Flow Diagram */}
          <div style={{ backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px', minHeight: '500px' }}>
            <div style={{ maxWidth: '400px', width: '100%' }}>
              {[
                { step: '1', title: 'Contact Us', description: 'Share employee details and dates' },
                { step: '2', title: 'Get Quote', description: 'Receive availability and corporate rates' },
                { step: '3', title: 'Simple Agreement', description: 'Flexible terms, easy process' },
                { step: '4', title: 'Direct Billing', description: 'Invoice sent to your company' },
                { step: '5', title: 'White-Glove Service', description: 'Seamless experience for your employee' },
              ].map((item, index) => (
                <div key={index} style={{ position: 'relative', marginBottom: index < 4 ? '48px' : '0' }}>
                  {/* Connecting line */}
                  {index < 4 && (
                    <div style={{
                      position: 'absolute',
                      left: '29px',
                      top: '60px',
                      width: '2px',
                      height: '48px',
                      backgroundColor: '#9CA3AF'
                    }}></div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'flex-start',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #FFFFFF, #808080)',
                      backgroundOrigin: 'border-box',
                      backgroundClip: 'padding-box, border-box',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      flexShrink: 0,
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundImage = 'linear-gradient(135deg, #E5E4E2, #A8A9AD), linear-gradient(135deg, #E5E4E2, #A8A9AD)';
                      const span = e.currentTarget.querySelector('span');
                      if (span) span.style.color = '#1a1a1a';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundImage = 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(135deg, #E5E4E2, #A8A9AD)';
                      const span = e.currentTarget.querySelector('span');
                      if (span) span.style.color = '#E5E4E2';
                    }}
                    >
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '20px',
                        fontWeight: 300,
                        color: '#E5E4E2',
                        transition: 'all 0.3s ease'
                      }}>
                        {item.step}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        color: '#E5E4E2'
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '13px',
                        lineHeight: '1.6',
                        color: '#9CA3AF',
                        marginBottom: '0'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '56px',
              color: 'var(--color-text)',
              textAlign: 'center'
            }}>
              We Proudly Serve Employees From
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <span style={{
                    fontSize: '20px',
                    color: 'var(--color-text)',
                    flexShrink: 0
                  }}>—</span>
                  <span style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.7',
                    color: 'var(--color-text-light)'
                  }}>
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="group" style={{ backgroundColor: '#242121', padding: '100px 0', cursor: 'pointer' }}>
        <div className="container text-center">
          <h2 className="property-title" style={{
            fontSize: '32px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            color: '#FFFFFF',
            lineHeight: '1.4'
          }}>
            {splitText('Ready to Simplify Your')}<br />{splitText('Employee Relocations?')}
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#FFFFFF',
            margin: '0 auto 40px auto'
          }}></div>
          <p style={{
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#999999',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px auto'
          }}>
            Contact us today for corporate rate quotes and availability
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request Corporate Rate Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;
