import {
  CreditCardIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const TenantPortalPage = () => {
  const features = [
    {
      icon: CreditCardIcon,
      title: 'Online Rent Payment',
      description: 'Pay rent securely with credit card, debit card, or ACH transfer',
    },
    {
      icon: DocumentTextIcon,
      title: 'Lease Documents',
      description: 'Access your lease agreement, addendums, and important notices',
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Maintenance Requests',
      description: 'Submit and track maintenance requests with photo uploads',
    },
    {
      icon: UserCircleIcon,
      title: 'Account Management',
      description: 'Update contact information, set payment preferences, view history',
    },
    {
      icon: CalendarIcon,
      title: 'Important Dates',
      description: 'View lease end date, scheduled inspections, and cleaning services',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Communications',
      description: 'Secure messaging with property management',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h1 className="section-heading">Tenant Portal</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Manage your residence, payments, and service requests online
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16">
        <div className="container max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Current Residents</h2>

            <form className="space-y-4">
              <div>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  disabled
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  disabled
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="rounded text-primary-500"
                  disabled
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>

              <button
                type="button"
                className="btn btn-primary w-full opacity-50 cursor-not-allowed"
                disabled
                title="Portal launching soon"
              >
                Login (Coming Soon)
              </button>

              <button
                type="button"
                className="text-sm text-primary-500 hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Forgot password?
              </button>
            </form>

            <div className="mt-6 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                The tenant portal is currently under development. For immediate assistance, please contact us
                at <a href="tel:+17472247827" className="text-primary-600 font-semibold">(747) 224-7827</a> or{' '}
                <a href="mailto:timelessbrookfields@gmail.com" className="text-primary-600 font-semibold">
                  timelessbrookfields@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-16 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <div className="gold-accent"></div>
            <h2 className="section-heading">Your Portal Will Include</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're building a comprehensive tenant portal to make managing your residence effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
                <span className="absolute top-4 right-4 badge badge-coming-soon">Coming Soon</span>
                <feature.icon className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="font-serif font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-semibold mb-4">Need Immediate Assistance?</h2>
            <p className="text-gray-600 mb-8">
              While we finalize the tenant portal, we're here to help you with any questions or requests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17472247827" className="btn btn-primary">
                (747) 224-7827
              </a>
              <a href="mailto:timelessbrookfields@gmail.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">We respond within 24 hours</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantPortalPage;
