// Site-wide copy that isn't a case study. Edit here; every page reads from this file.

export const site = {
  name: 'Dean Malmgren',
  title: 'Dean Malmgren · Product and technology leader',
  description:
    'Product and technology leader with a data scientist’s toolkit. Founder, CTO, and fractional CTO/CPO for companies going from zero to one and from one to n.',
  linkedin: 'https://www.linkedin.com/in/deanmalmgren/',
  github: 'https://github.com/deanmalmgren',
  scholar: 'https://scholar.google.com/citations?user=phmI3LIAAAAJ&hl=en&oi=ao',
  // Contact form endpoint. See README for setup. Empty hides the form and leaves LinkedIn as the way to reach out.
  formEndpoint: 'https://formspree.io/f/xaeolnvk',
};

export const hero = {
  headline: 'I help companies figure out what to build, build it, and grow the team that keeps building it.',
  lede:
    'I’m a product and technology leader trained as a data scientist. For 17 years I’ve taken products from zero to one as a founder and from one to n as an executive, at Datascope, IDEO, and Planet FWD. I work with founders and leadership teams as a fractional CTO, CPO, or product-and-technology lead.',
};

// The proof bar under the hero. Every figure here must trace to a case study.
export const proof = [
  { value: 'Acquired', label: 'Co-founded and bootstrapped Datascope; IDEO acquired it in 2017', href: '/work/datascope/' },
  { value: '~35%/yr', label: 'Revenue growth at Planet FWD, through to cash-flow breakeven', href: '/work/planet-fwd-rebuild/' },
  { value: '2×', label: 'Data scientists and AI × Design revenue across IDEO', href: '/work/ideo-data-science-practice/' },
  { value: '20–40', label: 'Tickets a week from a small team running an agentic dev flow I built', href: '/work/agentic-development-flow/' },
];

// The blend. These keys match `capabilities` in case study frontmatter.
export const capabilities = {
  product: {
    label: 'Product',
    blurb: 'Deciding what to build, and what not to. Vision, roadmaps tied to revenue, customer councils, and the evidence to kill a cool idea.',
  },
  technology: {
    label: 'Technology',
    blurb: 'Hands on the keyboard. I still write and maintain production systems, and I can rebuild a platform without stopping the business.',
  },
  'data-ai': {
    label: 'Data & AI',
    blurb: 'PhD-trained data scientist and early practitioner of human-centered AI. I build LLM products and test them against ground truth before I trust them.',
  },
  team: {
    label: 'Teams',
    blurb: 'Building teams people want to rejoin. Waterfall to agile, 4 to 12, a founding team through an acquisition, and data science spread across a global firm.',
  },
} as const;

export const phases = {
  'zero-to-one': {
    label: 'Zero to one',
    blurb: 'Finding something worth building, proving it, and getting it into customers’ hands.',
  },
  'one-to-n': {
    label: 'One to n',
    blurb: 'Turning something that works into something that scales: the platform, the team, and the operating cadence.',
  },
} as const;

// How a client can work with me. Order matters: the first one is the main offer.
export const engagements = [
  {
    title: 'Fractional CTO / CPO',
    body: 'I lead product and engineering part-time through a transition: a rebuild, a first platform, a new team, or the gap before a full-time hire. I take on the roadmap, the operating cadence, and the hiring plan.',
  },
  {
    title: 'Zero-to-one sprints',
    body: 'We take an idea to a working prototype and the evidence to build it or kill it. I build the prototype myself, and we put it in front of real users before anyone spends a roadmap on it.',
  },
  {
    title: 'AI-first engineering',
    body: 'I set up agentic development for small teams: sandboxed agents that plan, implement, test, and review their own work, with people approving the result. It’s how a small team ships 20–40 tickets a week.',
  },
  {
    title: 'Advisor',
    body: 'Ongoing counsel for founders and leadership teams on product strategy, data and AI, and building technical teams. I’ve advised Metis, Northwestern’s NUvention Analytics, and dozens of data and climate start-ups.',
  },
];

export const clients = [
  'Thomson Reuters', 'P&G', 'Google', 'IKEA', 'Northwell Health', 'Athletico',
  'Heidelberg Cement', 'Compass Group', 'Thrive Market', 'Butcher Box',
];

export const featuredIn = ['Harvard Business Review', 'Forbes', 'Fast Company', 'Wired', 'Time', 'Core77'];
