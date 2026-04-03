import { Star, Shield, Clock, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Luxury Real Estate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply dark:bg-navy-900/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('home.heroTitle1')}<span className="text-gold-500">{t('home.heroTitleHighlight')}</span><br />{t('home.heroTitle2')}
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
            {t('home.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">{t('home.featuresTitle')}</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{t('home.featuresSubtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: t('home.feat1Title'), desc: t('home.feat1Desc') },
              { icon: Star, title: t('home.feat2Title'), desc: t('home.feat2Desc') },
              { icon: Clock, title: t('home.feat3Title'), desc: t('home.feat3Desc') },
              { icon: Award, title: t('home.feat4Title'), desc: t('home.feat4Desc') }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gold-50 dark:hover:bg-gray-700 transition-colors group">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  className="w-16 h-16 mx-auto bg-white dark:bg-gray-900 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform"
                >
                  <feature.icon className="w-8 h-8 text-gold-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
