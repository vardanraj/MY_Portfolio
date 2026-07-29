import { Project, Skill, TimelineEvent, GalleryItem, CertificateItem } from '../types';
import MyPhoto from '../images/MY_photo (2).png';

export const personalInfo = {
  name: 'Vardan Raj',
  title: 'Network Engineer & Graphic Designer',
  tagline: 'Designing robust Cisco network backbones and crafting premium vector brand systems.',
  description: 'A dual-domain specialist bridging the visual elegance of graphic design with the hardcore architecture of secure network engineering. I build resilient network topologies and pixel-perfect brand ecosystems.',
  email: 'darkraj7011@gmail.com',
  github: 'https://github.com/VardanRaj',
  linkedin: 'https://www.linkedin.com/in/vardan-raj-042650317/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIVnVBp8FRZ%2BLW2h8rxhDfw%3D%3D',
  location: 'Grater Noida, Uttar Pradesh',
  resumeUrl: '#',
  portraitUrl: MyPhoto,
};

export const skillsData: Skill[] = [
  // Network Engineering
  { name: 'Network Topology & Cisco Routing', category: 'Backend', level: 95, iconName: 'Network' },
  { name: 'Firewall Zoning & Palo Alto Security', category: 'Backend', level: 90, iconName: 'Database' },
  { name: 'DNS, IPv6, VPNs & SD-WAN', category: 'Backend', level: 94, iconName: 'Server' },
  { name: 'Infrastructure Load-Balancing', category: 'Backend', level: 88, iconName: 'Zap' },

  // Graphic Design
  { name: 'Brand Identity & Bespoke Typography', category: 'Frontend', level: 96, iconName: 'Type' },
  { name: 'Figma UI/UX Prototyping', category: 'Frontend', level: 80, iconName: 'Figma' },
  { name: 'Vector Illustration & Posters', category: 'Frontend', level: 92, iconName: 'Figma' },
  { name: 'Print Layouts & Package Design', category: 'Frontend', level: 90, iconName: 'Layers' },

  // Creative Tools
  { name: 'Adobe Creative Suite', category: 'Design & DevTools', level: 93, iconName: 'Figma' },
  { name: 'Canva', category: 'Design & DevTools', level: 91, iconName: 'Figma' },
  { name: 'Figma', category: 'Design & DevTools', level: 60, iconName: 'Figma' },
];

