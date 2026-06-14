export interface BlogPost {
  id: string
  title: string
  category: 'Development' | 'Design' | 'Production' | 'Academy'
  date: string
  readTime: string
  excerpt: string
  content: string[] // Array of paragraphs for clean rendering
  author: {
    name: string
    avatar: string // initials or URL
    role: string
  }
  color: string
  bgColor: string
  borderColor: string
}

export const blogs: BlogPost[] = [
  {
    id: 'nextjs-future',
    title: 'Mastering React 19 and Next.js 16: The Future of Web Architecture',
    category: 'Development',
    date: 'June 12, 2026',
    readTime: '6 min read',
    excerpt: 'Explore how Server Actions, Optimistic Updates, and compiler modifications in React 19 simplify state management and speed up delivery pipelines.',
    author: {
      name: 'Gul Mohammad',
      avatar: 'GM',
      role: 'Full-Stack Developer & Head Coach'
    },
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'hover:border-blue-500/40',
    content: [
      'The modern web ecosystem moves incredibly fast, and the latest releases of React 19 and Next.js 16 mark one of the most significant architectural milestones in recent history. As developers, the way we handle data operations, side effects, and state tracking has undergone a paradigm shift, transitioning from client-heavy architectures to server-centric systems.',
      'One of the major features introduced is native Server Actions. Previously, fetching and modifying data required setting up REST or GraphQL APIs, writing extensive fetch boilerplate, and managing async flags with complex hooks like useEffect. In React 19, you can write database query logic directly in asynchronous server actions, passing data securely from forms directly into backend operations. This reduces API overhead and significantly decreases bundle sizes.',
      'Complementing Server Actions is the new useOptimistic hook. User experience is critical for engagement. Waiting for server trips on small database operations can make applications feel slow. By utilizing optimistic updates, UI inputs reflect changes instantly while the background transaction completes. If the server transaction succeeds, the transition resolves; if it fails, the UI rolls back cleanly, providing a native-app-like experience.',
      'Additionally, Next.js 16 leverages a brand new compiler that eliminates the need for manual memoization (useMemo and useCallback). Developers can focus on writing pure, declarative Javascript while the framework ensures render paths are optimal and fast. Embracing these tools is no longer optional—it is the standard for building production-grade digital applications.'
    ]
  },
  {
    id: 'design-systems-scale',
    title: 'Design System Fundamentals: Creating Scalable Figma Ecosystems',
    category: 'Design',
    date: 'June 10, 2026',
    readTime: '5 min read',
    excerpt: 'A comprehensive guide on creating atomic tokens, fluid variables, and robust component variants that simplify the developer handoff process.',
    author: {
      name: 'Gul Mohammad',
      avatar: 'GM',
      role: 'UI/UX Designer & Coach'
    },
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'hover:border-pink-500/40',
    content: [
      'In visual design, consistency is what separates average projects from premium digital experiences. Designing ad-hoc screens without underlying rules leads to visual drift, layout bloat, and prolonged engineering cycles. This is why mastering Figma Design Systems has become a core requirement for designers and frontend developers.',
      'A true design system is built from atomic elements: design tokens. Tokens represent the smallest variables of design values—such as primary color hex codes, line heights, font weights, border radiuses, and shadow offsets. By mapping color spaces to variables (e.g. mapping white to surface-primary), we can instantly toggle dark mode or implement custom user themes globally.',
      'Figma\'s Auto Layout v5 enables fluid layouts that mimic CSS Flexbox and Grid. When auto layout variables are set, designs automatically resize across mobile, tablet, and ultra-wide desktop monitors. This ensures that visual layouts stay responsive and eliminates the need for draw-slicing separate viewports.',
      'The final piece is developer handoff. By structuring Figma components to match React props, engineers can map variables directly. For example, a button component in Figma with options for size (sm, md, lg) and variant (primary, outline, ghost) corresponds 1-to-1 with Tailwind classes in code. This bridge speeds up building and ensures what is designed matches what is shipped.'
    ]
  },
  {
    id: 'narrative-cutting-video',
    title: 'Narrative Cutting: The Art of Pacing in Short-Form Video Production',
    category: 'Production',
    date: 'June 08, 2026',
    readTime: '4 min read',
    excerpt: 'Learn the principles of pacing, sound design, and color grading that transform raw video assets into high-converting visual assets.',
    author: {
      name: 'Gul Mohammad',
      avatar: 'GM',
      role: 'Video Editor & Content Expert'
    },
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'hover:border-amber-500/40',
    content: [
      'Video has become the most powerful form of online communication. Whether you are selling digital services, explaining software architecture, or hosting educational classes, engaging video content catches attention. However, simply recording and splicing clips is not enough—you must understand narrative pacing.',
      'The first 3 seconds of a video is the "hook". In short-form media, viewers decide in a fraction of a second whether to stay or scroll. A good hook introduces a clear problem or visualization, coupled with dynamic zooming, sound cues, or titles to trigger curiosity. Editing requires cutting out all pauses and filler words to maintain a brisk pace.',
      'Beyond visual cuts, audio is 50% of the video experience. Poor sound ruins high-quality footage. Professional audio involves three layers: clear vocal tracks with equalization (EQ) and noise reduction, subtle background tracks that match the emotional tone, and sound effects (swooshes, pops, clicks) that emphasize visual transitions.',
      'Lastly, color grading gives your footage a cinematic feel. Raw video files from high-end cameras look flat to preserve highlights. Applying color spaces and standard adjustments establishes mood. Warm tones invite comfort and coaching, while cool blue tones suggest corporate security. Professional grading ensures visual assets represent your brand image.'
    ]
  }
]
