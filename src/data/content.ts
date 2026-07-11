// Some sections still use placeholder content — swap with real info as it comes in.

export const brand = "Forge Digital";

export const contact = {
  email: ["ramzinikiema18@gmail.com", "Briceilboudo388@gmail.com"], 
  team: [
    { name: "ILBOUDO Relwendé Brice", phone: "74976667" },
    { name: "NIKIEMA Ramzi", phone: "65605775" },
    { name: "ZINA Abdoul Alim", phone: "05156505" },
  ],
};

export const projects = [
  {
    category: "E-Commerce Showcase",
    name: "DJBC Wine and More",
    tags: ["Next.js", "Tailwind CSS"],
    problem:
      "A wine merchant in Ouagadougou offering French wines, pairing products and tasting experiences, with no online presence at all.",
    solution:
      "A showcase site and catalog covering wines and tastings, a blog, and direct contact paths (form, WhatsApp).",
    impact:
      "A premium, consistent brand presence built to turn visitors into cellar customers.",
    image: "/projects/djbc.png",
    url: "https://djbc-new.vercel.app/",
  },
  {
    category: "Industrial Showcase",
    name: "Kobalu",
    tags: ["Next.js", "Tailwind CSS"],
    problem:
      "An aluminum door and window manufacturer in Ouagadougou needed to showcase its expertise to homeowners and builders.",
    solution:
      "A product catalog, a portfolio of completed installations, and a clear, mobile-friendly quote-request flow.",
    impact:
      "A professional site that reflects Kobalu's \"Savoir pour faire\" expertise and makes it easy for prospects to reach out.",
    image: "/projects/kobalu.png",
    url: "https://kobalu.vercel.app/",
  },
  {
    category: "Tech Community",
    name: "Matrix — Software Engineering Club",
    tags: ["Next.js", "Tailwind CSS"],
    problem:
      "A developer club needed a strong landing page to attract members and showcase its projects.",
    solution:
      "A landing page with a bold visual identity, presenting members, club projects, and direct access to the community hub.",
    impact: "A distinctive brand identity that makes people want to join the community.",
    image: "/projects/matrix.png",
    url: "https://matrix-showcase.vercel.app/",
  },
];

export const aboutPoints = [
  {
    icon: "Zap",
    title: "Performance First",
    description:
      "Every millisecond equals lost revenue. We optimize Core Web Vitals to ensure your site is lightning fast.",
  },
  {
    icon: "Search",
    title: "Search Dominance",
    description:
      "Semantic HTML and technical SEO foundation that makes your business discoverable on any platform.",
  },
  {
    icon: "LayoutGrid",
    title: "Conversion UX",
    description:
      "Designing friction-less journeys that turn visitors into loyal customers through intuitive flows.",
  },
  {
    icon: "Layers",
    title: "Infinite Scalability",
    description:
      "Clean architecture built with modern frameworks that grow alongside your business complexity.",
  },
];

export const services = [
  {
    icon: "MonitorSmartphone",
    title: "Website Redesign",
    description:
      "Modernizing outdated interfaces to reflect your current brand prestige and improve engagement metrics.",
    points: ["Brand Modernization", "Conversion Uplift"],
  },
  {
    icon: "Cpu",
    title: "Performance Optimization",
    description:
      "Fixing slow technical debt that kills SEO rankings and user patience. Zero-latency experiences.",
    points: ["Core Web Vitals", "Edge Deployment"],
  },
  {
    icon: "Code2",
    title: "Custom Web Apps",
    description:
      "Developing complex internal tools or customer-facing platforms tailored to your operational logic.",
    points: ["Scalable Cloud Logic", "API Integrations"],
  },
];

export const auditScore = { current: 64, potential: 98 };

export const auditItems = [
  {
    status: "red",
    label: "Loading Speed",
    issue: "Large unoptimized assets and slow server response.",
    fix: "Implement Next.js Image optimization & Edge caching.",
    impact: "+45% Retention",
  },
  {
    status: "yellow",
    label: "Visual Identity",
    issue: "Inconsistent spacing and outdated color palette.",
    fix: "Modern typography pairing & luxury dark theme.",
    impact: "Higher Brand Trust",
  },
  {
    status: "red",
    label: "Navigation",
    issue: "Complex multi-level menus causing user friction.",
    fix: "Simplified linear flow & intuitive mobile gestures.",
    impact: "-20% Bounce Rate",
  },
  {
    status: "green",
    label: "SEO Structure",
    issue: "Basic meta tags present but missing semantic JSON-LD.",
    fix: "Structured data injection for Rich Search Results.",
    impact: "Top 3 Ranking",
  },
];

export const beforeAfter = {
  before: {
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    points: [
      "Cluttered, confusing layout",
      "Poor mobile experience",
      "Generic, low-trust branding",
    ],
  },
  after: {
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800",
    points: [
      "Clean, premium typography focus",
      "Pixel-perfect fluid responsive design",
      "High-conversion CTA placement",
    ],
  },
};

export const visionItems = [
  {
    title: "Homepage Concept",
    subtitle: "Immersive visual storytelling.",
    span: "large",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mobile UI",
    span: "square",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Modern Dashboard",
    span: "square",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Service Deep-Dive",
    span: "wide",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
];

export const processSteps = [
  { step: "01", title: "Discovery", description: "Deep diving into your business goals, target audience, and current pain points." },
  { step: "02", title: "Audit", description: "Technical analysis of performance, SEO, and existing UX friction points." },
  { step: "03", title: "Wireframing", description: "Establishing the skeleton and conversion architecture of the new site." },
  { step: "04", title: "UI Design", description: "Creating high-fidelity luxury interfaces that represent your brand prestige." },
  { step: "05", title: "Development", description: "Clean, optimized code built with a cutting-edge stack for speed & scale." },
  { step: "06", title: "Testing", description: "Rigorous quality assurance across all devices and network conditions." },
  { step: "07", title: "Launch", description: "Seamless migration and deployment to high-availability edge servers." },
  { step: "08", title: "Maintenance", description: "Ongoing optimization and support to ensure long-term business growth." },
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Laravel",
  "PostgreSQL",
  "TailwindCSS",
  "Docker",
  "Framer Motion",
];

export const comparisonRows = [
  { metric: "Performance", typical: "Standard loading times (2-4s)", ours: "Sub-second edge optimized" },
  { metric: "Design Quality", typical: "Template-based or generic", ours: "Bespoke agency-grade luxury" },
  { metric: "SEO Strategy", typical: "Basic keywords & meta", ours: "Deep technical semantic optimization" },
  { metric: "Scalability", typical: "Single-server legacy code", ours: "Cloud-native modular architecture" },
  { metric: "Business Focus", typical: "Visual output only", ours: "ROI-driven engineering metrics" },
];

export const testimonials = [
  {
    quote:
      "The redesign didn't just look better — our conversion rate jumped within the first month. Best investment we made this year.",
    name: "Sarah Whitmore",
    role: "CEO, NexGen Capital",
  },
  {
    quote:
      "Finally a team that understands business outcomes, not just code. The audit alone paid for itself.",
    name: "Marcus Lee",
    role: "Founder, Vanguard Athletics",
  },
  {
    quote:
      "Professional, fast, and the attention to detail was obvious from the first prototype. Highly recommend.",
    name: "Elena Petrova",
    role: "Marketing Director, Aurora Retail",
  },
];
