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
    items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'C#'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🧩',
    color: '#22d3ee',
    items: ['React', 'FastAPI', 'Flask', 'Streamlit', 'Pandas', 'NumPy', 'OpenCV', 'Plotly'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#f59e0b',
    items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'SNS', 'EventBridge', 'Docker'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: '#10b981',
    items: ['DynamoDB', 'MySQL', 'SQL Server', 'SQLite'],
  },
  {
    category: 'Security & Testing',
    icon: '🔒',
    color: '#ef4444',
    items: ['Burp Suite', 'OWASP ZAP', 'OWASP WSTG', 'XSS/SQLi', 'Prompt Injection', 'HTTP Traffic Analysis'],
  },
  {
    category: 'Tools',
    icon: '🔧',
    color: '#f43f5e',
    items: ['Git', 'GitHub Actions', 'VS Code', 'AWS CLI', 'CloudWatch', 'IAM'],
  },
]

export const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford University · Coursera',
    year: '2026',
    courses: ['Supervised Machine Learning', 'Advanced Learning Algorithms', 'Unsupervised Learning & Recommenders'],
    color: '#7c3aed',
  },
]

export const coursework = [
  'Data Structures',
  'Discrete Structures',
  'Analysis of Algorithms',
  'Computer Architecture',
  'Software Engineering',
]

