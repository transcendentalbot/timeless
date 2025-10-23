import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companyLocation: '',
    moveInDate: '',
    unitPreference: '',
    lengthOfStay: '',
    occupants: '',
    pets: 'no',
    inquiryType: 'individual',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to Formspree or backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-cream">
        <div className="container text-center">
          <div className="gold-accent"></div>
          <h1 className="section-heading">Get in Touch</h1>
          <p className="section-subheading max-w-2xl mx-auto">
            Ready to experience timeless living in downtown Westport?
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+17472247827" className="text-gray-600 hover:text-primary-500">
                      (747) 224-7827
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:timelessbrookfields@gmail.com" className="text-gray-600 hover:text-primary-500 break-all">
                      timelessbrookfields@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">Monday-Friday</p>
                    <p className="text-gray-600">9 AM - 6 PM EST</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-cream rounded-lg">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-semibold mb-6">Send Us an Inquiry</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  Thank you! We'll respond within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Company Location</label>
                  <input
                    type="text"
                    name="companyLocation"
                    value={formData.companyLocation}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., Stamford, CT or New York, NY"
                  />
                </div>

                {/* Housing Needs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Preferred Move-In Date *</label>
                    <input
                      type="date"
                      name="moveInDate"
                      value={formData.moveInDate}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Unit Preference</label>
                    <select
                      name="unitPreference"
                      value={formData.unitPreference}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">No Preference</option>
                      <option value="1br">1-Bedroom (650 sq ft)</option>
                      <option value="2br">2-Bedroom (950 sq ft)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label">Length of Stay *</label>
                    <select
                      name="lengthOfStay"
                      value={formData.lengthOfStay}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="1-2months">1-2 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="12+months">12+ months</option>
                      <option value="unsure">Unsure</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Number of Occupants *</label>
                    <input
                      type="number"
                      name="occupants"
                      value={formData.occupants}
                      onChange={handleChange}
                      className="form-input"
                      min="1"
                      max="4"
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="form-label">Pets</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pets"
                        value="no"
                        checked={formData.pets === 'no'}
                        onChange={handleChange}
                        className="text-primary-500"
                      />
                      <span>No pets</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="pets"
                        value="yes"
                        checked={formData.pets === 'yes'}
                        onChange={handleChange}
                        className="text-primary-500"
                      />
                      <span>Small pet (describe below)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="form-label">Inquiry Type</label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="individual"
                        checked={formData.inquiryType === 'individual'}
                        onChange={handleChange}
                        className="text-primary-500"
                      />
                      <span>Individual</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="corporate"
                        checked={formData.inquiryType === 'corporate'}
                        onChange={handleChange}
                        className="text-primary-500"
                      />
                      <span>Corporate/Company</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="inquiryType"
                        value="healthcare"
                        checked={formData.inquiryType === 'healthcare'}
                        onChange={handleChange}
                        className="text-primary-500"
                      />
                      <span>Healthcare Professional</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    rows="4"
                    placeholder="Tell us about your housing needs, ask questions, or request additional information..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full md:w-auto px-12">
                  Submit Inquiry
                </button>

                <p className="text-xs text-gray-500">
                  We respect your privacy. Your information will only be used to respond to your inquiry
                  and will not be shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