export const projectsData: Project[] = [
  {
    id: 'packet-analyser',
    title: 'Packet Analyser',
    description: 'An expert-grade telemetry and packet inspection interface engineered to intercept and map virtual network frames. It parses details from HTTP, TCP, and IP protocol packets in real-time.',
    category: 'Network Engineering',
    tags: ['Wireshark SDK', 'Packet Capture', 'TCP/IP Stack', 'DNS Inspect'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
    link: 'https://github.com/VardanRaj/packet-analyser',
    github: 'https://github.com/VardanRaj/packet-analyser',
    details: [
      'Captures and decodes active header information including protocol parameters, TTL flags, ports, and checksum indices.',
      'Constructs dynamic throughput metrics and telemetry reports mapping package traffic frequencies.',
      'Integrates multi-threaded asynchronous buffers to prevent frame truncation and queue losses during peak load spikes.'
    ],
    featured: true
  }
];

const imageModules = (import.meta as any).glob('../images/*', { eager: true, import: 'default' }) as Record<string, string>;
const certificateModules = (import.meta as any).glob('../images/certificates/*', { eager: true, import: 'default' }) as Record<string, string>;

// Helper to extract clean filename
function getCleanFileName(filepath: string): string {
  const baseName = filepath.split('/').pop() || filepath;
  // Remove extension
  const cleanName = baseName.replace(/\.[^/.]+$/, "");
  return cleanName.trim();
}

// Map files to rich metadata matching Vardan Raj's real graphic design works
const mappings: Record<string, Partial<GalleryItem>> = {
  'Save nature': {
    title: 'Planet or Pollution?',
    subtitle: 'SAVE Earth Campaign Poster',
    description: 'An eco-conservation graphic design poster crafted for InAmigos Foundation. Features a structured layout of an Earth globe enclosed in glass, layered recycling cardboard arrows, and fresh green leaves, all set on a dark green textured backdrop.',
    category: 'Poster Art',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    specs: 'A1 Format / CMYK / 300 DPI Grid',
    details: [
      'Official campaign graphic designed for InAmigos Foundation to promote sustainable environment awareness.',
      'Constructed a conceptual glass sphere representation containing realistic cardboard recycle arrows.',
      'Curated contrasting bespoke classic serif and modern retro display typography lines.'
    ]
  },
  'unnamed (1)': {
    title: 'Champions of India',
    subtitle: 'T20 Cricket Brand Campaign',
    description: 'A dynamic sports poster celebrating the victory of the Indian cricket team under the Apollo brand. Features a massive portrait backdrop, active sports player action shots, and textured, metallic gold display typography.',
    category: 'Poster Art',
    tools: ['Photoshop', 'Lightroom', 'Custom Brushes'],
    specs: 'Victory Banner / RGB 4K Format',
    details: [
      'Engineered an elegant victory poster highlighting key team sports poses.',
      'Designed textured, copper-bronze display lettering with cracks to represent heavy historic gravity.',
      'Symmetric positioning of jerseys, equipment, and badges to create a balanced cinematic flow.'
    ]
  },
  'AGT GRID': {
    title: 'ABES Got Talent Layout Grid',
    subtitle: 'Campus Event Visual Framework',
    description: 'A premium structural layout and spacing grid designed for the ABES Got Talent mainstage festival assets, establishing a standard aspect ratio and visual guidelines for promotional placements.',
    category: 'Logo & Branding',
    tools: ['Adobe Illustrator', 'Photoshop', 'Figma Grid'],
    specs: 'Digital Cover Grid / 1200x500px Standard',
    details: [
      'Created strict modular pixel-snapping layout guides for digital assets.',
      'Establishes unified alignment standards for text overlays and logos across multiple screen ratios.',
      'Designed double-stroke neon yellow color accents with clean grid lines.'
    ]
  },
  'Mundan': {
    title: 'Mundan Ceremony Invitation',
    subtitle: 'Traditional Floral Milestone Card',
    description: 'A premium floral invitation card celebrating a child\'s milestone hair-cleansing ceremony. Detailing traditional Indian golden lanterns, decorative arch frames, and an elegant cream-pastel backdrop containing a sleepy child photo.',
    category: 'Print Layouts',
    tools: ['Adobe Illustrator', 'InDesign', 'Procreate'],
    specs: '5" x 7" Printable Card / CMYK',
    details: [
      'Crafted custom golden vectors representing traditional Indian lanterns (diya style) casting diffuse light.',
      'Structured a precise dome arch mask following Mughal and traditional Indian architecture rules.',
      'Curated a warm color story of fresh teal-blue, rich gold, and pastel yellow for high-end aesthetic values.'
    ]
  },
  'grid': {
    title: 'Swiss Grid Typography Poster',
    subtitle: 'System-Symmetric Poster Grid',
    description: 'A design layout engineering study applying strict International Typographic Style guidelines to grid metrics, technical annotations, and balanced negative-space alignment structures.',
    category: 'Technical Graphics',
    tools: ['Figma Layouts', 'Adobe Illustrator', 'Vector Math'],
    specs: 'Scale-Free SVG Source / Responsive Icons',
    details: [
      'Developed custom mathematical grid metrics governing margin, gutter, and modular ratios.',
      'Applied strict typography scales using high-contrast tracking to emphasize textual hierarchy.',
      'Constructed pixel-perfect geometric lines for timeless digital design fidelity.'
    ]
  },
  'Shaheedi Hafta': {
    title: 'Shaheedi Hafta Tribute',
    subtitle: 'Commemorative Tribute Motion Graphic',
    description: 'An elegant digital tribute video slide and motion graphic card honoring Shaheedi Hafta (20-27 December). Bathed in warm gold-sepia light, highlighting a detailed vector outline of historical structures.',
    category: 'Vector Illustration',
    tools: ['Adobe Illustrator', 'After Effects', 'Procreate'],
    specs: 'Social Story Form / MP4 Vertical HD',
    details: [
      'A vector architectural animation of traditional historical structures under custom frames.',
      'Polished text alignments and cinematic fades balancing emotional, historical poem lines.',
      'Beautiful warm gold-sepia visual animations with deep corporate styling.'
    ]
  },
  'मकर संक्रांति': {
    title: 'Makar Sankranti Greeting',
    subtitle: 'Festive Indian Crop Festival Graphic',
    description: 'A colorful, vibrant graphic card celebrating the harvest festival Makar Sankranti. Adorned with beautiful vector kites, traditional sweets, sugarcane illustrations, and energetic traditional greetings.',
    category: 'Logo & Branding',
    tools: ['Procreate App', 'Adobe Illustrator', 'InDesign'],
    specs: 'Square Greeting Card / RGB High Resolution',
    details: [
      'Designed beautiful custom vector kites representing the clear blue skies of the festival.',
      'Curated a festive, high-contrast palette of marigold yellow, brilliant blue, and deep orange.',
      'Styled bilingual display typography blending traditional Devanagari script with elegant English accents.'
    ]
  },
  'Creative & Tourism': {
    title: 'Creative & Tourism Campaign',
    subtitle: 'Brand & Event Promotional Poster',
    description: 'A vibrant graphic poster designed for creative & tourism recruitment and promotions, combining rich typography with structured promotional layout grids.',
    category: 'Poster Art',
    tools: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    specs: 'Poster Banner / High-Res RGB',
    details: [
      'Engineered structured layout grids for recruitment and event promotions.',
      'Harmonized vibrant color contrasts suited for digital and print displays.',
      'Selected high-impact typography for clear visual hierarchy.'
    ]
  },
  'Creative & Tourism Recruitment grid': {
    title: 'Creative & Tourism Layout Grid',
    subtitle: 'Modular Poster Grid & Guidelines',
    description: 'A technical layout grid and composition guide for Creative & Tourism campaign assets, establishing alignment anchors and typographic proportions.',
    category: 'Technical Graphics',
    tools: ['Figma Grid', 'Adobe Illustrator', 'Vector Math'],
    specs: 'Modular Layout Grid / Vector Source',
    details: [
      'Defined modular alignment structures and margin ratios.',
      'Ensures consistent branding across diverse marketing media sizes.',
      'Structured clear spatial hierarchy for headline and body elements.'
    ]
  }
};

function formatDefaultTitle(filename: string): string {
  if (filename.toLowerCase().startsWith('untitled')) {
    return 'Creative Design Composition';
  }
  let formatted = filename.replace(/[_-]/g, ' ');
  // Title case
  return formatted.replace(/\b\w/g, c => c.toUpperCase());
}

export const galleryData: GalleryItem[] = Object.entries(imageModules)
  .filter(([pathKey]) => {
    const filename = getCleanFileName(pathKey).toLowerCase();
    const isExcluded = 
      filename.includes('photo') || 
      filename.includes('portrait') || 
      filename.includes('avatar') ||
      filename.includes('certificate') ||
      filename.includes('certufucacte') ||
      filename.includes('launched') ||
      filename.includes('networking-basics') ||
      filename.includes('screenshot') ||
      filename.includes('150910') ||
      filename.includes('150933') ||
      filename.includes('1584');
    return !isExcluded;
  })
  .map(([pathKey, imageUrl]) => {
    const filename = getCleanFileName(pathKey);
    const matched = mappings[filename] || {};

    return {
      id: filename.toLowerCase().replace(/[^a-z0-9_-]/g, '-'),
      title: matched.title || formatDefaultTitle(filename),
      subtitle: matched.subtitle || 'Uploaded Design Asset',
      description: matched.description || `Custom graphic design project showing original creative design process for ${filename}.`,
      category: (matched.category || 'Poster Art') as any,
      image: imageUrl,
      tools: matched.tools || ['Adobe Creative Suite', 'Figma'],
      specs: matched.specs || 'RGB / Digital Asset',
      details: matched.details || [
        'Engineered with premium layout alignment and tailored pixel structures.',
        'Curated high-contrast color scheme tailored to human readability standards.',
        'Optimized asset resolution for rapid screen response and crystal clarity.'
      ]
    };
  });

const findCertFile = (partialName: string): string => {
  const entry = Object.entries(certificateModules).find(([key]) => 
    key.toLowerCase().includes(partialName.toLowerCase())
  );
  if (entry) return entry[1];
  
  const imgEntry = Object.entries(imageModules).find(([key]) => 
    key.toLowerCase().includes(partialName.toLowerCase())
  );
  return imgEntry ? imgEntry[1] : '';
};

const findImageFile = (partialName: string): string => {
  const entry = Object.entries(imageModules).find(([key]) => 
    key.toLowerCase().includes(partialName.toLowerCase())
  );
  if (entry) return entry[1];
  
  const certEntry = Object.entries(certificateModules).find(([key]) => 
    key.toLowerCase().includes(partialName.toLowerCase())
  );
  return certEntry ? certEntry[1] : '';
};

export const certificateData: CertificateItem[] = [
  {
    id: 'cisco-networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    description: 'Core concepts of network communication including active packet decodes, IP routing topologies, system subnets, and security diagnostics.',
    image: findCertFile('networking-basics.png') || 'custom:cisco',
    pdfUrl: findCertFile('NetworkingBasicsUpdate20260322-31-x9tw4k.pdf'),
    skills: ['IP Routing', 'Subnetting', 'Protocols', 'Network Security', 'Wireshark']
  },
  {
    id: 'graphic-internship-certificate',
    title: 'Graphic Design Internship Certificate',
    issuer: 'InAmigos Foundation',
    year: '2026',
    description: 'Recognized for graphic design, campaign asset compositions, micro-illustrations, and responsive digital visual designs for corporate events.',
    image: findCertFile('graphic internship certificate.jpg') || 'custom:inamigos',
    skills: ['Graphic Design', 'Figma', 'Adobe Illustrator', 'Branding', 'Typography']
  },
  {
    id: 'launched-certificate',
    title: 'Launched Program Credential',
    issuer: 'ABES Engineering College / Tech Accelerator',
    year: '2026',
    description: 'Certified in rapid prototyping, full-stack React systems assembly, styling guidelines enforcement, and responsive layout designs.',
    image: findCertFile('launched certificate.jpg') || 'custom:launched',
    skills: ['Full-Stack Web', 'Vite', 'React 18', 'System Design', 'Responsive UI']
  },
  {
    id: 'deloitte-cybersecurity-simulation',
    title: 'Technology Consulting & Cybersecurity Credentials',
    issuer: 'Deloitte',
    year: '2026',
    description: 'Deloitte technology consulting credential verifying enterprise risk identification, active IAM design, firewall ACL topology zoning, and cloud defense analysis.',
    image: findImageFile('150933') || 'custom:deloitte',
    pdfUrl: findCertFile('Deloitte certufucacte Cyber.pdf'),
    skills: ['Cyber Security', 'Consulting', 'Vulnerability Assessment', 'ACL Design', 'IAM Policies']
  },
  {
    id: 'goldman-sachs-software-risk',
    title: 'Software Engineering Job Simulation',
    issuer: 'Goldman Sachs',
    year: '2026',
    description: 'Goldman Sachs software engineering simulation credential validating corporate password policies, auditing threat metrics, and implementing secure cryptography protocols.',
    image: findImageFile('150910') || 'custom:goldman',
    pdfUrl: findCertFile('Goldamnachs risk.pdf'),
    skills: ['System Audits', 'Vulnerability Remediation', 'Cryptography', 'Password Policies', 'Backends']
  },
  {
    id: 'tata-cybersecurity-sim',
    title: 'Cybersecurity Analyst Virtual Experience',
    issuer: 'Tata Group',
    year: '2026',
    description: 'Tata Group analyst simulation verifying network posture vulnerability screening, incident threat control protocols, and enterprise infrastructure log audits.',
    image: findImageFile('Screenshot_20-6-2026_1584') || 'custom:tata',
    pdfUrl: findCertFile('Tata Cyber.pdf'),
    skills: ['Threat Analysis', 'Incident Response', 'Network Posture', 'Cyber Defense', 'Security Logs']
  }
];

export const experienceData: TimelineEvent[] = [
  {
    id: 'exp-1',
    role: 'Student: Computer Science and Engineering',
    company: 'Abes Engineering Collage',
    period: '2024 - 2028',
    description: 'Blending Code and Creativity for Modern Web Experiences.',
    points: [
      'The Learner: A self-driven student who translates curiosity into practical, self-taught skills.',
      'The Doer: Bridging academic theory with hands-on projects to solve real-world problems.',
      'The Collaborator: An adaptable team player who brings energy, structure, and quick thinking to every challenge.'
     
    ]
  },
  {
    id: 'exp-2',
    role: 'Graphic Designmer Intern',
    company: 'In Amigos Foundaton',
    period: 'April-May 2026',
    description: 'Crafted impactful digital content and driving fundraising campaigns at InAmigos Foundation to support pan-India social welfare initiatives',
    points: [
     ''
    ]
  }
];
