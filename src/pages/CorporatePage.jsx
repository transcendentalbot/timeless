import { Link } from 'react-router-dom';
import { CheckCircleIcon, BuildingOfficeIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const CorporatePage = () => {
  const benefits = [
    { title: 'Cost Efficiency', description: 'Competitive rates vs. extended-stay hotels with volume discounts for 90+ day stays' },
    { title: 'Employee Satisfaction', description: 'Residential feel with full kitchens, in-unit laundry, and private outdoor space' },
    { title: 'Flexible Terms', description: '30-day minimum stay with month-to-month flexibility and easy extensions' },
    { title: 'Prime Location', description: 'Walking distance to downtown, 5 minutes to Metro-North, close to major employers' },
  ];

  const idealFor = [
    'New hire relocations (30-180 day bridge housing)',
    'Interim executives and consultants',
    'Project-based teams',
    'Acquisitions/merger transition housing',
    'International assignees',
    'Temporary office expansions',
  ];

  const industries = [
    'Financial services (hedge funds, private equity, investment banking)',
    'Healthcare (travel nurses, locum tenens, hospital administration)',
    'Consulting firms',
    'Technology companies',
    'Pharmaceutical and life sciences',
    'Legal and professional services',
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h1 className="section-heading">Corporate Relocation Solutions</h1>
          <p className="section-subheading max-w-3xl mx-auto">
            Seamless, All-Inclusive Housing for Your Valued Employees
          </p>
        </div>
      </section>

      {/* The Challenge & Solution */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-2xl font-serif font-semibold mb-4">The Challenge</h2>
          <p className="text-gray-700 mb-8">
            Your company is recruiting top talent to Fairfield County or providing temporary housing for
            consultants, interim executives, or project-based teams. Extended-stay hotels are expensive and
            lack the comfort of home. Unfurnished apartments require time-consuming setup. Your employees deserve better.
          </p>

          <h2 className="text-2xl font-serif font-semibold mb-4">Our Solution</h2>
          <p className="text-gray-700 mb-6">
            Timeless Brookfields provides turnkey corporate housing that makes relocation effortless. From the moment
            your employee arrives, everything is ready: fully furnished residences, all utilities connected, premium
            appliances stocked, high-speed internet active, and professional cleaning scheduled. One monthly rate. Zero hassles.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Benefits for Your Organization</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-6">Ideal For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {idealFor.map((use, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Corporate Inquiry Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Contact Us', description: 'Share employee details and dates' },
              { step: '2', title: 'Get Quote', description: 'Receive availability and corporate rates' },
              { step: '3', title: 'Simple Agreement', description: 'Flexible terms, easy process' },
              { step: '4', title: 'Direct Billing', description: 'Invoice sent to your company' },
              { step: '5', title: 'White-Glove Service', description: 'Seamless experience for your employee' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-6 text-center">We Proudly Serve Employees From</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                  <BuildingOfficeIcon className="h-6 w-6 text-primary-500 flex-shrink-0" />
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-charcoal-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-white">
            Ready to Simplify Your Employee Relocations?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for corporate rate quotes and availability
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request Corporate Rate Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporatePage;
