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
  roadmapImage?: string
}

export const courses: Course[] = [
  // Flagship Courses (Homepage)
  {
    id: 'nextjs-mastery',
    title: 'AI-Powered Full-Stack Next.js & Agentic Web',
    category: 'Development',
    iconName: 'Code',
    level: 'Beginner to Advanced',
    duration: '12 Weeks',
    students: '180+ Enrolled',
    description: 'Learn to build modern, database-backed web applications integrated with OpenAI, Vercel AI SDK, and LangChain.',
    longDescription: 'This course is a comprehensive roadmap designed to teach you how to build production-grade web systems powered by generative AI. You will learn next-generation paradigms: React 19 features, Next.js App Router, Vercel AI SDK integrations, Pinecone vector search, and dynamic backend agent setups.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'React 19, Next.js 16 & LLM API Basics', topics: ['Server & Client Components', 'Vercel AI SDK integration', 'Streaming responses & suspense patterns'] },
      { week: 'Weeks 4-6', title: 'Vector DBs & Embeddings', topics: ['Text embeddings with OpenAI', 'Pinecone / pgvector search schema', 'Data hydration & retrieval pipelines'] },
      { week: 'Weeks 7-9', title: 'Agentic Workflows & Tool Calling', topics: ['LangChain.js orchestration', 'Function calling & agent execution', 'Auth.js security & API limits'] },
      { week: 'Weeks 10-12', title: 'Deployment & Autonomous Operations', topics: ['Edge routing & caching rules', 'Docker setup for python side-runners', 'Lighthouse optimization & cost controls'] }
    ],
    whatYouWillLearn: [
      'Master Server Actions and React 19 hooks with streaming AI outputs',
      'Integrate production-ready authentication and AI usage limiters',
      'Implement Retrieval-Augmented Generation (RAG) using Pinecone and Postgres',
      'Orchestrate autonomous agent systems that use tool calling to execute code'
    ],
    prerequisites: ['Basic HTML/CSS knowledge', 'Familiarity with ES6 JavaScript arrays and objects'],
    tools: ['Next.js 16', 'Vercel AI SDK', 'OpenAI API', 'LangChain', 'Pinecone', 'Prisma'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40 group-hover:border-blue-500/50',
    accentColor: 'text-blue-500',
    colorFrom: 'from-blue-500/10',
    colorTo: 'to-indigo-500/10'
  },
  {
    id: 'design-systems',
    title: 'AI-Driven UI/UX & Generative Design Systems',
    category: 'Design',
    iconName: 'Layout',
    level: 'Intermediate',
    duration: '8 Weeks',
    students: '120+ Enrolled',
    description: 'Master professional Figma design systems supercharged by Figma AI, Midjourney generation, and prompt frameworks.',
    longDescription: 'Establish design consistency and accelerate your workflow by 10x. In this course, you will learn to build functional design libraries in Figma that integrate with AI assistants, covering token studio exports, generative color mapping, and rapid layout variables.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'AI-Assisted Layouts & Figma Tools', topics: ['Figma AI plugin ecosystem', 'Midjourney asset generation rules', 'Responsive frames & layout bounds'] },
      { week: 'Weeks 3-4', title: 'Figma Auto Layout v5 & Variables', topics: ['Dynamic variables constraints', 'Component properties structure', 'AI-assisted variant generation'] },
      { week: 'Weeks 5-6', title: 'Design Tokens & Themes via AI', topics: ['Defining color & type tokens with AI', 'Light & dark theme switching setups', 'Automated token translations to Tailwind'] },
      { week: 'Weeks 7-8', title: 'Handoff & Styling Automation', topics: ['Developer spec sheets generation', 'CSS variable maps validation', 'Interactive micro-interactions prototype'] }
    ],
    whatYouWillLearn: [
      'Build fully responsive component sheets using Figma Auto Layout and AI plugins',
      'Generate stunning vector assets and layouts using prompt templates',
      'Configure global tokens for automatic light/dark mode css property maps',
      'Coordinate frictionless developer handoff specifications with auto-generated code'
    ],
    prerequisites: ['Understand basic user personas', 'Familiarity with basic Figma tools is helpful but not required'],
    tools: ['Figma AI', 'Midjourney', 'Tokens Studio', 'Adobe Firefly'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40 group-hover:border-purple-500/50',
    accentColor: 'text-purple-500',
    colorFrom: 'from-purple-500/10',
    colorTo: 'to-pink-500/10'
  },
  {
    id: 'video-motion',
    title: 'AI-Enhanced Cinematic Video & Synthetic Media',
    category: 'Production',
    iconName: 'Video',
    level: 'Beginner to Professional',
    duration: '10 Weeks',
    students: '150+ Enrolled',
    description: 'Create high-converting video ads and cinematic content using Premiere Pro AI, ElevenLabs, and Runway Gen-2.',
    longDescription: 'Video is the primary driver of online engagement, and AI is revolutionizing post-production. Learn the principles of narrative splicing, AI voice synthesis, generative B-roll, and automated sound mapping to produce viral short-form and cinematic assets.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Premiere Pro & AI Audio Alignment', topics: ['Text-based video editing setups', 'Hook structural rules & visual pacing', 'Enhance Speech & AI noise filters'] },
      { week: 'Weeks 4-6', title: 'Runway Gen-2 & Synthetics', topics: ['Text-to-video prompt engineering', 'Midjourney image-to-video panning', 'Adobe Firefly generative fills'] },
      { week: 'Weeks 7-8', title: 'AI Voice Cloning & EQ Mixing', topics: ['ElevenLabs voice cloning techniques', 'Dynamic script-to-audio rendering', 'Ambient track side-chain setups'] },
      { week: 'Weeks 9-10', title: 'Color Grading & Algorithmic Exporting', topics: ['Cinematic grading with AI LUTs', 'Auto-reframe for mobile layouts', 'High-quality bitrates configuration'] }
    ],
    whatYouWillLearn: [
      'Master short-form video pacing supercharged by text-based AI cutting tools',
      'Generate professional video assets from textual prompts and raw sketches',
      'Clone and synthesize professional voiceovers with perfect emotional pacing',
      'Grade colors and design atmospheric audio systems to match brand mood'
    ],
    prerequisites: ['Computer with a dedicated GPU is highly recommended', 'No editing experience required'],
    tools: ['Runway Gen-2', 'ElevenLabs', 'Premiere Pro AI', 'After Effects', 'Midjourney'],
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
    title: 'AI-Assisted Web Dev & Rapid Prototyping',
    category: 'Development',
    iconName: 'Globe',
    level: 'Beginner',
    duration: '6 Weeks',
    students: '100+ Enrolled',
    description: 'Learn the core languages of the web while leveraging Cursor, Copilot, and v0 to build sites at warp speed.',
    longDescription: 'Start your coding career with the tools of tomorrow. Learn the essential blocks of building web pages. Focus on semantic HTML, accessible CSS layouts, and modern JavaScript logic, all guided by AI co-pilots.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'HTML5 & AI Layout Prompting', topics: ['Semantic structures & accessibility rules', 'v0.dev layout prompting systems', 'UI wireframing strategies'] },
      { week: 'Weeks 3-4', title: 'CSS3 & Tailwind Prototyping', topics: ['Flexbox & CSS Grid fundamentals', 'Tailwind v4 utility structures', 'AI-assisted responsive style overrides'] },
      { week: 'Weeks 5-6', title: 'JavaScript & AI Debugging', topics: ['DOM events handling basics', 'Cursor IDE autocomplete workflows', 'Live publishing to Netlify / Vercel'] }
    ],
    whatYouWillLearn: [
      'Write valid, semantic HTML5 structures in collaboration with LLM systems',
      'Build fully responsive web layouts using Tailwind CSS v4 and fluid properties',
      'Debug client scripts and write functional JS using Cursor editor models',
      'Publish high-performance static websites directly to modern hosting providers'
    ],
    prerequisites: ['No prior programming background required'],
    tools: ['Cursor IDE', 'v0.dev', 'GitHub Copilot', 'HTML5', 'CSS3', 'Modern JS'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40',
    roadmapImage: '/web development.png'
  },
  {
    id: 'figma-dev',
    title: 'Automated Figma & AI Token Orchestration',
    category: 'Design Systems',
    iconName: 'PenTool',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '80+ Enrolled',
    description: 'Design UI structures in Figma using automated pipelines, generative variables, and JSON token outputs.',
    longDescription: 'Master design tokens and automation tools in Figma. Learn how to convert static designs into responsive components with programmatic variables, synchronizing changes automatically with frontend libraries.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Figma Auto Layout & Component Specs', topics: ['Atomic components creation', 'Figma AI prompt templates', 'Variant properties mapping'] },
      { week: 'Weeks 4-5', title: 'CSS Variable Modes & Tokens', topics: ['Defining color & type tokens with AI', 'Light & dark switching structures', 'Variables token nesting'] },
      { week: 'Weeks 6-8', title: 'Tokens Studio & Code Sync', topics: ['Exporting token JSON scripts', 'Synchronizing changes via GitHub API', 'Automating Tailwind class generation'] }
    ],
    whatYouWillLearn: [
      'Build modular, responsive UI components using auto-layout variables',
      'Utilize Figma AI tools to generate consistent design token layouts',
      'Establish a unified bridge to translate token files directly into React CSS rules',
      'Structure high-fidelity layouts optimized for automated developer handoff'
    ],
    prerequisites: ['Familiarity with visual design principles is helpful'],
    tools: ['Figma API', 'Figma AI', 'Tokens Studio', 'Claude 3.5 Sonnet'],
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'hover:border-pink-500/40'
  },
  {
    id: 'frontend-dev',
    title: 'AI-Native Frontend Engineering (React & v0)',
    category: 'Development',
    iconName: 'Code2',
    level: 'Intermediate',
    duration: '10 Weeks',
    students: '120+ Enrolled',
    description: 'Build animated user interfaces with React 19, Next.js, and Framer Motion, optimized via AI coding assistants.',
    longDescription: 'Learn frontend engineering from the future. Design high-fidelity, interactive, and beautifully animated web interfaces using React 19 and Tailwind CSS v4, while optimizing the build process via prompt engineering.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'React 19 Hooks & AI Generation', topics: ['Custom state hooks & patterns', 'v0.dev UI components generation', 'Dynamic data binding structures'] },
      { week: 'Weeks 4-6', title: 'High-Fidelity Transitions & Layouts', topics: ['Tailwind v4 styling rules', 'Framer Motion page animations', 'Cursor code refactoring pipelines'] },
      { week: 'Weeks 7-10', title: 'Next.js Routing & Data Hydration', topics: ['App Router directory setups', 'Server/Client data streaming hooks', 'SEO meta tag optimizations'] }
    ],
    whatYouWillLearn: [
      'Write clean, modular React hooks in collaboration with AI code generators',
      'Apply fluid page transitions and interactive hover effects with Framer Motion',
      'Refactor complex components using Cursor Chat and Claude 3.5',
      'Deploy performant, fully accessible frontend layouts scoring 95+ on audits'
    ],
    prerequisites: ['Solid understanding of ES6 JavaScript and HTML/CSS styling'],
    tools: ['React 19', 'Next.js 16', 'v0.dev', 'Cursor', 'Tailwind CSS v4', 'Framer Motion'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'hover:border-purple-500/40',
    roadmapImage: '/front-end .png'
  },
  {
    id: 'ui-ux',
    title: 'AI UX Research & Cognitive Layout Optimization',
    category: 'Design',
    iconName: 'Compass',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks',
    students: '90+ Enrolled',
    description: 'Design interfaces backed by cognitive psychology. Optimize click behaviors using predictive AI analytics and heatmaps.',
    longDescription: 'Accelerate user conversions through scientific design. Learn to analyze user mental models, hierarchy rules, and focus patterns using AI eye-tracking heatmaps and simulated user personas.',
    syllabus: [
      { week: 'Weeks 1-2', title: 'UI Hierarchy & Gestalt Principles', topics: ['Gestalt structural laws', 'Visual weights & layout focus rules', 'Color contrasting standards'] },
      { week: 'Weeks 3-5', title: 'AI-Driven User Testing & Persons', topics: ['LLM persona simulation templates', 'Attention map analysis scripts', 'A/B testing mockup structures'] },
      { week: 'Weeks 6-8', title: 'Conversion Systems & Audit Metrics', topics: ['Form conversions funnel rules', 'WCAG contrast compliance scans', 'Interactive user feedback systems'] }
    ],
    whatYouWillLearn: [
      'Structure high-fidelity layouts based on Gestalt visual laws and cognitive speed',
      'Generate and iterate user personas using ChatGPT to find product vulnerabilities',
      'Run predictive AI attention heatmap analyses before code implementation',
      'Audit interfaces to ensure full WCAG contrast and accessibility rules'
    ],
    prerequisites: ['No background required', 'A keen eye for layout balance is helpful'],
    tools: ['Attention Insight', 'ChatGPT UI Prompts', 'Figma', 'Hotjar AI'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'hover:border-orange-500/40'
  },
  {
    id: 'backend-dev',
    title: 'AI backend APIs, LLM Agents & Vector Databases',
    category: 'Development',
    iconName: 'Server',
    level: 'Intermediate to Advanced',
    duration: '10 Weeks',
    students: '75+ Enrolled',
    description: 'Design robust Node.js backend APIs, database models, Pinecone vector search, and LLM middleware.',
    longDescription: 'Power web interfaces with intelligent backends. This course focuses on backend server architectures, relational databases, token optimization, and custom RAG (Retrieval-Augmented Generation) pipelines.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Express.js Servers & OpenAI Integration', topics: ['Asynchronous middleware routes', 'Streaming completions API endpoints', 'JWT secure authentication loops'] },
      { week: 'Weeks 4-6', title: 'Databases & Vector Embeddings', topics: ['MongoDB database schemas modeling', 'Pinecone / Pgvector indexing setups', 'Semantic query matching logic'] },
      { week: 'Weeks 7-10', title: 'Agent Orchestration & Deployments', topics: ['LangChain agent chains structures', 'Caching schemas with Redis', 'Deploying containerized API systems'] }
    ],
    whatYouWillLearn: [
      'Write secure, structured REST API routers in Node.js with Express and TypeScript',
      'Integrate LangChain.js to orchestrate backend prompts and database operations',
      'Design fast vector search databases using Pinecone for AI contextual search',
      'Manage API rate limiting, caching setups, and environment configurations'
    ],
    prerequisites: ['JavaScript programming foundation', 'Understand basic client/server request protocols'],
    tools: ['Node.js', 'Express', 'Pinecone DB', 'LangChain', 'OpenAI API', 'Docker'],
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'hover:border-indigo-500/40',
    roadmapImage: '/back end .png'
  },
  {
    id: 'fullstack-dev',
    title: 'Autonomous AI SaaS Builder: Next.js & LangChain',
    category: 'Development',
    iconName: 'Cpu',
    level: 'Advanced',
    duration: '12 Weeks',
    students: '140+ Enrolled',
    description: 'Combine frontend design with backend database systems to deploy complete autonomous AI SaaS portals.',
    longDescription: 'Bring systems together to build complete AI startups. From concept to production, learn to construct a full-stack SaaS application with user dashboards, dynamic databases, OpenAI API integration, automated Stripe subscription systems, and GitHub Actions CI/CD.',
    syllabus: [
      { week: 'Weeks 1-4', title: 'TypeScript Systems Architecture', topics: ['System design & DB schema planning', 'Auth middlewares & token limiters', 'Dynamic directory route configs'] },
      { week: 'Weeks 5-8', title: 'Core Agent Features & Billing', topics: ['LangChain.js pipeline configurations', 'Stripe checkout & webhook hooks', 'Real-time WebSocket chat flows'] },
      { week: 'Weeks 9-12', title: 'CI/CD & Live Cloud Deployments', topics: ['Testing suites for AI models', 'GitHub Actions workflow configurations', 'SaaS launch audits & performance checks'] }
    ],
    whatYouWillLearn: [
      'Architect type-safe full-stack React and Next.js applications using TypeScript',
      'Create custom AI chatbots that fetch contextual database records in real-time',
      'Configure payment gateways and handle dynamic webhooks in Vercel functions',
      'Automate integration testing and build configurations using CI/CD loops'
    ],
    prerequisites: ['Intermediate React capability', 'Familiarity with basic server architectures'],
    tools: ['TypeScript', 'Next.js App Router', 'LangChain.js', 'Stripe', 'PostgreSQL', 'Vercel'],
    color: 'text-teal-500',
    bgColor: 'bg-teal-500/10',
    borderColor: 'hover:border-teal-500/40'
  },
  {
    id: 'app-dev',
    title: 'AI-Integrated Mobile Apps (React Native & Whisper)',
    category: 'Development',
    iconName: 'Smartphone',
    level: 'Advanced',
    duration: '10 Weeks',
    students: '85+ Enrolled',
    description: 'Build native mobile apps with React Native, incorporating speech-to-text, device vision, and LLM APIs.',
    longDescription: 'Create smart mobile experiences. Master native mobile views, global state routines, and device API integrations (speech-to-text, device cameras, local models) using Expo and EAS build tools.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Native Mobile & Expo Router Layouts', topics: ['Flexbox mobile styling systems', 'Expo Router parameters mapping', 'Screen state transition rules'] },
      { week: 'Weeks 4-6', title: 'Whisper Audio & Device Cameras', topics: ['Speech-to-text Whisper integrations', 'Local SQLite dataset configurations', 'Device hardware authorization loops'] },
      { week: 'Weeks 7-10', title: 'Build CLI & App Store Distributions', topics: ['EAS configuration files templates', 'TestFlight test runs setups', 'Google Play Developer release configurations'] }
    ],
    whatYouWillLearn: [
      'Design fully responsive native mobile app screens matching high-fidelity specs',
      'Access local speech recognition and visual processing models on-device',
      'Configure global states and handle network requests securely on mobile clients',
      'Publish live mobile app updates automatically using EAS Update CLI'
    ],
    prerequisites: ['React layout state familiarity', 'JavaScript ES6 core logic'],
    tools: ['React Native', 'Expo', 'EAS CLI', 'Whisper API', 'TensorFlow Lite'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'hover:border-emerald-500/40'
  },
  {
    id: 'video-editing',
    title: 'AI Content Creation & Video Automation',
    category: 'Production',
    iconName: 'Video',
    level: 'Beginner to Professional',
    duration: '8 Weeks',
    students: '95+ Enrolled',
    description: 'Automate short-form video editing workflows. Learn timeline pacing, audio enhancements, and algorithmic clipping.',
    longDescription: 'Establish editing systems to scale video output. Focus on visual assembly workflows, background audio design, automatic visual subtitle generation, and platform export rules.',
    syllabus: [
      { week: 'Weeks 1-3', title: 'Scripting & Video Generators', topics: ['ChatGPT script templates configurations', 'Midjourney prompt guides for scene cuts', 'Auto-timeline cuts layouts'] },
      { week: 'Weeks 4-5', title: 'Speech-to-Text & Subtitles', topics: ['CapCut AI caption configurations', 'Descript vocal editing workspaces', 'Custom transition effects plugins'] },
      { week: 'Weeks 6-8', title: 'Atmospheric Audio & Multi-Exports', topics: ['AI background audio mixing rules', 'LUT color grading templates', 'Multi-platform aspect ratios templates'] }
    ],
    whatYouWillLearn: [
      'Write optimized hooks and video scripts using ChatGPT templates',
      'Create high-impact captions and subtitle animations automatically with AI',
      'Assemble Premiere Pro timelines from script assets in minutes',
      'Mix clear vocal tracks and configure automated platform export runs'
    ],
    prerequisites: ['Computer with a dedicated GPU', 'No prior editing knowledge required'],
    tools: ['Premiere Pro AI', 'Descript', 'CapCut AI', 'Midjourney'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/40'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering & Generative AI Special Class',
    category: 'AI Special',
    iconName: 'Cpu',
    level: 'All Levels',
    duration: '4 Weeks',
    students: 'Live & Enrolling',
    description: 'Master the art of prompt design: Few-shot learning, system prompt architecture, prompt evaluation, caching, and building AI agents.',
    longDescription: 'This specialized 4-week sprint is designed to turn you into a professional Prompt Engineer. You will learn the exact techniques used to program LLMs, manage token costs, design robust system prompts, build tool-calling pipelines, and evaluate prompt stability under load.',
    syllabus: [
      { week: 'Week 1', title: 'Foundations of LLM Communication', topics: ['Tokenizer mechanics & context windows', 'Few-shot and zero-shot prompting rules', 'System vs User vs Assistant role splits'] },
      { week: 'Week 2', title: 'Advanced Prompt Architectures', topics: ['Chain of Thought (CoT) & Tree of Thoughts', 'Self-consistency & prompt output schema validation', 'Formatting prompts via XML/JSON markers'] },
      { week: 'Week 3', title: 'System Prompt Engineering & Caching', topics: ['Building agentic system prompts', 'Handling prompt injection & jailbreak risks', 'Prompt caching architectures & cost optimization'] },
      { week: 'Week 4', title: 'Evaluation & Prompt Pipelines', topics: ['Automated prompt stability tests', 'Retrieval-Augmented Generation (RAG) context injects', 'Integrating prompt templates in Node/Python runtimes'] }
    ],
    whatYouWillLearn: [
      'Write highly deterministic prompts for production AI applications',
      'Optimize API usage costs using prompt caching and context pruning',
      'Secure AI applications against prompt injection and security exploits',
      'Design advanced agent logic with XML tags and structured JSON outputs'
    ],
    prerequisites: ['Basic computer skills', 'No coding experience needed, but JavaScript/Python is helpful'],
    tools: ['OpenAI Playground', 'Claude Workbench', 'LangChain', 'Promptfoo', 'v0.dev'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/40 group-hover:border-amber-500/50',
    accentColor: 'text-amber-500',
    colorFrom: 'from-amber-500/10',
    colorTo: 'to-orange-500/10'
  }
]
