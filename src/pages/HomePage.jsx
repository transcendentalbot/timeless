import { Link } from 'react-router-dom';
import {
  BuildingLibraryIcon,
  MapIcon,
  MapPinIcon,
  SparklesIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

// Import images
import heroImage from '../assets/images/1.jpeg';
import entrywayImage from '../assets/images/3.jpeg';
import unit1Image from '../assets/images/9.jpeg';
import unit2bImage from '../assets/images/6.jpeg';

const HomePage = () => {
  const propertyCards = [
    {
      id: 'unit-2a',
      name: 'Two-Bedroom Executive Suite',
      sqft: 950,
      bedrooms: 2,
      bathrooms: 1,
      availability: 'Available November 2025',
      status: 'available',
      image: heroImage,
    },
    {
      id: 'unit-1',
      name: 'Two-Bedroom Executive Suite',
      sqft: 950,
      bedrooms: 2,
      bathrooms: 1,
      availability: 'Available December 2025',
      status: 'available',
      image: unit1Image,
    },
    {
      id: 'unit-2b',
      name: 'One-Bedroom Executive Residence',
      sqft: 650,
      bedrooms: 1,
      bathrooms: 1,
      availability: 'Occupied Until January 2026',
      status: 'occupied',
      image: unit2bImage,
    },
  ];

  const amenities = [
    'All utilities included (electric, gas, water, fiber internet)',
    'Premium Samsung Bespoke & LG smart appliances',
    'In-unit washer/dryer',
    'Professional cleaning services',
    'Smart home technology (Google Nest, programmable thermostats)',
    'ADT security & video surveillance',
    'Dedicated parking on property',
    '0.25-acre private grounds with firepit',
  ];

  return (
    <div>
      {/* Hero Section - Clean & Professional */}
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="absolute inset-0 bg-gray-900">
          <img
            src={heroImage}
            alt="Timeless Brookfields Executive Housing"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 container text-center text-white py-section-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 text-white letter-tight max-w-4xl mx-auto">
            Executive Corporate Housing in Downtown Westport
          </h1>
          <div className="divider-short mx-auto bg-white"></div>
          <p className="text-base md:text-lg lg:text-xl mb-12 max-w-2xl mx-auto font-light" style={{ color: '#f5f5f5', letterSpacing: '0.05em' }}>
            Fully Furnished · All-Inclusive · Flexible Terms
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/properties" className="btn btn-light">
              View Availability
            </Link>
            <Link to="/contact" className="btn btn-light">
              Schedule Tour
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats - Clean Grid */}
      <section className="py-section section-off-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <BuildingLibraryIcon className="h-12 w-12 mb-4" style={{ color: 'var(--color-text)' }} />
              <p className="text-xs uppercase letter-wide mb-2" style={{ color: 'var(--color-gray-dark)' }}>Historic Building</p>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>Built 1886, Renovated 2025</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapIcon className="h-12 w-12 mb-4" style={{ color: 'var(--color-text)' }} />
              <p className="text-xs uppercase letter-wide mb-2" style={{ color: 'var(--color-gray-dark)' }}>Metro-North</p>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>5 Minutes to Station</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPinIcon className="h-12 w-12 mb-4" style={{ color: 'var(--color-text)' }} />
              <p className="text-xs uppercase letter-wide mb-2" style={{ color: 'var(--color-gray-dark)' }}>Compo Beach</p>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>10 Minutes Away</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SparklesIcon className="h-12 w-12 mb-4" style={{ color: 'var(--color-text)' }} />
              <p className="text-xs uppercase letter-wide mb-2" style={{ color: 'var(--color-gray-dark)' }}>Downtown</p>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>Walking Distance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Preview - Clean Showcases */}
      <section className="py-section bg-white">
        <div className="container text-center mb-20">
          <div className="divider-short mx-auto"></div>
          <h2 className="section-heading">Available Executive Residences</h2>
          <p className="section-subheading mx-auto">
            Modern luxury in the heart of downtown Westport
          </p>
        </div>

        {/* Unit Showcases - Clean Layout */}
        <div className="space-y-32">
          {propertyCards.map((property, index) => (
            <div key={property.id} className="container">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="aspect-4-3 relative overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image w-full h-full object-cover"
                    />
                    <span className={`absolute top-6 right-6 badge ${
                      property.status === 'available' ? 'badge-available' : 'badge-occupied'
                    }`}>
                      {property.availability}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="divider-short mb-8" style={{ marginLeft: 0 }}></div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 letter-tight" style={{ color: 'var(--color-text)' }}>
                    {property.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <p className="text-xs uppercase letter-wide mb-3" style={{ color: 'var(--color-gray-dark)' }}>
                        Size
                      </p>
                      <p className="text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>{property.sqft} sq ft</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase letter-wide mb-3" style={{ color: 'var(--color-gray-dark)' }}>
                        Layout
                      </p>
                      <p className="text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>{property.bedrooms} BR | {property.bathrooms} BA</p>
                    </div>
                  </div>

                  <Link
                    to={`/properties/${property.id}`}
                    className="btn btn-primary"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Timeless Brookfields - Clean Layout */}
      <section className="py-section section-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="aspect-4-3 overflow-hidden">
                <img
                  src={entrywayImage}
                  alt="Elegant entryway"
                  className="property-image w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="divider-short" style={{ marginLeft: 0 }}></div>
              <h2 className="section-heading mb-6">Why Timeless Brookfields</h2>
              <p className="text-base mb-10 leading-relaxed" style={{ color: 'var(--color-text-light)' }}>
                Experience the perfect blend of historic charm and modern luxury. Our completely
                renovated 1886 building offers executive-style living with every convenience included.
              </p>
              <ul className="space-y-4">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircleIcon className="h-5 w-5 flex-shrink-0 mt-1" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-base" style={{ color: 'var(--color-text)' }}>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Highlight - Clean */}
      <section className="py-section bg-white">
        <div className="container text-center">
          <div className="divider-short mx-auto"></div>
          <h2 className="section-heading">The Heart of Downtown Westport</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Westport ranks among Connecticut's safest and most affluent communities, home to the world's
            largest hedge fund and offering a 70-minute express commute to Manhattan's Grand Central Terminal.
            Our property places you steps from acclaimed dining, cultural venues, and the vibrant downtown corridor.
          </p>
          <Link to="/location" className="btn btn-primary">
            Explore Location
          </Link>
        </div>
      </section>

      {/* Corporate Partners - Clean */}
      <section className="py-section section-gray">
        <div className="container text-center">
          <div className="divider-short mx-auto"></div>
          <h2 className="section-heading">Trusted by Leading Organizations</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
            Seamless relocation solutions for employees joining Fairfield County's premier companies
          </p>
          <p className="mb-12 max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
            We partner with HR departments and relocation managers to provide turnkey housing for
            executives, consultants, and healthcare professionals on temporary assignments.
          </p>
          <Link to="/corporate" className="btn btn-primary">
            Corporate Inquiries
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
