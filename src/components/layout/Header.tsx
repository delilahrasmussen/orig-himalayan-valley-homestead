import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mountain } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../../constants';
import { Button } from '../ui/Button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg = isScrolled || !isHomePage || isMobileMenuOpen
    ? 'bg-white shadow-sm'
    : 'bg-transparent';

  const textColor = isScrolled || !isHomePage || isMobileMenuOpen
    ? 'text-stone-800'
    : 'text-white';

  const logoColor = isScrolled || !isHomePage || isMobileMenuOpen
    ? 'text-forest-700'
    : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <Mountain className={`w-8 h-8 ${logoColor} transition-colors duration-300`} />
            <div className={`transition-colors duration-300 ${logoColor}`}>
              <span className="font-serif font-semibold text-lg leading-tight block">
                Himalayan Valley
              </span>
              <span className="text-xs tracking-wider uppercase opacity-80">
                Homestead
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-white/10 ${
                  location.pathname === link.path
                    ? isScrolled || !isHomePage
                      ? 'text-forest-600'
                      : 'text-white'
                    : textColor
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT.phones[0]}`}
              className={`flex items-center gap-2 text-sm font-medium ${textColor} transition-colors duration-200`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{CONTACT.phones[0]}</span>
            </a>
            <Button href="/booking" size="sm">
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${textColor} transition-colors duration-200`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg animate-slide-down">
            <nav className="flex flex-col py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-3 text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-forest-600 bg-cream-50'
                      : 'text-stone-700 hover:bg-cream-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-6 py-4 border-t border-stone-100 mt-2">
                <a
                  href={`tel:${CONTACT.phones[0]}`}
                  className="flex items-center gap-2 text-stone-700 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  {CONTACT.phones[0]}
                </a>
                <Button href="/booking" className="w-full">
                  Book Your Stay
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
