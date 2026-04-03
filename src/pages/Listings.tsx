import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/mockData';

export function Listings() {
  const [filterType, setFilterType] = useState('all');
  const [filterCity, setFilterCity] = useState('all');

  const filteredProperties = properties.filter(p => {
    if (filterType !== 'all' && p.type !== filterType) return false;
    if (filterCity !== 'all' && p.city !== filterCity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* Page Header */}
      <div className="bg-navy-900 text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">العقارات المتاحة</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            تصفح مجموعتنا الواسعة من العقارات السكنية والتجارية في مختلف المدن العراقية
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Filter className="w-5 h-5 text-gold-500" />
                <h2 className="text-xl font-bold text-navy-900">تصفية النتائج</h2>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">بحث بالكلمات</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="ابحث..." 
                      className="w-full h-12 pl-4 pr-10 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نوع المعاملة</label>
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="all">الكل</option>
                    <option value="sale">للبيع</option>
                    <option value="rent">للإيجار</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">المدينة</label>
                  <select 
                    value={filterCity}
                    onChange={(e) => setFilterCity(e.target.value)}
                    className="w-full h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="all">كل المدن</option>
                    <option value="بغداد">بغداد</option>
                    <option value="أربيل">أربيل</option>
                    <option value="البصرة">البصرة</option>
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">نطاق السعر</label>
                  <div className="flex gap-4">
                    <input type="number" placeholder="من" className="w-1/2 h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500" />
                    <input type="number" placeholder="إلى" className="w-1/2 h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500" />
                  </div>
                </div>

                <button className="w-full h-12 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-bold transition-colors mt-4">
                  تطبيق الفلاتر
                </button>
              </div>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                تم العثور على <span className="font-bold text-navy-900">{filteredProperties.length}</span> عقار
              </p>
              <select className="h-10 px-4 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold-500">
                <option>الأحدث أولاً</option>
                <option>السعر: من الأقل للأعلى</option>
                <option>السعر: من الأعلى للأقل</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-navy-900 mb-2">لا توجد نتائج</h3>
                <p className="text-gray-500">حاول تغيير خيارات البحث للعثور على عقارات أكثر.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
