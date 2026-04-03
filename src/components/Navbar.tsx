import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2, Globe, Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Building2 className={cn("w-8 h-8", isScrolled ? "text-gold-500" : "text-white")} />
            <span className={cn(
              "text-2xl font-bold tracking-tight",
              isScrolled ? "text-navy-900 dark:text-white" : "text-white"
            )}>
              {t('nav.logo1')}<span className="text-gold-500">{t('nav.logo2')}</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-gold-500',
                  isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white/90',
                  location.pathname === link.path && 'text-gold-500'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Lang & Theme Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all",
                isScrolled 
                  ? "text-navy-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                  : "text-white hover:bg-white/20"
              )}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
                isScrolled 
                  ? "text-navy-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800" 
                  : "text-white hover:bg-white/20"
              )}
            >
              <Globe className="w-5 h-5" />
              <span>{t('nav.langToggle')}</span>
            </button>
            <a
              href="tel:+9647750999818"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all",
                isScrolled 
                  ? "bg-navy-900 dark:bg-gold-500 text-white hover:bg-navy-800 dark:hover:bg-gold-600" 
                  : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              )}
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+964 775 099 9818</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all",
                isScrolled ? "text-navy-900 dark:text-white" : "text-white"
              )}
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              onClick={toggleLanguage}
              className={cn(
                "p-2 rounded-full transition-all",
                isScrolled ? "text-navy-900 dark:text-white" : "text-white"
              )}
            >
              <Globe className="w-6 h-6" />
            </button>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-6 h-6", isScrolled ? "text-navy-900 dark:text-white" : "text-white")} />
              ) : (
                <Menu className={cn("w-6 h-6", isScrolled ? "text-navy-900 dark:text-white" : "text-white")} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-lg font-medium p-2 rounded-lg',
                location.pathname === link.path ? 'bg-gold-50 dark:bg-gray-800 text-gold-600 dark:text-gold-500' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+9647750999818"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium bg-navy-900 dark:bg-gold-500 text-white mt-2"
          >
            <Phone className="w-4 h-4" />
            <span dir="ltr">+964 775 099 9818</span>
          </a>
        </div>
      )}
    </header>
  );
}
