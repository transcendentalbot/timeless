import { Link } from 'react-router-dom';
import heroImage from '../assets/images/1.jpeg';
import entrywayImage from '../assets/images/3.jpeg';

const PropertiesPage = () => {
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
      image: heroImage,
      description: 'Spacious two-bedroom residence featuring open-concept living, designer kitchen with quartz countertops, premium appliances, and modern finishes throughout.',
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
      image: entrywayImage,
      description: 'Spacious two-bedroom residence featuring open-concept living, designer kitchen with quartz countertops, premium appliances, and modern finishes throughout.',
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
      image: heroImage,
      description: 'Elegantly appointed one-bedroom residence ideal for individual executives. Features full kitchen, in-unit laundry, and thoughtfully designed living space.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h1 className="section-heading">Executive Residences</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Modern luxury in the heart of downtown Westport
          </p>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {properties.map((property) => (
              <div key={property.id} className="card grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
                <div className="lg:col-span-2 h-64 lg:h-auto">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h2 className="text-2xl font-serif font-semibold">{property.name}</h2>
                    <span className={`badge ${
                      property.status === 'available' ? 'badge-available' : 'badge-occupied'
                    }`}>
                      {property.availability}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">Size:</span>
                      <span className="ml-2 font-semibold">{property.sqft} sq ft</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Bedrooms:</span>
                      <span className="ml-2 font-semibold">{property.bedrooms}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Bathrooms:</span>
                      <span className="ml-2 font-semibold">{property.bathrooms}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Occupancy:</span>
                      <span className="ml-2 font-semibold">{property.occupancy}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{property.description}</p>

                  <div className="flex gap-4">
                    <Link
                      to={`/properties/${property.id}`}
                      className="btn btn-primary"
                    >
                      View Full Details
                    </Link>
                    {property.status === 'occupied' && (
                      <Link
                        to="/contact"
                        className="btn btn-secondary"
                      >
                        Notify When Available
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <h2 className="text-2xl font-serif font-semibold mb-4">
            Questions About Our Properties?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about availability, rates, and lease terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17472247827" className="btn btn-primary">
              (747) 224-7827
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Send Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertiesPage;
