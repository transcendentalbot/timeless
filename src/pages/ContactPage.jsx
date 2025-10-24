import { useState, useEffect } from 'react';
import heroImage from '../assets/images/20.avif';
import image17 from '../assets/images/17.png';
import image18 from '../assets/images/18.webp';
import image19 from '../assets/images/19.webp';
import image21 from '../assets/images/21.jpg';

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mapActive, setMapActive] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyLocation: '',
    moveInDate: '',
    unitPreference: '',
    lengthOfStay: '',
    occupants: '',
    pets: 'no',
    inquiryType: 'individual',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send to Formspree - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          companyLocation: '',
          moveInDate: '',
          unitPreference: '',
          lengthOfStay: '',
          occupants: '',
          pets: 'no',
          inquiryType: 'individual',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('There was an error submitting your inquiry. Please try again or contact us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your inquiry. Please try again or contact us directly.');
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="relative" style={{ height: '60vh', minHeight: '525px', maxHeight: '725px', overflow: 'hidden' }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact Timeless Brookfields"
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
            color: '#FFFFFF'
          }}
        >
          <div className="container">
            <h1 style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '48px',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              color: '#FFFFFF'
            }}>
              Contact
            </h1>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '16px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              opacity: 0.9
            }}>
              Get In Touch With Us
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" style={{
        padding: '80px 0',
        backgroundColor: '#F5F5F5',
        scrollMarginTop: '100px'
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              marginBottom: '32px'
            }}>
              Send Us An Inquiry
            </h2>

              {submitted && (
                <div style={{
                  marginBottom: '32px',
                  padding: '20px',
                  backgroundColor: '#F0F9F4',
                  border: '1px solid #C6E6D5',
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '14px',
                  color: '#2F855A'
                }}>
                  Thank you! We'll respond within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Personal Information */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    marginBottom: '8px'
                  }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '14px',
                      fontWeight: 300,
                      border: '1px solid #E5E5E5',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-text)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Company Location
                    </label>
                    <input
                      type="text"
                      name="companyLocation"
                      value={formData.companyLocation}
                      onChange={handleChange}
                      placeholder="e.g., Stamford, CT or New York, NY"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                </div>

                {/* Housing Needs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Preferred Move-In Date *
                    </label>
                    <input
                      type="date"
                      name="moveInDate"
                      value={formData.moveInDate}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                        colorScheme: 'light',
                        cursor: 'pointer'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Unit Preference
                    </label>
                    <select
                      name="unitPreference"
                      value={formData.unitPreference}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    >
                      <option value="">No Preference</option>
                      <option value="1br">1-Bedroom</option>
                      <option value="2br">2-Bedroom</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Length of Stay *
                    </label>
                    <select
                      name="lengthOfStay"
                      value={formData.lengthOfStay}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    >
                      <option value="">Select duration</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                    </select>
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '12px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--color-text)',
                      marginBottom: '8px'
                    }}>
                      Number of Occupants *
                    </label>
                    <input
                      type="number"
                      name="occupants"
                      value={formData.occupants}
                      onChange={handleChange}
                      min="1"
                      max="4"
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        border: '1px solid #E5E5E5',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--color-text)',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    marginBottom: '12px'
                  }}>
                    Pets
                  </label>
                  <div style={{ display: 'flex', gap: '24px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="pets"
                        value="no"
                        checked={formData.pets === 'no'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-text)' }}
                      />
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--color-text)'
                      }}>
                        No pets
                      </span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="pets"
                        value="yes"
                        checked={formData.pets === 'yes'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-text)' }}
                      />
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--color-text)'
                      }}>
                        Small pet (describe below)
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    marginBottom: '12px'
                  }}>
                    Inquiry Type
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="individual"
                        checked={formData.inquiryType === 'individual'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-text)' }}
                      />
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--color-text)'
                      }}>
                        Individual
                      </span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="corporate"
                        checked={formData.inquiryType === 'corporate'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-text)' }}
                      />
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--color-text)'
                      }}>
                        Corporate/Company
                      </span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value="healthcare"
                        checked={formData.inquiryType === 'healthcare'}
                        onChange={handleChange}
                        style={{ accentColor: 'var(--color-text)' }}
                      />
                      <span style={{
                        fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                        fontSize: '14px',
                        fontWeight: 300,
                        color: 'var(--color-text)'
                      }}>
                        Healthcare Professional
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    marginBottom: '8px'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your housing needs, ask questions, or request additional information..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                      fontSize: '14px',
                      fontWeight: 300,
                      border: '1px solid #E5E5E5',
                      backgroundColor: '#FFFFFF',
                      color: 'var(--color-text)',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-text)'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E5E5'}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    width: 'fit-content',
                    padding: '16px 48px',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    backgroundColor: 'var(--color-text)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-text)'}
                >
                  Submit Inquiry
                </button>

                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '11px',
                  fontWeight: 300,
                  color: '#999999',
                  lineHeight: '1.6',
                  marginTop: '8px'
                }}>
                  We respect your privacy. Your information will only be used to respond to your inquiry
                  and will not be shared with third parties.
                </p>
              </form>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section style={{
        padding: '0',
        backgroundColor: '#000000'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: '0',
          height: '600px'
        }}>
          {/* Image 17 - Takes up left 2 columns and 2 rows */}
          <div style={{
            gridColumn: '1 / 3',
            gridRow: '1 / 3',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src={image17}
              alt="Timeless Brookfields Property"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.8)'
              }}
            />
          </div>
          {/* Image 18 - Top right */}
          <div style={{
            gridColumn: '3 / 5',
            gridRow: '1 / 2',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src={image18}
              alt="Timeless Brookfields Property"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.8)'
              }}
            />
          </div>
          {/* Image 21 - Bottom right spans 2 columns */}
          <div style={{
            gridColumn: '3 / 5',
            gridRow: '2 / 3',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}>
            <img
              src={image21}
              alt="Timeless Brookfields Property"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                filter: 'brightness(0.8)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact with Map Section */}
      <section style={{
        padding: '0',
        backgroundColor: '#E8E8E8'
      }}>
        <style>{`
          .contact-map-grid iframe {
            pointer-events: auto !important;
          }
          /* Hide Google Maps gesture handling overlay */
          .gm-style-pbc {
            display: none !important;
          }
          .gm-style .gm-style-cc {
            display: none !important;
          }
        `}</style>
        <style>{`
          .contact-map-grid {
            display: grid;
            grid-template-columns: 1fr;
          }
          @media (min-width: 1024px) {
            .contact-map-grid {
              grid-template-columns: 35% 65%;
            }
          }
        `}</style>
        <div className="contact-map-grid">
          {/* Left - Contact Info */}
          <div style={{
            padding: '60px 80px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: '#E8E8E8',
            minHeight: '330px'
          }}>
            <div style={{ maxWidth: '500px', paddingTop: '40px' }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '1.4em',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                lineHeight: '1.5',
                color: 'var(--color-text)',
                marginBottom: '60px',
                margin: '0 0 60px 0'
              }}>
                Contact
              </h3>

              <div style={{
                width: '60px',
                height: '1px',
                backgroundColor: 'var(--color-text)',
                marginBottom: '60px'
              }}></div>

              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '1em',
                fontWeight: 300,
                lineHeight: '1.9',
                letterSpacing: '0.05em',
                color: 'var(--color-text-light)',
                marginBottom: '40px'
              }}>
                Downtown Westport, Connecticut
              </p>

              <div style={{ marginBottom: '40px' }}>
                <a
                  href="tel:+17472247827"
                  style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '1em',
                    fontWeight: 300,
                    lineHeight: '1.9',
                    letterSpacing: '0.05em',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#666666'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
                >
                  (747) 224-7827
                </a>
              </div>

              <div style={{ marginBottom: '60px' }}>
                <a
                  href="mailto:sales@timelessbrookfields.com"
                  style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '0.75em',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#666666'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
                >
                  sales@timelessbrookfields.com
                </a>
              </div>

              <div>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '0.75em',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  lineHeight: '1.5',
                  color: 'var(--color-text-light)',
                  marginBottom: '16px'
                }}>
                  Office Hours
                </p>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '1em',
                  fontWeight: 300,
                  lineHeight: '1.9',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-light)',
                  marginBottom: '4px'
                }}>
                  Monday — Friday
                </p>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '1em',
                  fontWeight: 300,
                  lineHeight: '1.9',
                  letterSpacing: '0.05em',
                  color: 'var(--color-text-light)'
                }}>
                  9:00 AM — 6:00 PM EST
                </p>
              </div>
            </div>
          </div>

          {/* Right - Interactive Map */}
          <div
            style={{
              minHeight: '450px',
              backgroundColor: '#E8E8E8',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.3!2d-73.3579!3d41.1415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f60!3m3!1m2!1s0x89e81c4c8c4c8c4d%3A0x1234567890abcdef!2s115%20Wilton%20Rd%2C%20Westport%2C%20CT%2006880!5e0!3m2!1sen!2sus!4v1234567890&gestureHandling=greedy"
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: 'absolute',
                top: 0,
                left: '-200px',
                width: 'calc(100% + 200px)',
                height: '100%',
                filter: 'grayscale(100%) contrast(95%) brightness(108%)',
                pointerEvents: 'auto'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Blur overlay for edges (left, right, bottom only) */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none',
              boxShadow: 'inset 80px 0 80px -40px #E8E8E8, inset -80px 0 80px -40px #E8E8E8, inset 0 -80px 80px -40px #E8E8E8',
              zIndex: 0
            }}></div>
            {/* Extra blur for left edge to blend with contact section */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '80px',
              height: '100%',
              background: 'linear-gradient(to right, #E8E8E8 0%, rgba(232, 232, 232, 0.8) 30%, rgba(232, 232, 232, 0) 100%)',
              pointerEvents: 'none',
              zIndex: 0
            }}></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
