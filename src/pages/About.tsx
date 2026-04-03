import { Building2, Users, Target, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Hero Section */}
      <div className="bg-navy-900 text-white py-20 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Office Building" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">{t('about.storyTitle')}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.storyP1')}
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('about.storyP2')}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">{t('about.valuesTitle')}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">{t('about.valuesSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { icon: Award, title: t('about.val1Title'), desc: t('about.val1Desc') },
            { icon: Users, title: t('about.val2Title'), desc: t('about.val2Desc') },
            { icon: Target, title: t('about.val3Title'), desc: t('about.val3Desc') },
            { icon: Building2, title: t('about.val4Title'), desc: t('about.val4Desc') }
          ].map((value, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
              <p className="text-gray-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
