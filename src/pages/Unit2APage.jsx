import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/images/26.png';
import featureImage from '../assets/images/27.png';
import floorplan from '../assets/images/floorplanunit2a.jpeg';

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

const Unit2APage = () => {
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
            alt="Two-Bedroom Executive Suite - Unit 2A"
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
              UNIT 2A
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
            SOPHISTICATED LIVING<br />IN DOWNTOWN WESTPORT
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
            This exceptional two-bedroom executive suite offers the perfect balance of space and sophistication. Spanning 950 square feet, the open-concept layout features a generous living area with abundant natural light from multiple windows. The gourmet kitchen showcases European-style white matte MDF cabinetry with soft-touch, soft-close mechanisms, quartz countertops, and premium smart appliances. The modern bathroom is appointed with large-format white polished porcelain tiles. The primary bedroom provides peaceful glimpses of the river, while the second bedroom offers comfortable accommodations. A highlight of this residence is the private sunroom, offering a tranquil space flooded with natural light—perfect for morning coffee, reading, or as a home office retreat. Modern amenities include in-unit laundry and high-speed internet connectivity.
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
              SPACIOUS ENTRYWAY &<br />REFINED INTERIORS
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
              Unit 2A welcomes you with an elegant entryway that sets the tone for the entire residence. The thoughtfully designed floor plan maximizes every square foot, with a flowing layout that connects the living spaces while maintaining distinct areas for work, dining, and relaxation. Premium finishes, including quartz countertops and modern fixtures, complement the classic architectural details preserved from the building's 1886 origins. The result is a perfect harmony of historic charm and contemporary luxury living.
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
              alt="Entryway Feature"
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
                alt={`Unit 2A - Image ${index + 1}`}
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
            justifyContent: 'center',
            padding: '40px'
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
              padding: '8px',
              zIndex: 10001
            }}
          >
            <XMarkIcon style={{ width: '32px', height: '32px' }} />
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
              backgroundColor: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 10001
            }}
          >
            <ChevronLeftIcon style={{ width: '40px', height: '40px' }} />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85%',
              maxHeight: '85%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src={unitImages[currentImageIndex]}
              alt={`Unit 2A - Image ${currentImageIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
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
              backgroundColor: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 10001
            }}
          >
            <ChevronRightIcon style={{ width: '40px', height: '40px' }} />
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
              letterSpacing: '0.1em'
            }}
          >
            {currentImageIndex + 1} / {unitImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Unit2APage;
