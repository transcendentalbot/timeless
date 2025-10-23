import {
  MapIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const LocationPage = () => {
  const dining = [
    { name: 'Bar Taco', address: '20 Wilton Road', description: 'Upscale street tacos with riverside seating' },
    { name: 'The Whelk', address: '575 Riverside Avenue', description: 'James Beard-nominated sustainable seafood' },
    { name: 'Gabriele\'s of Westport', address: '27 Powers Court', description: 'Elegant Italian steakhouse' },
    { name: 'Kawa Ni', address: '19A Bridge Square', description: 'Japanese Izakaya with rooftop lounge' },
  ];

  const culture = [
    { name: 'Westport Library', address: '20 Jesup Road', description: '$30.6M renovated library with MakerSpace' },
    { name: 'Westport Country Playhouse', address: '25 Powers Court', description: '90+ years of Broadway-quality theater' },
    { name: 'Levitt Pavilion', address: '40 Jesup Road', description: '50+ free summer concerts annually' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h1 className="section-heading">Downtown Westport, Connecticut</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Connecticut's Gold Coast: Where Executive Living Meets Coastal Charm
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Westport ranks among Connecticut's safest and most affluent communities, home to
              Bridgewater Associates (the world's largest hedge fund) and the #1 public school district
              in Connecticut. With a 70-minute express train to Manhattan's Grand Central Terminal,
              Westport offers the perfect balance of suburban refinement and urban connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Transportation & Connectivity</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="font-serif font-semibold text-xl mb-2">Metro-North</h3>
              <p className="text-gray-600 text-sm mb-2">5-minute drive to station</p>
              <p className="text-gray-700">70-minute express to Grand Central</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPinIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="font-serif font-semibold text-xl mb-2">Compo Beach</h3>
              <p className="text-gray-600 text-sm mb-2">10-minute drive</p>
              <p className="text-gray-700">Long Island Sound waterfront</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <BuildingOfficeIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="font-serif font-semibold text-xl mb-2">Major Highways</h3>
              <p className="text-gray-600 text-sm mb-2">I-95 & Merritt Parkway</p>
              <p className="text-gray-700">55 miles to Manhattan</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <AcademicCapIcon className="h-12 w-12 text-primary-500 mb-4" />
              <h3 className="font-serif font-semibold text-xl mb-2">Airports</h3>
              <p className="text-gray-600 text-sm mb-2">Multiple options</p>
              <p className="text-gray-700">HPN: 30 min | LGA: 65 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Acclaimed Dining (Walking Distance)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {dining.map((restaurant, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-serif font-semibold text-lg mb-2">{restaurant.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{restaurant.address}</p>
                <p className="text-gray-700">{restaurant.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Cultural Institutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {culture.map((venue, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-lg mb-2">{venue.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{venue.address}</p>
                <p className="text-gray-700 text-sm">{venue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Presence */}
      <section className="py-16">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h2 className="section-heading">Corporate Presence</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <strong className="text-primary-600">Bridgewater Associates</strong> - World's largest hedge fund
              ($92B+ AUM) headquartered in Westport
            </p>
            <p className="text-gray-600">
              Connecticut ranks #2 in the U.S. for hedge fund assets with $384 billion statewide.
              Average financial services wages in Fairfield County reach $266,000.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
