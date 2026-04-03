import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square, Check, Phone, Mail, ArrowRight } from 'lucide-react';
import { properties } from '../data/mockData';

export function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pt-24">
        <h1 className="text-3xl font-bold text-navy-900 mb-4">العقار غير موجود</h1>
        <Link to="/listings" className="text-gold-600 hover:text-gold-500 flex items-center gap-2">
          <ArrowRight className="w-5 h-5" />
          العودة للعقارات
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gold-500">الرئيسية</Link>
          <span>/</span>
          <Link to="/listings" className="hover:text-gold-500">العقارات</Link>
          <span>/</span>
          <span className="text-navy-900 font-medium">{property.title}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${property.type === 'sale' ? 'bg-gold-500' : 'bg-navy-900'}`}>
                {property.type === 'sale' ? 'للبيع' : 'للإيجار'}
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4 text-gold-500" />
                {property.location}، {property.city}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900">{property.title}</h1>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gold-600">
              {property.price.toLocaleString()} {property.currency}
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 h-[400px] md:h-[500px]">
          <div className="md:col-span-2 h-full rounded-2xl overflow-hidden">
            <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            {property.images.slice(1, 3).map((img, i) => (
              <div key={i} className="h-1/2 rounded-2xl overflow-hidden">
                <img src={img} alt={`${property.title} ${i+2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Quick Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
              <div className="text-center">
                <BedDouble className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <div className="font-bold text-navy-900">{property.bedrooms}</div>
                <div className="text-sm text-gray-500">غرف نوم</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <Bath className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <div className="font-bold text-navy-900">{property.bathrooms}</div>
                <div className="text-sm text-gray-500">حمامات</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <Square className="w-8 h-8 text-gold-500 mx-auto mb-2" />
                <div className="font-bold text-navy-900" dir="ltr">{property.area} m²</div>
                <div className="text-sm text-gray-500">المساحة</div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">وصف العقار</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">المميزات والمرافق</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-6 h-6 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-gold-600" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-xl font-bold text-navy-900 mb-6">تواصل مع الوكيل</h3>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <img 
                  src={property.agent.image} 
                  alt={property.agent.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold text-navy-900 text-lg">{property.agent.name}</div>
                  <div className="text-gray-500 text-sm">وكيل عقاري معتمد</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <a href={`tel:${property.agent.phone}`} className="flex items-center justify-center gap-2 w-full h-12 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold transition-colors">
                  <Phone className="w-5 h-5" />
                  <span dir="ltr">{property.agent.phone}</span>
                </a>
                <button className="flex items-center justify-center gap-2 w-full h-12 bg-white border-2 border-navy-900 text-navy-900 hover:bg-gray-50 rounded-xl font-bold transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>إرسال رسالة</span>
                </button>
              </div>

              <form className="space-y-4">
                <input type="text" placeholder="الاسم الكريم" className="w-full h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500" />
                <input type="tel" placeholder="رقم الهاتف" className="w-full h-12 px-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500" />
                <textarea placeholder="رسالتك..." rows={4} className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-gold-500 resize-none"></textarea>
                <button type="button" className="w-full h-12 bg-gold-500 hover:bg-gold-600 text-white rounded-xl font-bold transition-colors">
                  طلب استشارة
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
