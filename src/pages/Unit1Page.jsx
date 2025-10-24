import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/images/6.jpeg';
import featureImage from '../assets/images/1.jpeg';
import image3 from '../assets/images/3.jpeg';
import image6 from '../assets/images/6.jpeg';
import image7 from '../assets/images/7.jpeg';
import image8 from '../assets/images/8.jpeg';
import image11 from '../assets/images/11.jpeg';
import image12 from '../assets/images/12.jpeg';
import floorplan from '../assets/images/floorplan.jpeg';

const Unit1Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const unitImages = [image3, image6, image7, image8, image11, image12, floorplan];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % unitImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + unitImages.length) % unitImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative" style={{
        height: '60vh',
        minHeight: '525px',
        maxHeight: '725px',
        overflow: 'hidden'
      }}>
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Two-Bedroom Executive Suite - Unit 1"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.5)',
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 style={{
              fontSize: '48px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              color: '#FFFFFF'
            }}>
              UNIT 1
            </h1>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#FFFFFF',
              margin: '0 auto 24px auto'
            }}></div>
            <p style={{
              fontSize: '18px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#FFFFFF'
            }}>
              Two-Bedroom Executive Suite
            </p>
          </div>
        </div>
      </section>

      {/* Description Section with Highlights */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            color: 'var(--color-text)',
            lineHeight: '1.5',
            textAlign: 'center'
          }}>
            ELEGANT RESIDENCE<br />IN THE HEART OF WESTPORT
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
            marginBottom: '48px',
            textAlign: 'center'
          }}>
            Experience executive living at its finest in this beautifully appointed two-bedroom suite. The residence features an elegant entryway leading to a spacious open-plan living and dining area, perfect for both work and relaxation. The gourmet kitchen boasts quartz countertops, premium appliances, and ample storage. Both bedrooms offer generous closet space and peaceful retreats. With in-unit laundry, modern climate control, and thoughtful design throughout, this suite provides all the comforts of home in the heart of downtown Westport.
          </p>

          {/* Specifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '32px',
                fontWeight: 300,
                color: 'var(--color-text)',
                marginBottom: '8px'
              }}>
                950
              </div>
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)'
              }}>
                Square Feet
              </div>
            </div>
            <div className="text-center">
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '32px',
                fontWeight: 300,
                color: 'var(--color-text)',
                marginBottom: '8px'
              }}>
                2
              </div>
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)'
              }}>
                Bedrooms
              </div>
            </div>
            <div className="text-center">
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '32px',
                fontWeight: 300,
                color: 'var(--color-text)',
                marginBottom: '8px'
              }}>
                1
              </div>
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)'
              }}>
                Bathrooms
              </div>
            </div>
            <div className="text-center">
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '32px',
                fontWeight: 300,
                color: 'var(--color-text)',
                marginBottom: '8px'
              }}>
                2-4
              </div>
              <div style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text-light)'
              }}>
                Guests
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Panel Section - Text Left, Image Right */}
      <section style={{ backgroundColor: '#F5F5F5' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Panel - Text */}
          <div style={{
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#3d3d3d'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: '#FFFFFF',
              lineHeight: '1.5'
            }}>
              DESIGNER KITCHEN &<br />OPEN LIVING SPACE
            </h2>
            <div style={{
              width: '80px',
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
              The heart of Unit 1 is its stunning designer kitchen, featuring premium quartz countertops, stainless steel appliances, and ample storage throughout. The open-concept design seamlessly connects the kitchen to the spacious living and dining areas, creating an ideal environment for both entertaining and everyday living. Floor-to-ceiling windows flood the space with natural light, while modern finishes and thoughtful design details elevate every corner of this exceptional residence.
            </p>
          </div>

          {/* Right Panel - Feature Image */}
          <div style={{
            aspectRatio: '4/3',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img
              src={featureImage}
              alt="Designer Kitchen Feature"
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.8)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section style={{
        backgroundColor: '#000000',
        padding: '0'
      }}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {unitImages.map((image, index) => (
            <div
              key={index}
              style={{
                aspectRatio: '1',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
              className="group"
              onClick={() => openModal(index)}
            >
              <img
                src={image}
                alt={`Unit 1 - Image ${index + 1}`}
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.8)',
                  transition: 'transform 0.5s ease, filter 0.5s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.filter = 'brightness(1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.filter = 'brightness(0.8)';
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Tagline Section */}
      <section style={{
        backgroundColor: '#ECEAE6',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            color: 'var(--color-text)',
            lineHeight: '1.5',
            textAlign: 'center'
          }}>
            EXPERIENCE EXECUTIVE LIVING<br />IN WESTPORT'S GOLD COAST
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--color-text)',
            margin: '0 auto 48px auto'
          }}></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                justifyContent: 'center',
                padding: '16px 32px',
                position: 'relative',
                border: '1px solid var(--color-text)',
                backgroundColor: '#FFFFFF'
              }}
            >
              <span className="view-border-top" style={{ backgroundColor: 'var(--color-text)' }}></span>
              <span className="view-border-right" style={{ backgroundColor: 'var(--color-text)' }}></span>
              <span className="view-border-bottom" style={{ backgroundColor: 'var(--color-text)' }}></span>
              <span className="view-border-left" style={{ backgroundColor: 'var(--color-text)' }}></span>
              SCHEDULE A TOUR
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Unit1Page;
