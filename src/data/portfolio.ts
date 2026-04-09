export const info = {
  name: 'Moosa Abbasi',
  firstName: 'Moosa',
  lastName: 'Abbasi',
  role: 'Software Engineer',
  roles: [
    'Software Engineer',
    'CS Student @ USF',
    'AWS Cloud Builder',
    'AI/ML Enthusiast',
    'Full-Stack Developer',
    'Problem Solver',
  ],
  bio: "I build things that scale — from low-level algorithms to cloud-native systems. Obsessed with the craft of software: clean architecture, sharp logic, and code that ships. CS student by semester, engineer by mindset.",
  location: 'Tampa, FL',
  email: 'moosaabbasi@usf.edu',
  github: 'https://github.com/moosaabbasii',
  linkedin: 'https://linkedin.com/in/moosaabbasi',
  resume: '/Moosa_Abbasi_Resume.pdf',
}

export const achievements = [
  { label: 'GPA', value: '3.90', suffix: '' },
  { label: 'Projects Built', value: '10', suffix: '+' },
  { label: 'Honors Scholar', value: '4', suffix: 'yr' },
]

export const badges = [
  { text: "Dean's List", color: 'amber' },
  { text: 'Green & Gold Presidential Scholar', color: 'amber' },
  { text: 'USF Honors College', color: 'cyan' },
  { text: 'USF Student Government Senator', color: 'purple' },
]

