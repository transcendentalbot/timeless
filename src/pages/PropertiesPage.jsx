import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '../assets/images/15.png';
import unit1Image from '../assets/images/9.jpeg';
import unit2Image from '../assets/images/6.jpeg';
import unit3Image from '../assets/images/4.jpeg';
import image1 from '../assets/images/1.jpeg';
import image2 from '../assets/images/2.jpeg';
import image3 from '../assets/images/3.jpeg';
import image4 from '../assets/images/4.jpeg';
import image5 from '../assets/images/5.jpeg';
import image6 from '../assets/images/6.jpeg';
import image7 from '../assets/images/7.jpeg';
import image8 from '../assets/images/8.jpeg';
import image10 from '../assets/images/10.jpeg';
import image11 from '../assets/images/11.jpeg';
import image12 from '../assets/images/12.jpeg';
import floorplan from '../assets/images/floorplan.jpeg';

const PropertiesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState('unit-2a');

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

  const properties = [
    {
      id: 'unit-2a',
      name: 'Two-Bedroom Executive Suite - Unit 2A',
      sqft: 950,
      bedrooms: 2,
      bathrooms: 1,
      occupancy: '2-4 guests',
      availability: 'Available November 2025',
      status: 'available',
      image: unit1Image,
      description: 'Spacious two-bedroom residence featuring open-concept living, designer kitchen with quartz countertops, premium appliances, and modern finishes throughout.',
      detailedDescription: 'This exceptional two-bedroom executive suite offers the perfect balance of space and sophistication. The open-concept layout features a generous living area with abundant natural light from multiple windows, a fully-equipped designer kitchen with quartz countertops and premium stainless steel appliances, and two comfortable bedrooms. Modern amenities include in-unit laundry, central heating and cooling, and high-speed internet connectivity. Ideal for executives, relocating professionals, or small families seeking temporary housing with a permanent feel.',
      images: [image1, image2, image3, image5, image7, image10, floorplan]
    },
    {
      id: 'unit-1',
      name: 'Two-Bedroom Executive Suite - Unit 1',
      sqft: 950,
      bedrooms: 2,
      bathrooms: 1,
      occupancy: '2-4 guests',
      availability: 'Available December 2025',
      status: 'available',
      image: unit2Image,
      description: 'Spacious two-bedroom residence featuring open-concept living, designer kitchen with quartz countertops, premium appliances, and modern finishes throughout.',
      detailedDescription: 'Experience executive living at its finest in this beautifully appointed two-bedroom suite. The residence features an elegant entryway leading to a spacious open-plan living and dining area, perfect for both work and relaxation. The gourmet kitchen boasts quartz countertops, premium appliances, and ample storage. Both bedrooms offer generous closet space and peaceful retreats. With in-unit laundry, modern climate control, and thoughtful design throughout, this suite provides all the comforts of home in the heart of downtown Westport.',
      images: [image3, image6, image7, image8, image11, image12, floorplan]
    },
    {
      id: 'unit-2b',
      name: 'One-Bedroom Executive Residence - Unit 2B',
      sqft: 650,
      bedrooms: 1,
      bathrooms: 1,
      occupancy: '1 guest',
      availability: 'Occupied Until January 2026',
      status: 'occupied',
      image: unit3Image,
      description: 'Elegantly appointed one-bedroom residence ideal for individual executives. Features full kitchen, in-unit laundry, and thoughtfully designed living space.',
      detailedDescription: 'Perfectly suited for the discerning individual executive, this one-bedroom residence combines efficiency with elegance. The smartly designed space features a comfortable bedroom, a well-appointed living area, and a full kitchen equipped with modern appliances and quartz countertops. Despite its compact footprint, the residence offers all essential amenities including in-unit laundry, climate control, and high-speed internet. The thoughtful layout maximizes space and functionality while maintaining the sophisticated aesthetic that defines Timeless Brookfields.',
      images: [image4, image5, image8, image10, image11, floorplan]
    }
  ];

  const selectedPropertyData = properties.find(p => p.id === selectedProperty);

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
            alt="Timeless Brookfields Properties"
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
              EXECUTIVE RESIDENCES
            </h1>
            <div style={{
              width: '80px',
              height: '1px',
              backgroundColor: '#FFFFFF',
              margin: '0 auto'
            }}></div>
          </div>
        </div>
      </section>

      {/* Historic Home Description Section */}
      <section style={{
        backgroundColor: '#FFFFFF',
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
              A HISTORIC HOME<br />REIMAGINED FOR TODAY
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
              marginBottom: '0',
              textAlign: 'center'
            }}>
              Built in 1886, this historic Westport property has been meticulously renovated to offer the perfect fusion of classic architectural charm and contemporary luxury. Each of our three executive residences features generous square footage, abundant natural light from period windows, and modern amenities that today's professionals demand. Unlike sterile modern high-rises, our residences provide character, warmth, and a genuine sense of home—ideal for executives, relocating professionals, and corporate housing needs in Connecticut's prestigious Gold Coast.
            </p>
        </div>
      </section>

      {/* Available Executive Residences Section - Matching HomePage */}
      <section style={{
        position: 'relative',
        backgroundColor: '#F5F5F5',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35), 0 15px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
      }}>
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

        {/* Top 2 Units - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Unit 2A */}
          <Link
            to="/properties/unit-2a"
            className="relative group"
            style={{ overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', display: 'block' }}
          >
            <div style={{ aspectRatio: '2/1', overflow: 'hidden', position: 'relative' }}>
              <img
                src={unit1Image}
                alt="Two-Bedroom Executive Suite - Unit 2A"
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
                <div
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
                  <span className="view-border-top"></span>
                  <span className="view-border-right"></span>
                  <span className="view-border-bottom"></span>
                  <span className="view-border-left"></span>
                  VIEW DETAILS
                </div>
              </div>
            </div>
          </Link>

          {/* Unit 1 */}
          <Link
            to="/properties/unit-1"
            className="relative group"
            style={{ overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', display: 'block' }}
          >
            <div style={{ aspectRatio: '2/1', overflow: 'hidden', position: 'relative' }}>
              <img
                src={unit2Image}
                alt="Two-Bedroom Executive Suite - Unit 1"
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
                <div
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
                  <span className="view-border-top"></span>
                  <span className="view-border-right"></span>
                  <span className="view-border-bottom"></span>
                  <span className="view-border-left"></span>
                  VIEW DETAILS
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Unit 2B - Full Width */}
        <Link
          to="/properties/unit-2b"
          className="relative group"
          style={{ overflow: 'hidden', cursor: 'pointer', textDecoration: 'none', display: 'block' }}
        >
          <div style={{ aspectRatio: '4/1', overflow: 'hidden', position: 'relative' }}>
            <img
              src={unit3Image}
              alt="One-Bedroom Executive Residence - Unit 2B"
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
              <div
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
                <span className="view-border-top"></span>
                <span className="view-border-right"></span>
                <span className="view-border-bottom"></span>
                <span className="view-border-left"></span>
                VIEW DETAILS
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default PropertiesPage;
