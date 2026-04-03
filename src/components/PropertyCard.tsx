import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Heart } from 'lucide-react';
import { Property } from '../data/mockData';
import { cn } from '../lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  return (
    <div className={cn("group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700", className)}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium text-white",
            property.type === 'sale' ? "bg-gold-500" : "bg-navy-900"
          )}>
            {property.type === 'sale' ? 'للبيع' : 'للإيجار'}
          </span>
          {property.featured && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
              مميز
            </span>
          )}
        </div>
        <button className="absolute top-4 left-4 w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-gray-800 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-lg font-bold text-navy-900 dark:text-white">
          {property.price.toLocaleString()} {property.currency}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
          <MapPin className="w-4 h-4 text-gold-500" />
          <span>{property.location}، {property.city}</span>
        </div>
        
        <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4 line-clamp-1 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
          <Link to={`/property/${property.id}`}>
            {property.title}
          </Link>
        </h3>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <BedDouble className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Bath className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <Square className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <span className="font-medium" dir="ltr">{property.area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