export const skills = [
  {
    category: 'Languages',
    icon: '⌨️',
    color: '#8b5cf6',
    items: ['Python', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'C#'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🧩',
    color: '#22d3ee',
    items: ['React', 'Flask', 'Streamlit', 'Pandas', 'NumPy', 'OpenCV'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#f59e0b',
    items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'SNS', 'EventBridge', 'Docker'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#10b981',
    items: ['DynamoDB', 'MySQL', 'SQL Server'],
  },
  {
    category: 'Tools',
    icon: '🔧',
    color: '#f43f5e',
    items: ['Git', 'GitHub Actions', 'VS Code', 'AWS CLI', 'CloudWatch', 'IAM'],
  },
]

export const experience = [
  {
    role: 'Software Developer',
    company: 'Vorniqo Solutions',
    period: 'May 2025 – Aug 2025',
    color: '#8b5cf6',
    type: 'Industry',
    bullets: [
      'Engineered and shipped 3 client-facing web features using React and TypeScript, reducing average page load time by 30% through lazy loading and component-level code splitting',
      'Built a RESTful analytics dashboard with Python and Flask, aggregating usage metrics from multiple data sources and enabling the team to cut manual reporting time by 60%',
      'Designed and implemented a PostgreSQL schema for client project tracking, writing optimized queries that reduced report generation time from 8s to under 1s',
      'Collaborated in bi-weekly Agile sprints, contributing to backlog grooming, writing detailed user stories, and consistently delivering tasks ahead of sprint deadlines',
      'Integrated third-party APIs (Stripe, SendGrid) into the core product, handling webhook events and edge-case error flows to ensure reliable transaction and notification pipelines',
    ],
  },
  {
    role: 'Project Management Intern',
    company: 'Huawei Technologies',
    period: 'May 2024 – Aug 2024',
    color: '#f59e0b',
    type: 'Industry',
    bullets: [
      'Coordinated cross-functional engineering projects across international teams spanning 3 time zones, serving as the central communication bridge between technical leads and business stakeholders',
      'Designed and maintained data-driven tracking workflows in Excel and internal tooling that reduced project status reporting time by 40% and improved on-time delivery rates',
      'Managed end-to-end timelines for 5+ concurrent deliverables, proactively identifying blockers and escalating risks to senior management before they impacted deadlines',
      'Produced detailed project reports, sprint summaries, and executive-level documentation reviewed by department heads — improving decision-making transparency across teams',
      'Drove process improvements by analyzing recurring workflow bottlenecks and proposing systematic fixes adopted by the broader project management team',
    ],
  },
  {
    role: 'Senator',
    company: 'USF Student Government Association',
    period: 'Aug 2024 – May 2025',
    color: '#22d3ee',
    type: 'Leadership',
    bullets: [
      'Elected to represent the interests of 50,000+ students in the USF Student Government Senate, one of the largest student governments in the US',
      'Drafted and co-sponsored 4 pieces of legislation targeting mental health resource expansion and academic support accessibility, with 2 bills passing into official university policy',
      'Served on the Academic Affairs Committee, reviewing faculty proposals and advocating for student-centered curriculum changes that impacted over 12,000 enrolled undergraduates',
      'Facilitated open forums and town halls to collect student feedback, synthesizing input from hundreds of constituents into actionable legislative priorities each semester',
      'Collaborated with university administrators and department chairs to negotiate budget allocations for student organizations, securing over $15,000 in additional funding',
    ],
  },
]

export const projects = [
  {
    name: 'Smart Job Tracker',
    tagline: 'Serverless AWS Job Application Platform',
    description:
      'Serverless platform to log job applications, track statuses, and receive automated email follow-up reminders. Built entirely on AWS Free Tier.',
    tech: ['Python', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'EventBridge', 'SNS', 'Streamlit'],
    color: '#8b5cf6',
    emoji: '🎯',
    github: 'https://github.com/moosaabbasii/Smart-Job-Tracker',
    live: '',
    featured: true,
  },
  {
    name: 'Digital Image Processing',
    tagline: 'Computer Vision Pipeline with OpenCV',
    description:
      'Image processing toolkit implementing filters, edge detection, and transformations from scratch using Python, OpenCV, and NumPy.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    color: '#22d3ee',
    emoji: '🖼️',
    github: 'https://github.com/moosaabbasii/Digital-Image-Processing-DIP-',
    live: '',
    featured: true,
  },
  {
    name: 'School Management System',
    tagline: 'Full-Stack Web Platform with C# & SQL',
    description:
      'Full-stack school management platform with student records, grade tracking, and administrative dashboards built on C# and SQL Server.',
    tech: ['C#', 'SQL Server', 'ASP.NET', 'HTML/CSS'],
    color: '#f59e0b',
    emoji: '🏫',
    github: 'https://github.com/moosaabbasii/School-Management-System',
    live: '',
    featured: true,
  },
  {
    name: "Dijkstra's Shortest Path",
    tagline: 'Graph ADT + Custom Min-Heap in C++',
    description:
      'Undirected weighted graph with a hand-built min-heap priority queue implementing Dijkstra\'s algorithm. Finds optimal paths with O((V+E) log V) complexity. No STL priority_queue used.',
    tech: ['C++', 'Graph Theory', 'Min-Heap', 'OOP', 'Adjacency List'],
    color: '#f43f5e',
    emoji: '🗺️',
    github: 'https://github.com/moosaabbasii/Dijkstra-Shortest-Path',
    live: '',
    featured: true,
  },
  {
    name: 'Maze Solver',
    tagline: 'Recursive Backtracking Visualizer',
    description:
      'Python maze generator and solver using recursive backtracking DFS. Visualizes the pathfinding process step-by-step with Matplotlib.',
    tech: ['Python', 'Recursive DFS', 'Matplotlib'],
    color: '#10b981',
    emoji: '🌀',
    github: 'https://github.com/moosaabbasii/Maze-Solver',
    live: '',
    featured: false,
  },
  {
    name: 'Static Huffman Coding',
    tagline: 'Lossless Data Compression in C++',
    description:
      'Implementation of Static Huffman Coding algorithm in C++ for lossless text compression. Builds frequency tables, priority queues, and the optimal prefix-free code tree.',
    tech: ['C++', 'Priority Queue', 'Binary Trees'],
    color: '#a78bfa',
    emoji: '🗜️',
    github: 'https://github.com/moosaabbasii/Static-Huffman-Coding-Algorithm',
    live: '',
    featured: false,
  },
  {
    name: 'Arithmetic Notation Converter',
    tagline: 'Infix / Postfix / Prefix using Deque',
    description:
      'Converts arithmetic expressions between infix, postfix, and prefix notation using a custom deque-based stack implementation in C++.',
    tech: ['C++', 'Deque', 'Stack', 'Data Structures'],
    color: '#60a5fa',
    emoji: '🔢',
    github: 'https://github.com/moosaabbasii/Arithmetic-Notation-Converter-using-Deque',
    live: '',
    featured: false,
  },
]
