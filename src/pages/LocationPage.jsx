import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/images/19.webp';
import image17 from '../assets/images/17.png';
import image18 from '../assets/images/18.webp';
import image19 from '../assets/images/19.webp';
import image20 from '../assets/images/20.avif';
import image21 from '../assets/images/21.jpg';

const LocationPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const propertyAddress = '115 Wilton Rd, Westport, CT 06880';

  // Location data with addresses and estimated distances
  const attractions = {
    'Compo Beach': { address: 'Compo Beach, Westport, CT 06880', distance: '2.5 miles', time: '10 min drive' },
    'Sherwood Island State Park': { address: 'Sherwood Island State Park, Westport, CT 06880', distance: '3.8 miles', time: '12 min drive' },
    'Westport Country Playhouse': { address: '25 Powers Court, Westport, CT 06880', distance: '0.3 miles', time: '5 min walk' },
    'Levitt Pavilion': { address: '40 Jesup Road, Westport, CT 06880', distance: '0.4 miles', time: '8 min walk' },
    'Westport Library': { address: '20 Jesup Road, Westport, CT 06880', distance: '0.4 miles', time: '8 min walk' },
    'Downtown Shopping': { address: 'Main Street, Westport, CT 06880', distance: '0.2 miles', time: '4 min walk' }
  };

  const restaurants = {
    'The Whelk': { address: '575 Riverside Avenue, Westport, CT 06880', distance: '1.2 miles', time: '5 min drive' },
    'Kawa Ni': { address: '19A Bridge Square, Westport, CT 06880', distance: '0.2 miles', time: '4 min walk' },
    'Gabriele\'s of Westport': { address: '27 Powers Court, Westport, CT 06880', distance: '0.3 miles', time: '6 min walk' },
    'Bar Taco': { address: '20 Wilton Road, Westport, CT 06880', distance: '0.1 miles', time: '2 min walk' },
    'Spotted Horse': { address: '32 Riverside Avenue, Westport, CT 06880', distance: '0.7 miles', time: '3 min drive' },
    'Don Memo': { address: '110 Main Street, Westport, CT 06880', distance: '0.2 miles', time: '4 min walk' }
  };

  const allLocations = { ...attractions, ...restaurants };

  const openLocationModal = (name) => {
    setSelectedLocation(name);
    document.body.style.overflow = 'hidden';
  };

  const closeLocationModal = () => {
    setSelectedLocation(null);
    document.body.style.overflow = 'unset';
  };

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

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
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
            alt="Downtown Westport"
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
              Neighborhood
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
              Downtown Westport, Connecticut
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
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
            lineHeight: '1.5'
          }}>
            CONNECTICUT'S GOLD COAST<br />WHERE EXECUTIVE LIVING MEETS COASTAL CHARM
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
            Westport ranks among Connecticut's safest and most affluent communities, home to Bridgewater Associates (the world's largest hedge fund) and the #1 public school district in Connecticut. With a 70-minute express train to Manhattan's Grand Central Terminal, Westport offers the perfect balance of suburban refinement and urban connectivity. This charming riverside town blends New England heritage with contemporary sophistication, featuring pristine beaches on Long Island Sound, acclaimed dining, and a thriving cultural scene.
          </p>
        </div>
      </section>

      {/* Transportation Section - Dark */}
      <section style={{
        backgroundColor: '#3d3d3d',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '48px',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            TRANSPORTATION & CONNECTIVITY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                Metro-North
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                5-minute drive to station
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC'
              }}>
                70-minute express to Grand Central
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                Compo Beach
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                10-minute drive
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC'
              }}>
                Long Island Sound waterfront
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                Major Highways
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                I-95 & Merritt Parkway
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC'
              }}>
                55 miles to Manhattan
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '16px'
              }}>
                Airports
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Multiple options
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC'
              }}>
                HPN: 30 min | LGA: 65 min
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section style={{
        backgroundColor: '#F5F5F5',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            color: 'var(--color-text)',
            textAlign: 'center'
          }}>
            LOCAL ATTRACTIONS
          </h2>
          <p style={{
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontSize: '13px',
            lineHeight: '1.8',
            color: 'var(--color-text-light)',
            marginBottom: '48px',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Minutes from your door
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Compo Beach')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Compo Beach
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                29-acre beachfront park with marina, pickleball courts, skate park, and sandy beach on Long Island Sound
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Compo Beach'].distance} • {attractions['Compo Beach'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Sherwood Island State Park')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Sherwood Island State Park
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                Connecticut's first state park, featuring 325+ acres of pristine waterfront and nature trails
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Sherwood Island State Park'].distance} • {attractions['Sherwood Island State Park'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Westport Country Playhouse')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Westport Country Playhouse
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                90+ years of Broadway-quality theater in an intimate historic venue
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Westport Country Playhouse'].distance} • {attractions['Westport Country Playhouse'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Levitt Pavilion')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Levitt Pavilion
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                50+ free outdoor concerts annually featuring diverse musical performances
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Levitt Pavilion'].distance} • {attractions['Levitt Pavilion'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Westport Library')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Westport Library
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                $30.6M state-of-the-art facility with MakerSpace, innovation center, and extensive collections
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Westport Library'].distance} • {attractions['Westport Library'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Downtown Shopping')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-text)',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#666666'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                Downtown Shopping
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '8px'
              }}>
                Walkable Main Street featuring Lululemon, Tiffany & Co, local boutiques, and Church Lane shops
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {attractions['Downtown Shopping'].distance} • {attractions['Downtown Shopping'].time}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section - Dark */}
      <section style={{
        backgroundColor: '#3d3d3d',
        padding: '80px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            ACCLAIMED DINING
          </h2>
          <p style={{
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontSize: '13px',
            lineHeight: '1.8',
            color: '#CCCCCC',
            marginBottom: '48px',
            textAlign: 'center',
            letterSpacing: '0.05em'
          }}>
            Walking distance from Timeless Brookfields
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('The Whelk')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                The Whelk
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                James Beard-nominated sustainable seafood with waterfront views
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['The Whelk'].distance} • {restaurants['The Whelk'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Kawa Ni')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                Kawa Ni
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Inventive Japanese izakaya with rooftop lounge overlooking Saugatuck River
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['Kawa Ni'].distance} • {restaurants['Kawa Ni'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Gabriele\'s of Westport')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                Gabriele's of Westport
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Elegant Italian steakhouse in downtown Westport
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['Gabriele\'s of Westport'].distance} • {restaurants['Gabriele\'s of Westport'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Bar Taco')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                Bar Taco
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Upscale street tacos with riverside seating and craft cocktails
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['Bar Taco'].distance} • {restaurants['Bar Taco'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Spotted Horse')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                Spotted Horse
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Neighborhood favorite with comfort food classics and outdoor seating
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['Spotted Horse'].distance} • {restaurants['Spotted Horse'].time}
              </p>
            </div>

            <div style={{ textAlign: 'left' }}>
              <h3
                onClick={() => openLocationModal('Don Memo')}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#CCCCCC'}
                onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
              >
                Don Memo
              </h3>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '1.8',
                color: '#CCCCCC',
                marginBottom: '8px'
              }}>
                Creative Mexican fare in historic downtown location
              </p>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '12px',
                color: '#999999',
                letterSpacing: '0.05em'
              }}>
                {restaurants['Don Memo'].distance} • {restaurants['Don Memo'].time}
              </p>
            </div>
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
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0'
        }}>
          {[image17, image18, image19, image20, image21].map((image, index) => (
            <div key={index} style={{
              aspectRatio: '1',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img
                src={image}
                alt={`Westport Location ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.8)'
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Presence Section */}
      <section style={{
        backgroundColor: '#ECEAE6',
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1000px',
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
            marginBottom: '32px',
            color: 'var(--color-text)'
          }}>
            CORPORATE PRESENCE
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
            marginBottom: '24px'
          }}>
            <strong>Bridgewater Associates</strong> — World's largest hedge fund ($92B+ AUM) headquartered in Westport
          </p>
          <p style={{
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontSize: '13px',
            lineHeight: '1.8',
            color: 'var(--color-text-light)'
          }}>
            Connecticut ranks #2 in the U.S. for hedge fund assets with $384 billion statewide. Average financial services wages in Fairfield County reach $266,000.
          </p>
        </div>
      </section>

      {/* Location Modal with Embedded Map */}
      {selectedLocation && (
        <div
          onClick={closeLocationModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              maxWidth: '1100px',
              width: '100%',
              height: '85vh',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLocationModal}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                color: 'var(--color-text)',
                cursor: 'pointer',
                padding: '8px',
                zIndex: 10,
                borderRadius: '2px'
              }}
            >
              <XMarkIcon style={{ width: '24px', height: '24px' }} />
            </button>

            {/* Location Info Header */}
            <div style={{
              padding: '24px 40px',
              backgroundColor: '#F5F5F5',
              borderBottom: '1px solid #E0E0E0',
              flexShrink: 0
            }}>
              <h3 style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-text)',
                marginBottom: '12px'
              }}>
                {selectedLocation}
              </h3>

              <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  color: 'var(--color-text-light)',
                  marginBottom: '0'
                }}>
                  <strong>Distance:</strong> {allLocations[selectedLocation].distance}
                </p>
                <p style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '13px',
                  color: 'var(--color-text-light)',
                  marginBottom: '0'
                }}>
                  <strong>Travel Time:</strong> {allLocations[selectedLocation].time}
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div style={{
              flex: '1',
              width: '100%',
              position: 'relative'
            }}>
              <iframe
                title={`Directions to ${selectedLocation}`}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(propertyAddress)}&destination=${encodeURIComponent(allLocations[selectedLocation].address)}&mode=driving`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
