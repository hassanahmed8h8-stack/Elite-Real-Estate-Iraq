import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function TelegramPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Show popup shortly after load
    const showTimer = setTimeout(() => setIsVisible(true), 1000);
    
    // Auto hide after 5 seconds of being shown (total 6s)
    const hideTimer = setTimeout(() => setIsVisible(false), 6000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-6 z-50"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
              <Send className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-4 leading-relaxed">
                {t('popup.text')}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://t.me/telegram"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg font-medium transition-colors"
                >
                  {t('popup.join')}
                </a>
                <button
                  onClick={() => setIsVisible(false)}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 rounded-lg font-medium transition-colors"
                >
                  {t('popup.skip')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
