import { Project, Service } from './types';

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'residence-o',
    title: 'Residence O',
    location: 'Copenhagen, Denmark',
    year: '2023',
    category: 'Residential',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'A study in light and materiality, Residence O redefines the boundaries of a traditional townhouse. Using a palette of Douglas fir and limestone, the space breathes with quiet intentionality.',
    philosophy: 'The core of this project was the reduction of visual noise to amplify the sensory experience of natural light moving across raw surfaces.'
  },
  {
    id: 'atelier-k',
    title: 'Atelier K',
    location: 'Kyoto, Japan',
    year: '2022',
    category: 'Commercial',
    heroImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'Merging traditional Japanese minimalism with contemporary structural requirements, Atelier K serves as a contemplative workspace. Shadows are as important as the walls that cast them.',
    philosophy: 'We explored the concept of "Ma"—the space between—allowing the architecture to act as a silent frame for the activities within.'
  },
  {
    id: 'the-monolith',
    title: 'The Monolith',
    location: 'Berlin, Germany',
    year: '2024',
    category: 'Hospitality',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1600'
    ],
    description: 'A boutique hotel lobby designed to evoke the feeling of a subterranean sanctuary. Dark charcoal tones and rough-hewn stone create a sense of permanence and gravity.',
    philosophy: 'Architecture as anchor. In a rapidly changing world, we sought to create a space that feels deeply rooted in the earth.'
  },
  {
    id: 'nordic-pavilion',
    title: 'Nordic Pavilion',
    location: 'Stockholm, Sweden',
    year: '2021',
    category: 'Cultural',
    heroImage: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000',
    gallery: [],
    description: 'An experimental temporary structure exploring the reuse of timber in public spaces.',
    philosophy: 'Sustainability through modularity.'
  },
  {
    id: 'villa-s',
    title: 'Villa S',
    location: 'Aarhus, Denmark',
    year: '2020',
    category: 'Residential',
    heroImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=2000',
    gallery: [],
    description: 'A coastal retreat defined by its panoramic views and integration with the dunes.',
    philosophy: 'Blurring the boundary between interior and horizon.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Interior Architecture',
    description: 'Structural reorganization and spatial flow analysis to maximize the potential of every square meter.'
  },
  {
    title: 'Spatial Design',
    description: 'Creating cohesive environments that balance functionality with a timeless aesthetic language.'
  },
  {
    title: 'Material & Lighting',
    description: 'Expert curation of tactile surfaces and engineered lighting to sculpt the atmosphere of a room.'
  }
];

export const JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'the-weight-of-stone',
    date: 'Oct 2024',
    title: 'The Weight of Stone',
    author: 'Elena Vance',
    category: 'Materials',
    excerpt: 'Exploring the psychological impact of natural stone in residential environments and its ability to ground the human spirit.',
    content: `Stone is the ultimate testament to time. In the context of interior architecture, it serves as more than just a surface; it is an anchor. When we bring raw limestone or granite into a living space, we are inviting a geological history into the domestic sphere.\n\nThe tactile quality of stone—its coldness to the touch, its varying textures from honed to rough-hewn—creates a sensory dialogue that modern synthetic materials simply cannot replicate. In our recent projects, we have observed that spaces defined by stone promote a different kind of movement: slower, more deliberate, more grounded.`,
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'choreographing-light',
    date: 'Aug 2024',
    title: 'Choreographing Light',
    author: 'Markus Nielsen',
    category: 'Philosophy',
    excerpt: 'How the movement of the sun throughout the day dictates the structural layout of our most recent project in Copenhagen.',
    content: `Light is the most invisible and yet most powerful tool in the architect's arsenal. It defines volume, reveals texture, and dictates the emotional tempo of a room. At Atelier Minimalist, we do not view light as something that merely illuminates; we view it as a material in itself.\n\nBy choreographing the way light enters a space—through deep reveals, clerestory windows, or subtle reflections off textured plaster—we create an environment that evolves with the time of day. A room should feel different at 10:00 AM than it does at 4:00 PM. This temporal shift is essential to a truly living architecture.`,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'the-art-of-less',
    date: 'May 2024',
    title: 'The Art of Less',
    author: 'Sara Holm',
    category: 'Process',
    excerpt: 'A behind-the-scenes look at the reduction process: what we choose to remove to reveal the essence of a space.',
    content: `Minimalism is often misunderstood as an aesthetic of absence. On the contrary, it is an aesthetic of presence—where every remaining element must justify its existence. The 'Art of Less' is a rigorous process of subtraction.\n\nWe begin every project by identifying the core essence of the site. From there, we work to remove anything that creates visual friction. The goal is to reach a state where nothing can be taken away without compromising the integrity of the whole. It is in this silence that the quality of craftsmanship truly shines.`,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  }
];