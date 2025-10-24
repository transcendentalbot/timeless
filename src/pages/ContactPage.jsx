const ContactPage = () => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Page Title */}
      <section style={{
        padding: '120px 0 80px 0',
        backgroundColor: '#FFFFFF'
      }}>
        <div className="container">
          <h1 style={{
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontSize: '32px',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-text)',
            marginBottom: '0'
          }}>
            Contact
          </h1>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#E5E5E5'
        }}></div>
      </div>

      {/* Arrange A Private Consultation */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#FFFFFF'
      }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '24px',
                fontWeight: 300,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                marginBottom: '32px'
              }}>
                Arrange A Private Consultation
              </h2>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '40px'
              }}>
                Whether you're seeking temporary housing for relocation, corporate stays, or executive accommodations, we're here to assist you. Contact us to discuss your unique needs and discover how Timeless Brookfields can provide the perfect solution.
              </p>
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-light)',
                  marginBottom: '12px'
                }}>
                  Email
                </p>
                <a
                  href="mailto:timelessbrookfields@gmail.com"
                  style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#666666'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
                >
                  timelessbrookfields@gmail.com
                </a>
              </div>
            </div>

            <div>
              {/* Optional: Add an image or leave empty for whitespace */}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#E5E5E5'
        }}></div>
      </div>

      {/* Headquarters */}
      <section style={{
        padding: '80px 0 120px 0',
        backgroundColor: '#FFFFFF'
      }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '24px',
                fontWeight: 300,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                marginBottom: '32px'
              }}>
                Headquarters
              </h2>
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: '1.8',
                  color: 'var(--color-text-light)',
                  marginBottom: '4px'
                }}>
                  Downtown Westport, Connecticut
                </p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-light)',
                  marginBottom: '12px'
                }}>
                  Phone
                </p>
                <a
                  href="tel:+17472247827"
                  style={{
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '18px',
                    fontWeight: 300,
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
              <div>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-light)',
                  marginBottom: '12px'
                }}>
                  Office Hours
                </p>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: '1.8',
                  color: 'var(--color-text-light)',
                  marginBottom: '4px'
                }}>
                  Monday — Friday
                </p>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: '1.8',
                  color: 'var(--color-text-light)'
                }}>
                  9:00 AM — 6:00 PM EST
                </p>
              </div>
            </div>

            <div>
              {/* Optional: Add a map or leave empty for whitespace */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
