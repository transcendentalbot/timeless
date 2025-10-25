import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/images/22.png';
import featureImage from '../assets/images/5.jpeg';
import floorplan from '../assets/images/floorplanunit2b.png';

// Gallery images
import gallery1 from '../assets/images/gallery/1.png';
import gallery6 from '../assets/images/gallery/6.png';
import gallery7 from '../assets/images/gallery/7.jpeg';
import gallery9 from '../assets/images/gallery/9.jpeg';
import gallery16 from '../assets/images/gallery/16.PNG';
import gallery22 from '../assets/images/gallery/22.png';
import gallery27 from '../assets/images/gallery/27.png';
import galleryBedroom1 from '../assets/images/gallery/bedroom1.PNG';
import galleryBedroom2 from '../assets/images/gallery/bedroom2.PNG';
import galleryUnit1 from '../assets/images/gallery/unit1.png';
import galleryUnit1Living from '../assets/images/gallery/unit1living.png';

const Unit2BPage = () => {
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

  const unitImages = [
    galleryUnit1,
    galleryUnit1Living,
    gallery16,
    gallery1,
    gallery22,
    galleryBedroom1,
    gallery9,
    galleryBedroom2,
    gallery7,
    gallery6,
    gallery27,
    floorplan
  ];

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
            alt="One-Bedroom Executive Residence - Unit 2B"
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
              UNIT 2B
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
              One-Bedroom Executive Residence
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
            EFFICIENCY MEETS<br />ELEGANCE
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
            Perfectly suited for the discerning individual executive, this one-bedroom residence combines efficiency with elegance. The smartly designed 650-square-foot space features soaring high ceilings crowned by an expansive skylight that floods the residence with natural light throughout the day. The comfortable bedroom, well-appointed living area, and full kitchen with solid wood white shaker cabinetry accented by elegant gold hardware, premium appliances, and quartz countertops create a sophisticated living environment. Despite its compact footprint, the residence offers all essential amenities including in-unit laundry, climate control, and high-speed internet. The thoughtful layout maximizes space and functionality while maintaining the sophisticated aesthetic that defines Timeless Brookfields.
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
                650
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
                Bedroom
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
                Bathroom
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
                1-2
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
              SMART DESIGN &<br />MODERN AMENITIES
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
              Unit 2B exemplifies intelligent design, where every element serves a purpose without sacrificing style. The distinctive high ceilings and expansive skylight create an airy, light-filled atmosphere that sets this residence apart. The open layout enhances the sense of spaciousness, while the full kitchen with solid wood white shaker cabinetry, elegant gold hardware, quartz countertops, and premium appliances provides complete culinary functionality. The bedroom offers a peaceful retreat with ample closet storage, and the living area adapts seamlessly from workspace to entertainment zone. Modern conveniences like climate control ensure comfort, while the residence's location in a historic 1886 building adds character and charm that modern apartments simply cannot match.
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
              alt="Modern Amenities Feature"
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0.8)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Smart Home & Energy Features Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            color: 'var(--color-text)',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            SMART HOME AUTOMATION<br />& PREMIUM APPLIANCES
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--color-text)',
            margin: '0 auto 48px auto'
          }}></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Home Automation & Appliances */}
            <div>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
                color: 'var(--color-text)'
              }}>
                Smart Appliances & Security
              </h3>
              <ul style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '2',
                color: 'var(--color-text-light)',
                listStyle: 'none',
                padding: 0
              }}>
                <li>• Samsung Bespoke AI Vision Refrigerator with inventory management</li>
                <li>• Samsung Bespoke Microwave with Sensor Cook and Smart app</li>
                <li>• LG ThinQ Smart Washer/Dryer with Sensor Dry technology</li>
                <li>• LG Smart Propane Gas Range with Smart app</li>
                <li>• ADT Security System with mobile app control</li>
                <li>• Keypad entry system - No physical keys needed</li>
              </ul>
            </div>

            {/* Energy Features */}
            <div>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
                color: 'var(--color-text)'
              }}>
                Energy Efficiency
              </h3>
              <ul style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '2',
                color: 'var(--color-text-light)',
                listStyle: 'none',
                padding: 0
              }}>
                <li>• Energy-efficient LED recessed lighting throughout</li>
                <li>• Smart appliances with energy-saving modes</li>
                <li>• Modern LED fixtures in all rooms</li>
                <li>• Clean-burning propane gas for cooking</li>
              </ul>
            </div>

            {/* Sustainable Living */}
            <div>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '24px',
                color: 'var(--color-text)'
              }}>
                Healthy & Sustainable Living
              </h3>
              <ul style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '2',
                color: 'var(--color-text-light)',
                listStyle: 'none',
                padding: 0
              }}>
                <li>• Premium stainless steel & cast iron cookware provided</li>
                <li>• Glassware for food storage - No plastic containers</li>
                <li>• Zero non-stick coatings or aluminum cookware</li>
                <li>• Comprehensive recycling program</li>
              </ul>
            </div>
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
                alt={`Unit 2B - Image ${index + 1}`}
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

      {/* Image Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              zIndex: 10000,
              padding: '8px'
            }}
            aria-label="Close modal"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '12px',
              zIndex: 10000
            }}
            aria-label="Previous image"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={unitImages[currentImageIndex]}
              alt={`Unit 2B - Image ${currentImageIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              border: 'none',
              borderRadius: '50%',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '12px',
              zIndex: 10000
            }}
            aria-label="Next image"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>

          {/* Image Counter */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#FFFFFF',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '14px',
              letterSpacing: '0.1em',
              zIndex: 10000
            }}
          >
            {currentImageIndex + 1} / {unitImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Unit2BPage;
