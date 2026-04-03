import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Building2 className="w-8 h-8 text-gold-500" />
              <span className="text-2xl font-bold tracking-tight">
                {t('nav.logo1')}<span className="text-gold-500">{t('nav.logo2')}</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold-500 transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t('footer.services')}</h3>
            <ul className="space-y-4">
              <li className="text-gray-400">{t('footer.service1')}</li>
              <li className="text-gray-400">{t('footer.service2')}</li>
              <li className="text-gray-400">{t('footer.service3')}</li>
              <li className="text-gray-400">{t('footer.service4')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <span className="text-gray-400">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-gray-400" dir="ltr">+964 775 099 9818</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-gray-400">info@eliterealestate.iq</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link to="#" className="hover:text-gold-500">{t('footer.privacy')}</Link>
            <Link to="#" className="hover:text-gold-500">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
