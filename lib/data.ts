import { Shield, Users, Hotel, FileCheck, Phone, Mail, MessageCircle } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'Al-Mehmood Hajj & Umrah',
  tagline: 'Guiding You to the House of Allah with Comfort & Trust',
  licenseNumber: '3395',
  emails: [
    'almehmoodhajjservices@gmail.com',
    'engr_52@yahoo.com',
  ],
  phones: [
    '091 5702084',
    '0300 5960085',
    '0340 7221765',
  ],
  whatsapp: '+923005960085',
  address: 'Flat no 21, second floor, shahid plaza, university road, peshawar',
};

export const TRUST_FEATURES = [
  {
    icon: Shield,
    title: 'Licensed Tour Operator',
    description: 'Ministry approved operator with license #3395',
  },
  {
    icon: Users,
    title: 'Experienced Umrah Guides',
    description: 'Professional guides fluent in local languages',
  },
  {
    icon: Hotel,
    title: 'Comfortable Hotels & Transport',
    description: 'Quality accommodations near Haram with shuttle service',
  },
  {
    icon: FileCheck,
    title: 'Complete Visa Assistance',
    description: 'End-to-end documentation and visa processing',
  },
];

export const PACKAGES = [
  {
    type: 'Quad Room',
    price: '285,000',
    currency: 'PKR',
    per: 'Per Person',
    features: ['4 Persons per room', 'Shared facilities', 'Budget friendly'],
  },
  {
    type: 'Triple Room',
    price: '292,000',
    currency: 'PKR',
    per: 'Per Person',
    features: ['3 Persons per room', 'More space', 'Great value'],
    popular: true,
  },
  {
    type: 'Double Room',
    price: '299,000',
    currency: 'PKR',
    per: 'Per Person',
    features: ['2 Persons per room', 'Maximum comfort', 'Privacy'],
  },
];

export const PACKAGE_DETAILS = {
  duration: '21 Days Total',
  makkah: {
    nights: '15 Nights',
    hotel: 'Shuttle Hotel',
    distance: '1500m from Haram',
  },
  madinah: {
    nights: '05 Nights',
    hotel: 'Shuttle Hotel',
    distance: '500 / 1000m from Haram',
  },
  included: [
    'Umrah Visa',
    'Return Air Ticket',
    'Private Transport',
    'Travel Insurance',
    'Hotel Accommodations',
    'Airport Transfers',
  ],
};

export const JOURNEY_STEPS = [
  {
    number: 1,
    title: 'Contact & Consultation',
    description: 'Reach out to discuss your requirements and get personalized guidance',
  },
  {
    number: 2,
    title: 'Package Selection',
    description: 'Choose the perfect package that fits your needs and budget',
  },
  {
    number: 3,
    title: 'Visa & Documentation',
    description: 'We handle all paperwork, visa processing, and travel arrangements',
  },
  {
    number: 4,
    title: 'Sacred Journey Begins',
    description: 'Embark on your spiritual journey with peace of mind',
  },
];
