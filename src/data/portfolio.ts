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
  { label: 'GPA', value: '3.86', suffix: '' },
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
    items: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'PHP', 'C#'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🧩',
    color: '#22d3ee',
    items: ['React', 'FastAPI', 'Flask', 'Streamlit', 'Pandas', 'NumPy', 'OpenCV', 'Plotly', 'scikit-learn', 'Prophet', 'XGBoost', 'statsmodels'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: '#f59e0b',
    items: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'SNS', 'EventBridge', 'Cloud Run', 'Secret Manager', 'GCS', 'Docker'],
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
    items: ['Burp Suite', 'OWASP ZAP', 'OWASP WSTG', 'Playwright', 'XSS/SQLi', 'Prompt Injection', 'HTTP Traffic Analysis'],
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
  'Computer Logic & Design',
  'Automata Theory',
  'Introduction to AI',
  'Honors Capstone',
]

export const experience = [
  {
    role: 'Undergraduate Research Assistant',
    company: 'AI Course Companion · USF',
    period: 'May 2026 – Present',
    color: '#7c3aed',
    type: 'Research',
    bullets: [
      'Conducted a full black-box + gray-box security assessment of the AI Course Companion (AICC) — an LLM-powered Canvas-integrated study tool — under Dr. Oguzhan Topsakal, following OWASP WSTG v4.2 across information gathering, authentication, session management, input validation (XSS, HPP, SSTI, SSRF), error handling, and prompt injection as an LLM-specific supplementary category',
      'Built a Python + Playwright automated test suite covering all WSTG categories with a secondary Gemini-based LLM evaluator to eliminate false positives from naive keyword-matching; solved the authentication challenge by working with the AICC developer to obtain a scoped self-expiring session token for authenticated browser-driven tests',
      'Performed hypothesis-driven gray-box source review of the OAuth flow and backend API directory after being granted repository access — tracing request authentication and course data serving, then reproducing identified issues live against the sandbox to confirm exploitability',
      'Containerized the full test suite with Docker and deployed it to Google Cloud Run as a Job in AICC\'s GCP project — secrets in Secret Manager, results in GCS — then built and deployed a Flask web interface (Cloud Run Service) for browser-based test execution and result retrieval, handling all IAM, service-account, and Job/Service infrastructure',
    ],
  },
  {
    role: 'Student Software Developer',
    company: 'AI Course Companion · USF',
    period: 'Aug 2026 – Present',
    color: '#3b82f6',
    type: 'Industry',
    bullets: [
      'Remediated security vulnerabilities identified through the AICC security assessment, shipping production fixes across session management, data exposure, security headers, CORS controls, and Google Cloud Storage access',
      'Developed and maintained PHP 8.1 backend and JavaScript frontend components across the AICC codebase, implementing API endpoints, application logic, LLM integrations, and data-serving workflows for the Canvas-embedded platform',
      'Built admin dashboard features for usage and student-question analytics, developing supporting backend APIs and frontend modules to surface application insights and recurring student queries, while resolving production issues',
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
      'Implemented GHG Protocol-aligned emission factor calculations from scratch across 5 transport datasets (~50,000 records), covering Scope 1 fleet and Scope 3 Cat 4/6/7/9 — calculating ~83.8M kg CO₂ total',
      'Built 3 ML models: IsolationForest anomaly detection (flagged 6.3M kg CO₂ savings potential across 500 high-emission shipments), Prophet time-series forecasting (24-month projections), and XGBoost emissions regression (R²=0.9965)',
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
      'Serverless job application tracker with a Chrome Extension (MV3) using XHR monkey-patching and MutationObserver for zero-loss capture, a 5-Lambda backend with DynamoDB, Cognito JWT auth, and a live Streamlit dashboard with EventBridge + SES email reminders — architected entirely within AWS Free Tier.',
    tech: ['Python', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'Cognito', 'EventBridge', 'SES', 'Streamlit', 'Chrome Extension'],
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
      'Full-stack sustainability dashboard calculating ~83.8M kg CO₂ across 5 transport categories (Scope 1 & 3) using GHG Protocol emission factors applied to ~50,000 records. Features 3 ML models: IsolationForest anomaly detection (6.3M kg CO₂ savings flagged), Prophet 24-month forecasting, and XGBoost regression (R²=0.9965). Presented to an airport industry client.',
    tech: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'scikit-learn', 'Prophet', 'XGBoost', 'NumPy'],
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
    name: 'MOPS — Class Scheduling System',
    tagline: 'Full-Stack Scheduling Tool · FastAPI + React',
    description:
      'Full-stack web app for managing class schedules at USF Bellini College, built for CEN4020 Software Engineering with a 4-person Agile team. Features conflict detection, room heat maps, enrollment comparison, PDF export, and role-based access for committee members and chairs.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'SQLAlchemy'],
    color: '#3b82f6',
    emoji: '📋',
    github: 'https://github.com/moosaabbasii/Class-Scheduling-System-USF',
    live: '',
    featured: true,
  },
  {
    name: 'School Management System',
    tagline: 'Full-Stack Web Platform with C# & SQL',
    description:
      'Full-stack school management platform with student records, grade tracking, and administrative dashboards built on C# and SQL Server.',
    tech: ['C#', 'SQL Server', 'ASP.NET', 'HTML/CSS'],
    color: '#7c3aed',
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
