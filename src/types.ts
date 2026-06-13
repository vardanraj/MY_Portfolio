export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
  details: string[];
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Poster Art' | 'Logo & Branding' | 'Print Layouts' | 'Vector Illustration' | 'Technical Graphics' | 'Package Design';
  image: string;
  tools: string[];
  specs: string;
  details: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design & DevTools';
  level: number; // 0 to 100
  iconName: string; // Lucide icon name
}

export interface TimelineEvent {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
}
