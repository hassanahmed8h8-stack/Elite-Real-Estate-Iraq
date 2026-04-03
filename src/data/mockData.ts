export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  type: 'sale' | 'rent';
  propertyType: 'villa' | 'apartment' | 'house' | 'commercial';
  location: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqm
  images: string[];
  features: string[];
  featured: boolean;
  agent: {
    name: string;
    phone: string;
    image: string;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'فيلا فاخرة بتصميم عصري',
    description: 'فيلا راقية في قلب العاصمة بغداد، تتميز بتصميم معماري حديث وتشطيبات سوبر ديلوكس. تضم حديقة واسعة ومسبح خاص وموقف سيارات يتسع لـ 3 سيارات.',
    price: 850000,
    currency: 'دولار',
    type: 'sale',
    propertyType: 'villa',
    location: 'المنصور',
    city: 'بغداد',
    bedrooms: 5,
    bathrooms: 6,
    area: 600,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687931-cecebd808ce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['مسبح خاص', 'حديقة', 'تكييف مركزي', 'غرفة خادمة', 'موقف سيارات', 'نظام أمان ذكي'],
    featured: true,
    agent: {
      name: 'أحمد الجبوري',
      phone: '+964 770 123 4567',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '2',
    title: 'شقة سكنية بإطلالة بانورامية',
    description: 'شقة واسعة في مجمع سكني راقي في أربيل، توفر إطلالة خلابة على المدينة. المجمع يحتوي على كافة الخدمات من مسابح ونوادي رياضية ومساحات خضراء.',
    price: 1200,
    currency: 'دولار/شهر',
    type: 'rent',
    propertyType: 'apartment',
    location: 'عنكاوا',
    city: 'أربيل',
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1e5250d29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['إطلالة بانورامية', 'مسبح مشترك', 'صالة رياضية', 'حراسة 24/7', 'مفروشة بالكامل'],
    featured: true,
    agent: {
      name: 'سارة محمد',
      phone: '+964 750 987 6543',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '3',
    title: 'بيت مستقل بتصميم تراثي',
    description: 'بيت مستقل يجمع بين الأصالة والحداثة في البصرة، مجدد بالكامل مع الحفاظ على الطابع التراثي الجميل. موقع هادئ وقريب من الخدمات.',
    price: 350000,
    currency: 'دولار',
    type: 'sale',
    propertyType: 'house',
    location: 'البراضعية',
    city: 'البصرة',
    bedrooms: 4,
    bathrooms: 3,
    area: 300,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['تصميم تراثي', 'مجدد بالكامل', 'مطبخ مجهز', 'قريب من الخدمات'],
    featured: false,
    agent: {
      name: 'علي التميمي',
      phone: '+964 780 456 7890',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '4',
    title: 'مكتب تجاري في برج الأعمال',
    description: 'مساحة مكتبية ممتازة في أحد أرقى أبراج الأعمال في بغداد. مجهزة بأحدث التقنيات وبنية تحتية قوية للاتصالات.',
    price: 2500,
    currency: 'دولار/شهر',
    type: 'rent',
    propertyType: 'commercial',
    location: 'الكرادة',
    city: 'بغداد',
    bedrooms: 0,
    bathrooms: 2,
    area: 150,
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['إنترنت سريع', 'قاعات اجتماعات', 'مواقف مخصصة', 'كافتيريا', 'أمن 24/7'],
    featured: true,
    agent: {
      name: 'أحمد الجبوري',
      phone: '+964 770 123 4567',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '5',
    title: 'شقة ديلوكس في مجمع بوابة العراق',
    description: 'شقة فاخرة جداً في مجمع بوابة العراق السكني، تشطيبات عالية الجودة وإطلالة مميزة.',
    price: 220000,
    currency: 'دولار',
    type: 'sale',
    propertyType: 'apartment',
    location: 'مطار المثنى',
    city: 'بغداد',
    bedrooms: 3,
    bathrooms: 3,
    area: 210,
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['مجمع آمن', 'مسبح', 'نادي رياضي', 'مواقف تحت الأرض'],
    featured: false,
    agent: {
      name: 'سارة محمد',
      phone: '+964 750 987 6543',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: '6',
    title: 'فيلا كلاسيكية في دريم سيتي',
    description: 'فيلا بتصميم كلاسيكي فخم في مجمع دريم سيتي الراقي في أربيل. مساحات خضراء واسعة وخصوصية تامة.',
    price: 1200000,
    currency: 'دولار',
    type: 'sale',
    propertyType: 'villa',
    location: 'دريم سيتي',
    city: 'أربيل',
    bedrooms: 6,
    bathrooms: 7,
    area: 800,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    ],
    features: ['مسبح كبير', 'حديقة منسقة', 'غرفة سينما', 'ملحق للضيوف'],
    featured: true,
    agent: {
      name: 'علي التميمي',
      phone: '+964 780 456 7890',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'عمر حسن',
    role: 'رجل أعمال',
    content: 'تجربتي مع عقارات النخبة كانت استثنائية. احترافية عالية في التعامل وسرعة في إنجاز المعاملات. وجدت الفيلا التي أبحث عنها في وقت قياسي.',
    rating: 5
  },
  {
    id: 2,
    name: 'نور العبيدي',
    role: 'طبيبة',
    content: 'فريق عمل متعاون جداً، قدموا لي خيارات ممتازة تناسب ميزانيتي. أنصح بالتعامل معهم بشدة لمن يبحث عن المصداقية والشفافية.',
    rating: 5
  },
  {
    id: 3,
    name: 'مصطفى كامل',
    role: 'مستثمر',
    content: 'أفضل وكالة عقارية تعاملت معها في العراق. لديهم فهم عميق للسوق العقاري وقدموا لي استشارات استثمارية قيمة جداً.',
    rating: 4
  }
];
