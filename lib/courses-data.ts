export interface Course {
  id: string
  title: string
  category: string
  iconName: string // Lucide icon component name
  level: string
  duration: string
  students: string
  description: string
  longDescription: string
  syllabus: { week: string; title: string; topics: string[] }[]
  whatYouWillLearn: string[]
  prerequisites: string[]
  tools: string[]
  color: string
  bgColor: string
  borderColor: string
  accentColor: string
  colorFrom?: string
  colorTo?: string
}

export const courses: Course[] = [
  // Flagship Courses (Homepage)
  {
    id: 'nextjs-mastery',
    title: 'Full-Stack Next.js & React Mastery',
    category: 'Development',
    iconName: 'Code',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    students: '180+ Enrolled',
    description: 'Learn to build modern, database-backed web applications with Tailwind CSS, Server Actions, and REST/GraphQL APIs.',
    longDescription: 'This course is a comprehensive, production-grade roadmap designed to take you from core React principles to deploying highly scalable SaaS applications. You will learn next-generation paradigms: React 19 features, Next.js App Router, Server Components, and seamless database structures.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'React 19 & App Router Basics', topics: ['Server & Client Components', 'Routing & Layout hierarchies', 'Suspense & dynamic loading'] },
      { week: 'Weeks 4-6', title: 'State & Database Operations', topics: ['Server Actions & Forms state', 'MongoDB schemas & relationships', 'Prisma ORM setup'] },
      { week: 'Weeks 7-9', title: 'Security & APIs', topics: ['NextAuth/Auth.js configuration', 'JWT cookies & middleware', 'RESTful & GraphQL API routers'] },
      { week: 'Weeks 10-12', title: 'Deployment & Scaling', topics: ['Vercel edge caching rules', 'Docker container setups', 'Unit testing & lighthouse metrics'] }
    ],
    whatYouWillLearn: [
      'Master Server Actions and React 19 hooks like useActionState and useOptimistic',
      'Integrate production-ready authentication layers using Auth.js',
      'Optimize web vitals to score 100 on Google PageSpeed Insights',
      'Design robust databases with Prisma, PostgreSQL, and MongoDB'
    ],
    prerequisites: ['Basic HTML/CSS knowledge', 'Familiarity with ES6 JavaScript arrays and objects'],
    tools: ['Next.js', 'React 19', 'Tailwind CSS v4', 'PostgreSQL', 'Prisma', 'Vercel'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40 group-hover:border-blue-500/50',
    accentColor: 'text-blue-500',
    colorFrom: 'from-blue-500/10',
    colorTo: 'to-indigo-500/10'
  },
  {
    id: 'design-systems',
    title: 'UI/UX Visual Design Systems',
    category: 'Design',
    iconName: 'Layout',
    level: 'Intermediate',
    duration: '8 Weeks',
    students: '120+ Enrolled',
    description: 'Master professional design systems in Figma. Understand color psychology, typography hierarchy, and interactive wireframes.',
    longDescription: 'Establish design consistency across screens, platforms, and teams. In this course, you will learn to build functional design libraries in Figma that integrate 1-to-1 with coding systems, covering auto layout, fluid typography, and nested token ecosystems.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'Atomic Design & Figma Tools', topics: ['Atomic setups & structure rules', 'Figma vectors & pen masteries', 'Layout grids & fluid bounds'] },
      { week: 'Weeks 3-4', title: 'Figma Auto Layout v5 & Props', topics: ['Dynamic constraints & variables', 'Component property architecture', 'Nested structural configurations'] },
      { week: 'Weeks 5-6', title: 'Design Tokens & Themes', topics: ['Semantic token systems', 'Light & dark theme switching setups', 'Typography scales & line metrics'] },
      { week: 'Weeks 7-8', title: 'Handoff & Specifications', topics: ['Developer specs documentation', 'Redlining interfaces', 'Interactive prototype animations'] }
    ],
    whatYouWillLearn: [
      'Build fully responsive component sheets using Figma Auto Layout v5',
      'Configure global tokens for automatic light/dark mode design maps',
      'Produce clickable micro-interaction visual prototypes',
      'Coordinate frictionless developer handoff specifications'
    ],
    prerequisites: ['Understand basic user personas', 'Familiarity with basic Figma tools is helpful but not required'],
    tools: ['Figma', 'FigJam', 'Tokens Studio', 'Miro'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40 group-hover:border-purple-500/50',
    accentColor: 'text-purple-500',
    colorFrom: 'from-purple-500/10',
    colorTo: 'to-pink-500/10'
  },
  {
    id: 'video-motion',
    title: 'Cinematic Video Editing & Motion Graphics',
    category: 'Production',
    iconName: 'Video',
    level: 'Beginner to Professional',
    duration: '10 Weeks',
    students: '150+ Enrolled',
    description: 'Create high-converting video advertisements and cinematic short-form content with Adobe Premiere Pro and After Effects.',
    longDescription: 'Video is the primary driver of online engagement. Learn the elite principles of narrative splicing, kinetic subtitles, background sound mixing, and cinematic color space configurations to produce video content that holds viewer attention.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Premiere Pro Timeline Mastery', topics: ['Cinematic cuts & assembly setups', 'Hook structures & pacing guides', 'Audio track nesting & routing'] },
      { week: 'Weeks 4-6', title: 'After Effects & Motion Graphics', topics: ['Keyframing & curves layout', 'Kinetic typography scripts', 'Tracking & mask elements'] },
      { week: 'Weeks 7-8', title: 'Audio Design & EQ Filters', topics: ['Vocal enhancement steps', 'Ambient layer mixing rules', 'Sound effect integration syncs'] },
      { week: 'Weeks 9-10', title: 'Color Grading & Exporting', topics: ['Cinematic grading with LUTs', 'Lighting & highlight recovery', 'Bitrate compression rules for web'] }
    ],
    whatYouWillLearn: [
      'Master fast, high-tension short-form timeline pacing and hook formulas',
      'Create custom text animations and transitions in After Effects',
      'Perform audio EQ, noise elimination, and atmospheric sound design',
      'Color grade flat camera spaces to custom cinematic styles'
    ],
    prerequisites: ['Computer with a dedicated GPU is highly recommended', 'No editing experience required'],
    tools: ['Premiere Pro', 'After Effects', 'Audition', 'DaVinci Resolve'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'hover:border-teal-500/40 group-hover:border-teal-500/50',
    accentColor: 'text-teal-500',
    colorFrom: 'from-teal-500/10',
    colorTo: 'to-emerald-500/10'
  },

  // Catalog Courses
  {
    id: 'web-dev',
    title: 'Web Development Core',
    category: 'Development',
    iconName: 'Globe',
    level: 'Beginner',
    duration: '6 Weeks',
    students: '100+ Enrolled',
    description: 'Learn the foundational languages of the web. Build clean, static websites and understand responsive rendering.',
    longDescription: 'Start your coding career here. Learn the essential blocks of building web documents. Focus on accessibility, fluid layout engines, and standard JavaScript logic without framework overhead.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'HTML5 Foundations', topics: ['Semantic layout markup', 'Forms & visual element maps', 'ARIA tags & accessibility rules'] },
      { week: 'Weeks 3-4', title: 'CSS3 Page Design', topics: ['Flexbox & CSS Grid architectures', 'Media query responsive styles', 'Animations & custom filters'] },
      { week: 'Weeks 5-6', title: 'JavaScript & Web Deployment', topics: ['DOM manipulation basics', 'Event handlers & functions', 'Git & GitHub deployment scripts'] }
    ],
    whatYouWillLearn: [
      'Write structured, valid, and accessible HTML5 documents from scratch',
      'Build fully responsive websites without relying on third-party frameworks',
      'Apply dynamic styles and handle client events using vanilla JavaScript',
      'Publish live websites directly to Netlify or GitHub Pages'
    ],
    prerequisites: ['No prior programming background required'],
    tools: ['VS Code', 'Git', 'HTML5', 'CSS3', 'Modern JavaScript'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40'
  },
  {
    id: 'figma-dev',
    title: 'Figma Development Systems',
    category: 'Design Systems',
    iconName: 'PenTool',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '80+ Enrolled',
    description: 'Design digital layouts from scratch. Master design systems, auto-layout architectures, and components.',
    longDescription: 'Master modern layout frameworks and design standards in Figma. Learn how to convert static mockups into reusable component libraries with variables, easing the workflow for dev teams.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Figma Components', topics: ['Component variants & properties', 'Interactive states configurations', 'Nested structures setups'] },
      { week: 'Weeks 4-5', title: 'Auto Layout v5 Sizing', topics: ['Min/max constraints rules', 'Padding & margin boundaries', 'Responsive visual structures'] },
      { week: 'Weeks 6-8', title: 'Design Token setups', topics: ['Defining color & type tokens', 'Variables & modes setup', 'Exporting systems to JSON code'] }
    ],
    whatYouWillLearn: [
      'Architect atomic design systems in Figma with nesting and properties',
      'Utilize layout variables to build dynamic templates',
      'Bridge designer and developer workflows with JSON token sheets',
      'Build scalable multi-brand component setups'
    ],
    prerequisites: ['Familiarity with visual principles is helpful'],
    tools: ['Figma', 'Tokens Studio', 'Figma API'],
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'hover:border-pink-500/40'
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Engineering (React)',
    category: 'Development',
    iconName: 'Code2',
    level: 'Intermediate',
    duration: '10 Weeks',
    students: '120+ Enrolled',
    description: 'Build fast, interactive user interfaces with React, Next.js, Tailwind CSS, and Framer Motion.',
    longDescription: 'React is the market leader for interactive UI delivery. We cover component lifecycle states, styling libraries, transition animations, and modern API ingestion frameworks.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'React Core & States', topics: ['Hooks & custom state logic', 'Props & virtual DOM maps', 'Lists, conditional rendering'] },
      { week: 'Weeks 4-6', title: 'Modern Styling & Transitions', topics: ['Tailwind CSS layout rules', 'Framer Motion transition triggers', 'Responsive grid implementations'] },
      { week: 'Weeks 7-10', title: 'Next.js App Architecture', topics: ['App Router & components structure', 'Data fetching & hydration models', 'SEO & metadata implementations'] }
    ],
    whatYouWillLearn: [
      'Write clean, reusable React functional components and hooks',
      'Apply high-fidelity styles with utility classes and custom property structures',
      'Coordinate fluid page transitions using Framer Motion animations',
      'Build performant Next.js static and dynamic web structures'
    ],
    prerequisites: ['Solid understanding of ES6 JavaScript and HTML/CSS styling'],
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Eslint'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Visual Design',
    category: 'Design',
    iconName: 'Compass',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '90+ Enrolled',
    description: 'Understand the core psychology of layouts. Design interfaces that are intuitive, clean, and accessible.',
    longDescription: 'High performance is backed by human-centric layouts. You will analyze user mental models, hierarchy structures, color spaces, and click behaviors to shape interfaces that feel smooth and convert users.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'Visual Psychology', topics: ['Gestalt principles of layouts', 'Color theory & visual hierarchy', 'Typography hierarchy frameworks'] },
      { week: 'Weeks 3-5', title: 'User Research & Mockups', topics: ['User personas & wireframing workflows', 'Journey mapping setups', 'High-fidelity mockup designs'] },
      { week: 'Weeks 6-8', title: 'Interactions & Accessibility', topics: ['Micro-interaction visual guidelines', 'WCAG color & contrast regulations', 'Usability validation audits'] }
    ],
    whatYouWillLearn: [
      'Apply Gestalt visual laws to balance website layout grids',
      'Determine color palettes and typography structures for corporate profiles',
      'Construct user persona flows that minimize conversion friction',
      'Audit interfaces for WCAG accessibility standards'
    ],
    prerequisites: ['No background required', 'A keen eye for layout balance is helpful'],
    tools: ['Figma', 'Miro', 'Contrast Checkers', 'UsabilityTest Tools'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'hover:border-orange-500/40'
  },
  {
    id: 'backend-dev',
    title: 'Backend Development & Databases',
    category: 'Development',
    iconName: 'Server',
    level: 'Intermediate to Advanced',
    duration: '10 Weeks',
    students: '75+ Enrolled',
    description: 'Design robust APIs, schema databases, and authentication handlers. Learn server systems logic.',
    longDescription: 'Power web clients with secure, performant backends. This course targets server routing, REST schemas, SQL/NoSQL databases, and security strategies.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Node.js & Express API servers', topics: ['Event loops & async logic setups', 'Middleware pipelines structures', 'REST endpoint integrations'] },
      { week: 'Weeks 4-6', title: 'Databases & Mongoose Modeling', topics: ['MongoDB schema configurations', 'Indexing & query optimizers', 'PostgreSQL tables relationships'] },
      { week: 'Weeks 7-10', title: 'Security & Deployments', topics: ['JWT token session controls', 'Cors, hashing, and helmet rules', 'Hosting APIs to cloud environments'] }
    ],
    whatYouWillLearn: [
      'Write RESTful endpoints using Express and Node.js core modules',
      'Model relational PostgreSQL and schema-free MongoDB configurations',
      'Configure JWT tokens and password hashing systems',
      'Deploy server runtimes with proper environment configurations'
    ],
    prerequisites: ['JavaScript programming foundation', 'Understand basic client/server request protocols'],
    tools: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Docker'],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'hover:border-indigo-500/40'
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Software Engineering',
    category: 'Development',
    iconName: 'Cpu',
    level: 'Advanced',
    duration: '12 Weeks',
    students: '140+ Enrolled',
    description: 'Combine frontend design with backend database systems to deploy complete SaaS applications.',
    longDescription: 'Bring systems together. Combine front-end interactivity with back-end database schemas to build, secure, and deploy complete SaaS portals with payment pathways and real-time updates.',
    syllabus: [
      { week: 'Weeks 1-4', title: 'Architecture Planning', topics: ['System design & DB planning', 'Auth middlewares setup', 'Folder routing models'] },
      { week: 'Weeks 5-8', title: 'Core Features Coding', topics: ['State systems configuration', 'Payment integrations (Stripe)', 'Real-time features via Websockets'] },
      { week: 'Weeks 9-12', title: 'Testing & Live Operations', topics: ['Integration tests suites', 'CI/CD pipeline structures', 'Performance scaling audits'] }
    ],
    whatYouWillLearn: [
      'Establish unified TypeScript client and server interfaces',
      'Manage multi-page state and background updates',
      'Integrate Stripe payment gateways and webhooks handlers',
      'Implement CI/CD deployment runs via GitHub Actions'
    ],
    prerequisites: ['Intermediate React capability', 'Familiarity with basic server architectures'],
    tools: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'GitLab CI'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'hover:border-teal-500/40'
  },
  {
    id: 'app-dev',
    title: 'App Development (React Native)',
    category: 'Development',
    iconName: 'Smartphone',
    level: 'Advanced',
    duration: '10 Weeks',
    students: '85+ Enrolled',
    description: 'Build native, cross-platform mobile apps for iOS and Android using React Native and Expo frameworks.',
    longDescription: 'Deploy native mobile apps without writing distinct Swift or Kotlin code bases. Learn native layout mechanics, state management, push notification systems, and how to configure builds for App Stores.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Native Layout mechanics', topics: ['Flexbox rules differences', 'Expo Router systems', 'Component styling layouts'] },
      { week: 'Weeks 4-6', title: 'Hardware Integration', topics: ['Camera & location access permissions', 'Local sqlite database models', 'Push notification listeners'] },
      { week: 'Weeks 7-10', title: 'Store Builds & Operations', topics: ['EAS builds command configurations', 'Google Play uploads setup', 'TestFlight user distributions'] }
    ],
    whatYouWillLearn: [
      'Build responsive screens matching native design structures',
      'Access local device features like cameras, maps, and local directories',
      'Coordinate React Native global state routines',
      'Automate builds and store updates using EAS CLI'
    ],
    prerequisites: ['React layout state familiarity', 'JavaScript ES6 core logic'],
    tools: ['React Native', 'Expo', 'EAS CLI', 'Android Studio', 'Xcode'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/40'
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Content Creation',
    category: 'Production',
    iconName: 'Video',
    level: 'Beginner to Professional',
    duration: '8 Weeks',
    students: '95+ Enrolled',
    description: 'Master storytelling through video. Learn timeline pacing, audio engineering, custom transitions, color grading, and dynamic text effects.',
    longDescription: 'Establish editing systems to produce social shorts, marketing ads, and cinematic tutorials. Focus on visual assembly rules, background audio mixing, kinetic text overlay styles, and color profiles.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Timeline Assemblies', topics: ['Premiere layout configurations', 'Pacing guidelines & trims', 'Visual shortcuts mastery'] },
      { week: 'Weeks 4-5', title: 'Subtitles & Graphics', topics: ['Text graphic designs', 'Kinetic zoom templates', 'Light and color visual effects'] },
      { week: 'Weeks 6-8', title: 'Audio & Export profiles', topics: ['Vocal cleaning & dynamic adjustments', 'LUTs color grade schemes', 'Platform optimal exports profiles'] }
    ],
    whatYouWillLearn: [
      'Establish robust visual editing structures inside Premiere Pro timelines',
      'Apply dynamic titles and custom-timed graphics',
      'Mix multiple sound layers with clean vocal properties',
      'Design color templates using professional LUT tables'
    ],
    prerequisites: ['Computer with a dedicated GPU', 'No prior editing knowledge required'],
    tools: ['Premiere Pro', 'After Effects', 'Media Encoder'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/40'
  }
]
