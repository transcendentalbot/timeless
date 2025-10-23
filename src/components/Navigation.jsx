import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'Location', path: '/location' },
    { name: 'About', path: '/about' },
    { name: 'Corporate Housing', path: '/corporate' },
    { name: 'Contact', path: '/contact' },
    { name: 'Tenant Portal', path: '/portal' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #e0e0e0' }}>
      <div style={{
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 48px'
      }}>
        <div className="flex items-center justify-between" style={{ height: '80px' }}>
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation - S&P Style */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
                  fontSize: '11px',
                  fontWeight: 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isActive(link.path) ? 'var(--color-text)' : '#666666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-text)'}
                onMouseLeave={(e) => !isActive(link.path) && (e.target.style.color = '#666666')}
              >
                {link.name}
                {isActive(link.path) && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'var(--color-text)'
                  }}></span>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="btn btn-primary">
              INQUIRE NOW
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-charcoal hover:bg-gray-100"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium px-4 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-charcoal hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary mx-4"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
