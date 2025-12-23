
import React from 'react';
import { Service, Testimonial, Stat, Project } from './types';

export const SERVICES: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'We turn scrollers into brand loyalists through high-impact content systems.',
    items: ['Strategy & Content Planning', 'Carousel & High-Engagement Design', 'Reels Creative Direction', 'Monthly Content Ecosystems'],
    color: '#00c892'
  },
  {
    id: 'branding',
    title: 'Personal Branding',
    description: 'Architecting authoritative presence for founders and creators.',
    items: ['Founder Storytelling', 'Visual Identity Systems', 'Scripting & Shoot Planning', 'Authority Positioning'],
    color: '#FF9214'
  },
  {
    id: 'design',
    title: 'Graphic Design',
    description: 'Visual excellence that commands attention and defines brands.',
    items: ['Premium Logo & Brand Kits', 'Digital & Print Assets', 'Social Media Graphics', 'Pitch Decks & Presentations'],
    color: '#5382ff'
  },
  {
    id: 'web',
    title: 'Web & UI/UX Design',
    description: 'Clean, simple, and high-converting web experiences.',
    items: ['Framer & WordPress Mastery', 'High-Converting Landing Pages', 'Creator Portfolios', 'Conversion Rate Optimization'],
    color: '#ffffff'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Gagan Singh',
    role: 'CEO',
    company: 'Planet Education Worldwide',
    quote: 'The Grogen team is extremely passionate. Their business acumen is a force that cannot be reckoned with. They transformed our digital zeal into tangible results.',
    avatar: 'https://picsum.photos/seed/gagan/100/100'
  },
  {
    id: 2,
    name: 'Syed Imran',
    role: 'Marketing Head',
    company: 'Zimson Watches',
    quote: 'Top-notch digital marketing solutions that significantly boosted our online presence. Website traffic and conversions increased substantially under their direction.',
    avatar: 'https://picsum.photos/seed/syed/100/100'
  },
  {
    id: 3,
    name: 'Chandan Singhi',
    role: 'Founder & CEO',
    company: 'Sugar Jewellery',
    quote: 'Hiring them was the best decision for our online store. Knowledgeable, helpful, and always available to solve issues. A truly lovely team to work with.',
    avatar: 'https://picsum.photos/seed/chandan/100/100'
  },
  {
    id: 4,
    name: 'Abdullah Basha',
    role: 'Founder',
    company: 'HMH Tech Hub',
    quote: 'Working with Grogen for our digital marketing needs has been a game-changer. They truly understood our audience and vision, delivering tailored campaigns that significantly boosted our lead quality.',
    avatar: 'https://picsum.photos/seed/abdullah/100/100'
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    role: 'Director',
    company: 'EdAthena',
    quote: 'The Grogen team has been instrumental in shaping EdAthena’s digital marketing and social media presence. Their strategic approach and consistent execution helped us reach a wider audience.',
    avatar: 'https://picsum.photos/seed/rajesh/100/100'
  },
  {
    id: 6,
    name: 'Sarah Jenkins',
    role: 'Creative Lead',
    company: 'Vesta Skin',
    quote: 'Choosing Grogen to design our logo was one of the best decisions we made for our brand. The process was seamless and highly professional.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Money Fied',
    category: 'UI/UX Case Study',
    image: 'https://picsum.photos/id/1/800/600',
    link: '#'
  },
  {
    id: 2,
    title: 'Truzon Solar',
    category: 'Full Service Marketing',
    image: 'https://picsum.photos/id/2/800/600',
    link: '#'
  },
  {
    id: 3,
    title: 'Vesta Skin',
    category: 'Branding & Content',
    image: 'https://picsum.photos/id/3/800/600',
    link: '#'
  },
  {
    id: 4,
    title: 'Gpower Fitness',
    category: 'Visual Identity',
    image: 'https://picsum.photos/id/4/800/600',
    link: '#'
  }
];

export const STATS: Stat[] = [
  { label: 'Content Views Generated', value: '1000', suffix: '+' },
  { label: 'Engagement Increase', value: '340', suffix: '%' },
  { label: 'Branding Projects', value: '10', suffix: '+' },
  { label: 'Client Satisfaction', value: '100', suffix: '%' }
];

export const CLIENT_LOGOS = [
  'SRM', 'Sugar', 'UC', 'Zimson', 'ICICI', 'Ciros', 'Lamarca', 'Incomet', 'Myntra', 'Pacific'
];
