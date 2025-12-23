
export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  company: string;
  avatar: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}
