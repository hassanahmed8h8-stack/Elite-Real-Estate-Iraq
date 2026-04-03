import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "9647750999818";
    const selectedType = type || t('contact.type1');
    
    let text = `*طلب تواصل جديد*\n\n`;
    text += `*الاسم:* ${name}\n`;
    text += `*رقم الهاتف:* ${phone}\n`;
    text += `*نوع الاستفسار:* ${selectedType}\n`;
    text += `*الرسالة:* ${message}\n`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-navy-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">{t('contact.infoTitle')}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-50 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold-600 dark:text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white mb-1">{t('contact.addressTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-50 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold-600 dark:text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white mb-1">{t('contact.phoneTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300" dir="ltr">+964 775 099 9818</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-50 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold-600 dark:text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white mb-1">{t('contact.emailTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">info@eliterealestate.iq</p>
                    <p className="text-gray-600 dark:text-gray-300">sales@eliterealestate.iq</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-50 dark:bg-gray-700 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-gold-600 dark:text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white mb-1">{t('contact.hoursTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.hours1')}</p>
                    <p className="text-gray-600 dark:text-gray-300">{t('contact.hours2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-8">{t('contact.formTitle')}</h2>
              
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.nameLabel')}</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-12 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.phoneLabel')}</label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full h-12 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                      placeholder={t('contact.phonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.typeLabel')}</label>
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full h-12 px-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value={t('contact.type1')}>{t('contact.type1')}</option>
                    <option value={t('contact.type2')}>{t('contact.type2')}</option>
                    <option value={t('contact.type3')}>{t('contact.type3')}</option>
                    <option value={t('contact.type4')}>{t('contact.type4')}</option>
                    <option value={t('contact.type5')}>{t('contact.type5')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.messageLabel')}</label>
                  <textarea 
                    rows={6}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-xl border-none focus:ring-2 focus:ring-gold-500 resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="submit" className="flex-1 px-8 h-12 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-bold transition-colors">
                    {t('contact.sendBtn')}
                  </button>
                  <a 
                    href="https://wa.me/9647750999818" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 px-8 h-12 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    {t('contact.directWhatsapp')}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
