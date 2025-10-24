import { useState, useEffect } from 'react';
import {
  CreditCardIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const TenantPortalPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: CreditCardIcon,
      title: 'Online Rent Payment',
      description: 'Pay rent securely with credit card, debit card, or ACH transfer',
    },
    {
      icon: DocumentTextIcon,
      title: 'Lease Documents',
      description: 'Access your lease agreement, addendums, and important notices',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Maintenance Requests',
      description: 'Submit and track maintenance requests with photo uploads',
    },
    {
      icon: UserCircleIcon,
      title: 'Account Management',
      description: 'Update contact information, set payment preferences, view history',
    },
    {
      icon: CalendarIcon,
      title: 'Important Dates',
      description: 'View lease end date, scheduled inspections, and cleaning services',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Communications',
      description: 'Secure messaging with property management',
    },
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero Section */}
      <section className="relative" style={{
        height: '50vh',
        minHeight: '400px',
        maxHeight: '500px',
        backgroundColor: '#3d3d3d',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white" style={{ maxWidth: '800px', padding: '0 20px' }}>
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              color: '#FFFFFF'
            }}>
              Tenant Portal
            </h1>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#FFFFFF',
              margin: '0 auto 24px auto'
            }}></div>
            <p style={{
              fontSize: '16px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.1em',
              color: '#CCCCCC',
              lineHeight: '1.6'
            }}>
              Manage your residence, payments, and service requests online
            </p>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            backgroundColor: '#F5F5F5',
            padding: '48px 40px',
            border: '1px solid #E0E0E0'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)',
              textAlign: 'center'
            }}>
              Current Clients
            </h2>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  disabled
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '14px',
                    border: '1px solid #D0D0D0',
                    backgroundColor: '#FFFFFF',
                    color: '#999999',
                    cursor: 'not-allowed'
                  }}
                />
              </div>

              <div>
                <label style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  Password
                </label>
                <input
                  type="password"
                  disabled
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                    fontSize: '14px',
                    border: '1px solid #D0D0D0',
                    backgroundColor: '#FFFFFF',
                    color: '#999999',
                    cursor: 'not-allowed'
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  id="remember"
                  disabled
                  style={{ cursor: 'not-allowed' }}
                />
                <label htmlFor="remember" style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  color: '#999999'
                }}>
                  Remember me
                </label>
              </div>

              <button
                type="button"
                disabled
                title="Portal launching soon"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  backgroundColor: '#999999',
                  border: 'none',
                  cursor: 'not-allowed'
                }}
              >
                Login (Coming Soon)
              </button>

              <button
                type="button"
                disabled
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '11px',
                  color: '#999999',
                  textDecoration: 'underline',
                  background: 'none',
                  border: 'none',
                  cursor: 'not-allowed',
                  padding: 0
                }}
              >
                Forgot password?
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section - Dark */}
      <section style={{
        backgroundColor: '#3d3d3d',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '16px',
              color: '#FFFFFF'
            }}>
              Your Portal Will Include
            </h2>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#FFFFFF',
              margin: '0 auto 24px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '14px',
              color: '#CCCCCC',
              letterSpacing: '0.05em'
            }}>
              A comprehensive portal to make managing your residence effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} style={{
                backgroundColor: '#FFFFFF',
                padding: '32px 24px'
              }}>
                <feature.icon style={{ width: '48px', height: '48px', color: 'var(--color-text)', marginBottom: '16px' }} />
                <h3 style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  lineHeight: '1.8',
                  color: 'var(--color-text-light)',
                  marginBottom: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section style={{
        backgroundColor: '#ECEAE6',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            color: 'var(--color-text)',
            lineHeight: '1.5'
          }}>
            Need Immediate Assistance?
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
            We're here to help you with any questions or requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17472247827"
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
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: 'var(--color-text)',
                border: 'none',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1a1a1a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-text)'}
            >
              (747) 224-7827
            </a>
            <a
              href="mailto:sales@timelessbrookfields.com"
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
                justifyContent: 'center',
                padding: '16px 32px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-text)',
                transition: 'background-color 0.3s ease, color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--color-text)';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.color = 'var(--color-text)';
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantPortalPage;