export const experience = [
  {
    role: 'Undergraduate Research Assistant',
    company: 'AI Course Companion · USF',
    period: 'May 2026 – Present',
    color: '#7c3aed',
    type: 'Research',
    bullets: [
      'Contributing to the AI Course Companion (AICC) — an LLM-powered educational tool integrated into Canvas LMS, developed under Dr. Oguzhan Topsakal as part of CIS 4915',
      'Conducted a comprehensive black-box usability review following OWASP WSTG v4.2, identifying 23 findings across Ask Mode, Practice Mode, Review Mode, and mobile app — rated by severity using Nielsen Norman heuristics and Laws of UX',
      'Produced a formal 12-page usability report with AI-assisted screenshot analysis, documenting a critical broken mobile authentication flow caused by delayed Canvas OAuth and ranking top improvement recommendations',
      'Designing and executing a formal security testing plan spanning 27 OWASP test cases using Burp Suite and OWASP ZAP — covering XSS, SQL injection, CSRF, session token analysis, and independently scoping prompt injection as an LLM-specific attack vector not yet in WSTG v4.2',
    ],
  },
  {
    role: 'Undergraduate Research Assistant',
    company: 'Sustainability Emissions · USF',
    period: 'Jan 2026 – Present',
    color: '#3b82f6',
    type: 'Research',
    bullets: [
      'Built and deployed a full-stack GHG emissions analysis dashboard for a sustainability consulting engagement at USF Patel College, in collaboration with Dr. Kaleemunnisa and an industry consulting team',
      'Implemented GHG Protocol-aligned emission factor calculations from scratch across 5 transport datasets (~10,000 records), covering Scope 1 fleet, and Scope 3 Cat 4/6/7/9 — calculating ~83.8M kg CO₂ total',
      'Developing ML and NLP pipelines to model emissions reduction strategies — applying regression and classification models to predict high-impact intervention points across transport categories',
      'Presented findings at an airport industry client presentation; results used by the consulting team for Scope 1 and Scope 3 transportation recommendations',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Vorniqo Solutions',
    period: 'May 2025 – Aug 2025',
    color: '#7c3aed',
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
    color: '#3b82f6',
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
    color: '#7c3aed',
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
    color: '#7c3aed',
    emoji: '🎯',
    github: 'https://github.com/moosaabbasii/Smart-Job-Tracker',
    live: '',
    featured: true,
  },
  {
    name: 'USF Emissions Dashboard',
    tagline: 'GHG Protocol Sustainability Analytics · Live',
    description:
      'Full-stack emissions analysis dashboard built for a USF sustainability research engagement. Calculates and visualizes ~83.8M kg CO₂ across 5 transport categories (Scope 1 & 3) using GHG Protocol emission factors applied to ~10,000 records. Presented to an airport industry client.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'GHG Protocol'],
    color: '#3b82f6',
    emoji: '🌿',
    github: 'https://github.com/moosaabbasii/usf-emissions-dashboard',
    live: 'https://usf-emissions-dashboard.streamlit.app',
    featured: true,
  },
  {
    name: 'Digital Image Processing',
    tagline: 'Computer Vision Pipeline with OpenCV',
    description:
      'Image processing toolkit implementing filters, edge detection, and transformations from scratch using Python, OpenCV, and NumPy.',
    tech: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    color: '#7c3aed',
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
    color: '#3b82f6',
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
    color: '#7c3aed',
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
    color: '#3b82f6',
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
    color: '#7c3aed',
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
    color: '#3b82f6',
    emoji: '🔢',
    github: 'https://github.com/moosaabbasii/Arithmetic-Notation-Converter-using-Deque',
    live: '',
    featured: false,
  },
  {
    name: 'MOPS — Class Scheduling System',
    tagline: 'Full-Stack Scheduling Tool · FastAPI + React',
    description:
      'Full-stack web app for managing class schedules at USF Bellini College, built for CEN4020 Software Engineering with a 4-person Agile team. Features conflict detection, room heat maps, enrollment comparison, PDF export, and role-based access for committee members and chairs.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'SQLAlchemy'],
    color: '#7c3aed',
    emoji: '📋',
    github: 'https://github.com/moosaabbasii/Class-Scheduling-System-USF',
    live: '',
    featured: false,
  },
  {
    name: 'Mini Search Engine & Browser',
    tagline: 'Custom Indexing & Boolean Search in C++',
    description:
      'Lightweight search engine and web browser built in C++ using AVL trees, hash tables, and query caching for fast keyword retrieval. Supports AND/OR Boolean operators, constructs hyperlink graphs to map web connectivity, and is backed by SQLite.',
    tech: ['C++', 'SQLite', 'AVL Trees', 'Hash Tables', 'Boolean Search'],
    color: '#3b82f6',
    emoji: '🔍',
    github: 'https://github.com/moosaabbasii/Mini-Search-Engine-Web-browser',
    live: '',
    featured: false,
  },
  {
    name: 'Pac-Man Game',
    tagline: 'C++ OOP Game with Ghost AI & Pathfinding',
    description:
      'Full Pac-Man clone in C++ built with OOP principles — ghost pathfinding AI, collision detection, power-up mechanics, multi-level progression, and a real-time game loop with score tracking.',
    tech: ['C++', 'OOP', 'Pathfinding', 'Game Loop', 'Dynamic Memory'],
    color: '#7c3aed',
    emoji: '👾',
    github: 'https://github.com/moosaabbasii/Pacman-Game',
    live: '',
    featured: false,
  },
  {
    name: 'Linked List Calculator',
    tagline: 'Dynamic Arithmetic with Undo History in C++',
    description:
      'Arithmetic calculator built on a custom linked-list data structure supporting chained add/subtract/multiply/divide operations with full undo functionality, operation history tracking, and fixed-precision output.',
    tech: ['C++', 'Linked Lists', 'Data Structures', 'OOP'],
    color: '#3b82f6',
    emoji: '🧮',
    github: 'https://github.com/moosaabbasii/Linked-List-Arithmetic-Calculator',
    live: '',
    featured: false,
  },
  {
    name: 'Algorithm Design & Analysis',
    tagline: 'Merge Sort · Activity Selection · 0/1 Knapsack',
    description:
      'Implementations of 3 algorithmic paradigms — Divide & Conquer (Merge Sort), Greedy (Activity Selection), and Dynamic Programming (0/1 Knapsack) — with empirical timing benchmarks validating theoretical complexity across multiple input sizes.',
    tech: ['Python', 'Divide & Conquer', 'Greedy', 'Dynamic Programming'],
    color: '#7c3aed',
    emoji: '📐',
    github: 'https://github.com/moosaabbasii/Algorithm-Design-Analysis',
    live: '',
    featured: false,
  },
]
