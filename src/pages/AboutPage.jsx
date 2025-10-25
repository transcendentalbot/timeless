import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/images/115Wilton.jpeg';
import sideImageLeft from '../assets/images/27.png';
import sideImageRight from '../assets/images/unit1.png';
import bottomImageLeft from '../assets/images/16.png';
import bottomImageRight from '../assets/images/7.jpeg';
import entrywayImage from '../assets/images/3.jpeg';
import unit1Image from '../assets/images/6.png';
import image7 from '../assets/images/7.jpeg';
import image15 from '../assets/images/15.png';
import image16 from '../assets/images/16.png';
import bedroom1 from '../assets/images/gallery/bedroom1.PNG';
import bedroom2 from '../assets/images/gallery/bedroom2.PNG';
import gallery1 from '../assets/images/gallery/1.png';
import gallery6 from '../assets/images/gallery/6.png';
import gallery7 from '../assets/images/gallery/7.jpeg';
import gallery9 from '../assets/images/gallery/9.jpeg';
import gallery22 from '../assets/images/gallery/22.png';
import gallery27 from '../assets/images/gallery/27.png';

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const carouselImages = [
    { src: bedroom1, alt: 'Modern Bedroom' },
    { src: gallery1, alt: 'Gourmet Kitchen' },
    { src: bedroom2, alt: 'Bedroom Suite' },
    { src: gallery27, alt: 'Interior Detail' },
    { src: gallery22, alt: 'Unit Features' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image - S&P Style */}
      <section className="relative" style={{ overflow: 'hidden', padding: '40px 0', backgroundColor: '#f5f5f5' }}>
        <div className="relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '1000px' }}>
          {/* Left image - rotated slightly left */}
          <div style={{
            position: 'absolute',
            left: '3%',
            top: '-5%',
            zIndex: 1,
            transform: `rotate(-6deg) translateY(${scrollY * 0.15}px)`,
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
            border: '12px solid #ffffff',
            transition: 'transform 0.1s ease-out'
          }}>
            <img
              src={sideImageLeft}
              alt="Interior Detail"
              style={{
                width: '550px',
                height: '650px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Center image - main focal point */}
          <div style={{
            position: 'absolute',
            zIndex: 2,
            transform: `scale(1.05) translateY(${scrollY * 0.08}px)`,
            boxShadow: '0 25px 70px rgba(0,0,0,0.4)',
            backgroundColor: '#ffffff',
            border: '12px solid #ffffff',
            transition: 'transform 0.1s ease-out'
          }}>
            <img
              src={heroImage}
              alt="Timeless Brookfields"
              style={{
                width: '800px',
                height: '900px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Right image - rotated slightly right */}
          <div style={{
            position: 'absolute',
            right: '3%',
            top: '5%',
            zIndex: 4,
            transform: `rotate(6deg) translateY(${scrollY * 0.12}px)`,
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
            border: '12px solid #ffffff',
            transition: 'transform 0.1s ease-out'
          }}>
            <img
              src={sideImageRight}
              alt="Unit Interior"
              style={{
                width: '550px',
                height: '650px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Bottom Left image - rotated slightly left */}
          <div style={{
            position: 'absolute',
            left: '15%',
            bottom: '3%',
            zIndex: 1,
            transform: `rotate(-4deg) translateY(${scrollY * 0.18}px)`,
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
            border: '12px solid #ffffff',
            transition: 'transform 0.1s ease-out'
          }}>
            <img
              src={bottomImageLeft}
              alt="Interior Detail"
              style={{
                width: '450px',
                height: '550px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>

          {/* Bottom Right image - rotated slightly right */}
          <div style={{
            position: 'absolute',
            right: '15%',
            bottom: '3%',
            zIndex: 3,
            transform: `rotate(4deg) translateY(${scrollY * 0.16}px) scaleX(-1)`,
            boxShadow: '0 15px 50px rgba(0,0,0,0.3)',
            border: '12px solid #ffffff',
            transition: 'transform 0.1s ease-out'
          }}>
            <img
              src={bottomImageRight}
              alt="Unit Detail"
              style={{
                width: '450px',
                height: '550px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-center" style={{ zIndex: 10 }}>
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              padding: '20px 60px',
              backdropFilter: 'blur(4px)'
            }}>
              <h1 style={{
                fontSize: '40px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 300,
                color: '#FFFFFF',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                lineHeight: '1.4',
                marginBottom: 0
              }}>
                HISTORIC CHARM MEETS<br />MODERN LUXURY
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section - S&P Style */}
      <section style={{ backgroundColor: 'var(--color-off-white)', padding: '80px 0' }}>
        <div className="container text-center">
          <h2 style={{
            fontSize: '28px',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 300,
            color: 'var(--color-text)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            OUR APPROACH
          </h2>
          <div style={{
            width: '80px',
            height: '1px',
            backgroundColor: 'var(--color-text)',
            margin: '0 auto 80px auto'
          }}></div>

          {/* Numbered Grid - 3x2 Layout */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-20">
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>01</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                SEAMLESS<br />RELOCATION
              </h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>02</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                HISTORIC<br />ELEGANCE
              </h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>03</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                MODERN<br />LUXURY
              </h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>04</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                PRIME<br />LOCATION
              </h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>05</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                FLEXIBLE<br />TERMS
              </h3>
            </div>
            <div className="text-center flex flex-col items-center justify-center">
              <div style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '32px',
                color: '#999999'
              }}>06</div>
              <h3 style={{
                fontSize: '18px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0',
                color: 'var(--color-text)',
                lineHeight: '1.6'
              }}>
                WHITE GLOVE<br />SERVICE
              </h3>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01 - Text on Left, Image on Right */}
      <section style={{ backgroundColor: '#2d2d2d' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Text */}
          <div className="flex items-center justify-center p-16 lg:p-24">
            <div style={{ maxWidth: '500px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>01</div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: '#FFFFFF'
              }}>
                SEAMLESS RELOCATION
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
                At Timeless Brookfields, we understand that relocation is more than finding a place to stay—it's about creating a foundation for success. Our fully furnished executive residences with all utilities included provide the comforts of home from day one.
              </p>
            </div>
          </div>
          {/* Right - Image */}
          <div>
            <img
              src={entrywayImage}
              alt="Elegant entryway"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
          </div>
        </div>
      </section>

      {/* Quote Section After Section 01 */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
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
              ELEVATING EXECUTIVE LIVING
            </h2>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              marginBottom: '0'
            }}>
              Designed for professionals who demand excellence without compromise
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 Description - Center Aligned */}
      <section className="py-section" style={{ backgroundColor: '#ECEAE6' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>02</div>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)'
            }}>
              HISTORIC ELEGANCE
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              textAlign: 'center'
            }}>
              In 2025, we acquired a historic 1886 property in the heart of downtown Westport and transformed it into something extraordinary. Every detail reflects our commitment to quality: premium Samsung Bespoke appliances, quartz countertops, hickory hardwood flooring, and smart home technology throughout. The result is an environment that combines the sophistication of a luxury Manhattan residence with the tranquility of Westport's Gold Coast setting.
            </p>
          </div>
        </div>
      </section>

      {/* Section 02 - Full Width Large Image */}
      <section className="relative" style={{ height: '600px' }}>
        <img
          src={unit1Image}
          alt="Executive Suite"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Section 03 - Modern Luxury - Two Column Layout */}
      <section className="py-section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Left - Number and Title */}
            <div>
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>03</div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: 'var(--color-text)',
                lineHeight: '1.4'
              }}>
                MODERN<br />LUXURY
              </h2>
              <div style={{
                width: '60px',
                height: '1px',
                backgroundColor: 'var(--color-text)',
                marginBottom: '0'
              }}></div>
            </div>
            {/* Right - Description */}
            <div>
              <p style={{
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontSize: '15px',
                lineHeight: '1.8',
                color: 'var(--color-text-light)',
                marginBottom: '0'
              }}>
                Whether you're joining Bridgewater Associates with a 70-minute express commute to Grand Central, starting at Norwalk Hospital, or on a 6-month corporate assignment, our units are designed for professionals who value clean lines and sophisticated design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 03 - Image Carousel */}
      <section className="relative" style={{ height: '600px', overflow: 'hidden' }}>
        {/* Carousel Images */}
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                pointerEvents: currentSlide === index ? 'auto' : 'none'
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
          style={{ padding: '10px' }}
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
          style={{ padding: '10px' }}
          aria-label="Next slide"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="transition-all"
              style={{
                width: currentSlide === index ? '12px' : '8px',
                height: currentSlide === index ? '12px' : '8px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Section 04 - Prime Location - Off-White Background */}
      <section style={{ backgroundColor: '#ECEAE6', padding: '100px 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>04</div>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)'
            }}>
              PRIME LOCATION
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              textAlign: 'center'
            }}>
              Walking distance to acclaimed restaurants like Bar Taco and The Whelk, the renovated Westport Library, and boutique shopping. Five minutes to Metro-North. Ten minutes to Compo Beach. Steps to everything that makes Westport Connecticut's premier Gold Coast community.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05 - Flexible Terms - Dark Background with Images */}
      <section style={{ backgroundColor: '#2d2d2d' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Text */}
          <div className="flex items-center justify-center p-16 lg:p-24">
            <div style={{ maxWidth: '500px' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>05</div>
              <h2 style={{
                fontSize: '24px',
                fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '32px',
                color: '#FFFFFF'
              }}>
                FLEXIBLE TERMS
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
                Whether you need housing for one month or twelve, we offer flexible lease terms tailored to your corporate assignment timeline. From short-term relocations to extended projects, our accommodating approach ensures your housing aligns perfectly with your professional needs.
              </p>
            </div>
          </div>
          {/* Right - 2x2 Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-0">
            <div style={{ overflow: 'hidden', height: '343px' }}>
              <img src={bedroom1} alt="Bedroom 1" className="w-full h-full object-cover" />
            </div>
            <div style={{ overflow: 'hidden', height: '343px' }}>
              <img src={bedroom2} alt="Bedroom 2" className="w-full h-full object-cover" />
            </div>
            <div style={{ overflow: 'hidden', height: '343px' }}>
              <img src={gallery1} alt="Kitchen" className="w-full h-full object-cover" />
            </div>
            <div style={{ overflow: 'hidden', height: '343px' }}>
              <img src={gallery9} alt="Living Space" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 06 - White Glove Service - Light Background */}
      <section style={{ backgroundColor: '#ECEAE6', padding: '100px 0' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ fontSize: '12px', letterSpacing: '0.1em', marginBottom: '24px', color: '#999999' }}>06</div>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '32px',
              color: 'var(--color-text)'
            }}>
              WHITE GLOVE SERVICE
            </h2>
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: 'var(--color-text)',
              margin: '0 auto 32px auto'
            }}></div>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              textAlign: 'center'
            }}>
              From your first inquiry to move-out day, our dedicated team provides personalized attention to every detail. We handle maintenance requests promptly, coordinate with corporate housing coordinators seamlessly, and ensure your stay exceeds expectations. Experience hospitality that makes you feel at home from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section - S&P Style */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
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
              CORPORATE HOUSING REIMAGINED
            </h2>
            <p style={{
              fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
              fontSize: '15px',
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              marginBottom: '0'
            }}>
              Where historic charm meets modern sophistication in Connecticut's premier Gold Coast community
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid - 2x2 Layout Full Width */}
      <section>
        <div className="grid grid-cols-2 gap-0">
          <div style={{ aspectRatio: '2.5/1', overflow: 'hidden' }}>
            <img src={sideImageLeft} alt="Interior Detail" className="w-full h-full object-cover" />
          </div>
          <div style={{ aspectRatio: '2.5/1', overflow: 'hidden' }}>
            <img src={bedroom1} alt="Bedroom" className="w-full h-full object-cover" />
          </div>
          <div style={{ aspectRatio: '2.5/1', overflow: 'hidden' }}>
            <img src={image7} alt="Living Space" className="w-full h-full object-cover" />
          </div>
          <div style={{ aspectRatio: '2.5/1', overflow: 'hidden' }}>
            <img src={sideImageRight} alt="Unit Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTAs - S&P Style */}
      <section className="py-section" style={{ backgroundColor: '#ECEAE6' }}>
        <div className="container text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn btn-primary">
              SCHEDULE A CONSULTATION
            </Link>
            <Link
              to="/properties"
              className="btn btn-secondary"
              style={{
                borderColor: 'var(--color-text)',
                color: 'var(--color-text)'
              }}
            >
              VIEW AVAILABLE RESIDENCES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
