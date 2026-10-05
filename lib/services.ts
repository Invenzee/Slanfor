export type Cluster = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export type Pillar = {
  slug: string;
  index: string;
  title: string;
  short: string;
  summary: string;
  detail: string;
  preview: string[];
  lede: string;
  clusters: Cluster[];
  related: string[];
};

export type FocusChapter = {
  index: string;
  word: string;
  text: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
  label: string;
  also?: { href: string; label: string }[];
};

export const pillars: Pillar[] = [
  {
    slug: "development",
    index: "01",
    title: "Development and technology",
    short: "Development",
    summary:
      "Websites, shops, apps, and custom software, plus the hosting and upkeep that keep them online.",
    detail:
      "Websites, shops, apps, and the software a business runs on. Hosting, domains, and email sit with the build. Custom work, from a shop to an integration, is scoped with you.",
    preview: [
      "Web Development",
      "E-Commerce Development",
      "App Development",
      "Custom Software Development",
      "Website Hosting",
    ],
    lede: "From a first business site to the software behind a product. If it has to work in a browser, on a phone, or between two systems, it sits here.",
    related: ["design", "marketing"],
    clusters: [
      {
        id: "build",
        title: "Build",
        summary: "The things people visit, buy from, or open every day.",
        items: [
          "Web Development",
          "Landing Page Development",
          "E-Commerce Development",
          "App Development",
          "Custom Software Development",
        ],
      },
      {
        id: "run",
        title: "Run",
        summary: "Keep the site online, current, and easy to reach.",
        items: [
          "Website Maintenance & Support",
          "Website Hosting",
          "Domain & Business Email Setup",
        ],
      },
      {
        id: "connect",
        title: "Connect",
        summary: "Join the site to the tools the business already relies on.",
        items: ["API & Third-Party Integrations"],
      },
    ],
  },
  {
    slug: "design",
    index: "02",
    title: "Design and branding",
    short: "Design",
    summary:
      "Logos, identity systems, and interfaces that look considered and stay consistent in use.",
    detail:
      "A mark, a set of rules, and the screens people use. Logos, guidelines, websites, and apps stay in one system, so the brand still looks like itself on a page, a post, or a deck.",
    preview: [
      "Logo Design",
      "Brand Identity Design",
      "UI/UX Design",
      "Website Design",
      "Pitch Deck & Presentation Design",
    ],
    lede: "A mark, a set of rules, and the screens people actually touch. The aim is a brand that still looks like itself on a website, an app, and a pitch deck.",
    related: ["development", "content"],
    clusters: [
      {
        id: "identity",
        title: "Identity",
        summary: "The mark, the system, and the rules that hold them together.",
        items: [
          "Logo Design",
          "Brand Identity Design",
          "Brand Guidelines",
          "Personal Branding",
        ],
      },
      {
        id: "product",
        title: "Product",
        summary: "Screens and flows for websites and apps.",
        items: ["UI/UX Design", "Website Design", "App UI Design"],
      },
      {
        id: "campaign",
        title: "Campaign",
        summary: "Pieces that go out on social, in ads, and into sales rooms.",
        items: [
          "Social Media Post Design",
          "Marketing Creatives",
          "Banner & Ad Design",
          "Infographic Design",
          "Pitch Deck & Presentation Design",
        ],
      },
    ],
  },
  {
    slug: "video",
    index: "03",
    title: "Video, motion and creative media",
    short: "Video",
    summary:
      "Editing, motion, and the finishing work that makes a film usable on every channel it needs to run.",
    detail:
      "Long films, short clips, and graphics that move. Editing, motion, captions, colour, and a cut for each channel, so the film can actually be posted where it needs to run.",
    preview: [
      "Video Editing",
      "Reels, TikTok & YouTube Shorts Editing",
      "Motion Graphics",
      "Explainer Videos",
      "Color Correction & Color Grading",
    ],
    lede: "Long films, short clips, and graphics that move. The edit is only part of it. Captions, colour, thumbnails, and the right size for each platform come with the job.",
    related: ["content", "marketing"],
    clusters: [
      {
        id: "edit",
        title: "Edit",
        summary: "Cut for the format, from a YouTube film to a short reel.",
        items: [
          "Video Editing",
          "Short-Form Video Editing",
          "Reels, TikTok & YouTube Shorts Editing",
          "YouTube Video Editing",
          "Corporate Video Editing",
          "Podcast Video Editing",
        ],
      },
      {
        id: "make",
        title: "Make",
        summary: "Films that explain a product, a company, or an offer.",
        items: [
          "Promotional Videos",
          "Product Videos",
          "Social Media Video Ads",
          "Explainer Videos",
        ],
      },
      {
        id: "motion",
        title: "Motion",
        summary: "Graphics and animation when live footage is not the point.",
        items: [
          "Motion Graphics",
          "2D Animation",
          "Logo Animation",
          "Intro & Outro Animation",
          "Animated Social Media Posts",
          "Kinetic Typography",
        ],
      },
      {
        id: "finish",
        title: "Finish",
        summary: "Captions, sound, colour, thumbnails, and a cut for each channel.",
        items: [
          "Video Captions & Subtitles",
          "Audio Cleanup and Enhancement",
          "Thumbnail Design",
          "Video Resizing and Repurposing",
          "Color Correction & Color Grading",
        ],
      },
    ],
  },
  {
    slug: "marketing",
    index: "04",
    title: "Digital marketing",
    short: "Marketing",
    summary:
      "Strategy, search, paid media, email, and reporting, so spend stays tied to what actually happens.",
    detail:
      "A plan, then the channels that carry it. Search, ads, social, and email sit together. The report says what changed, not only what was posted.",
    preview: [
      "Search Engine Optimization (SEO)",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Email Marketing",
    ],
    lede: "A plan, then the channels that carry it. Search, paid social, email, and a report that says what changed, not just what was posted.",
    related: ["content", "sales"],
    clusters: [
      {
        id: "strategy",
        title: "Strategy",
        summary: "Where to spend, what to say, and how to judge the result.",
        items: [
          "Digital Marketing Strategy",
          "Content Marketing",
          "Conversion Rate Optimization",
          "Analytics and Performance Reporting",
        ],
      },
      {
        id: "social",
        title: "Social",
        summary: "A presence that is posted, watched, and answered.",
        items: ["Social Media Marketing", "Social Media Management"],
      },
      {
        id: "search-ads",
        title: "Search and ads",
        summary: "Organic search, and paid placements on Google, Meta, and LinkedIn.",
        items: [
          "Search Engine Optimization (SEO)",
          "Pay-Per-Click Advertising (PPC)",
          "Google Ads",
          "Meta Ads",
          "LinkedIn Ads",
          "Retargeting Campaigns",
        ],
      },
      {
        id: "lifecycle",
        title: "Lifecycle",
        summary: "Email and automation after someone raises a hand.",
        items: ["Email Marketing", "Marketing Automation"],
      },
    ],
  },
  {
    slug: "sales",
    index: "05",
    title: "Sales and lead generation",
    short: "Sales",
    summary:
      "Research, outreach, and pipeline work that turns a list of names into conversations.",
    detail:
      "Outbound for businesses that need meetings, not only traffic. Names are researched, the first message goes out, and the follow-up stays in a CRM.",
    preview: [
      "B2B Lead Generation",
      "Cold Email Outreach",
      "LinkedIn Outreach",
      "Appointment Setting",
      "CRM Management",
    ],
    lede: "Outbound for businesses that need meetings, not just traffic. The list is researched, the first message is sent, and the follow-up is kept in a CRM.",
    related: ["marketing", "content"],
    clusters: [
      {
        id: "outreach",
        title: "Outreach",
        summary: "First contact, by phone, email, or LinkedIn.",
        items: [
          "B2B Lead Generation",
          "Appointment Setting",
          "Cold Calling",
          "Cold Email Outreach",
          "LinkedIn Outreach",
        ],
      },
      {
        id: "pipeline",
        title: "Pipeline",
        summary: "The research, the CRM, and the follow-up that keep deals moving.",
        items: [
          "Sales Development",
          "Prospect Research",
          "Lead Qualification",
          "Database Building",
          "CRM Management",
          "Sales Follow-Ups",
          "Pipeline Management",
        ],
      },
    ],
  },
  {
    slug: "content",
    index: "06",
    title: "Content and creative",
    short: "Content",
    summary:
      "Copy, scripts, and longer assets written for the page, the campaign, or the sales call.",
    detail:
      "Words for the page, the ad, the email, and the film. Longer pieces too, when a team needs an e-book, a case study, or a script that matches the edit.",
    preview: [
      "Copywriting",
      "Website Content",
      "Blog & SEO Content",
      "E-Book Writing & Design",
      "Case Studies",
    ],
    lede: "Words for the website, the ad, the email, and the film. Longer pieces too, when a sales team needs an e-book or a case study to hand over.",
    related: ["design", "video"],
    clusters: [
      {
        id: "words",
        title: "Words",
        summary: "Copy for pages, posts, ads, emails, and scripts.",
        items: [
          "Copywriting",
          "Website Content",
          "Social Media Content",
          "Blog & SEO Content",
          "Email Copywriting",
          "Ad Copy",
          "Scriptwriting",
          "Video Scripts",
        ],
      },
      {
        id: "assets",
        title: "Assets",
        summary: "Longer pieces a sales or marketing team can actually use.",
        items: [
          "E-Book Writing & Design",
          "Case Studies",
          "Sales & Marketing Materials",
          "Content Repurposing",
        ],
      },
    ],
  },
];

export const focusChapters: FocusChapter[] = [
  {
    index: "01",
    word: "Build",
    text: "Websites, apps, software, hosting, and the connections between them.",
    body: "The first job is something people can find and use. That might be a business website, a shop, an app, or software written for the way the company works. Hosting, domains, and email sit with the build so it has a place to live.",
    image: "/about-studio.jpg",
    imageAlt: "A dim studio desk with monitors glowing blue",
    href: "/services/development",
    label: "Development",
  },
  {
    index: "02",
    word: "Brand",
    text: "Logos, identity systems, and interfaces a business can keep using.",
    body: "A name needs a mark, and the mark needs rules. Brand covers logos, guidelines, and the screens of a website or app. Campaign pieces, decks, and ads stay in the same system so the business still looks like itself.",
    image: "/vision-brand.jpg",
    imageAlt: "A design desk with colour swatches and a sketchbook",
    href: "/services/design",
    label: "Design",
  },
  {
    index: "03",
    word: "Market",
    text: "Campaigns, film, search, ads, and the writing that carries them.",
    body: "Once the site and the brand exist, they need to be seen. Marketing covers search, paid ads, social, and email. Video and content sit beside that work, so the film and the words match the offer.",
    image: "/vision-market.jpg",
    imageAlt: "An editing desk with a monitor and headphones",
    href: "/services/marketing",
    label: "Marketing",
    also: [
      { href: "/services/video", label: "Video" },
      { href: "/services/content", label: "Content" },
    ],
  },
  {
    index: "04",
    word: "Sell",
    text: "Research, outreach, and a pipeline that is actually worked.",
    body: "Traffic is not the same as a conversation. Sales covers research, first contact by phone, email, or LinkedIn, and the follow-up that keeps a deal moving. The list is worked in a CRM, not left in a spreadsheet.",
    image: "/vision-sell.jpg",
    imageAlt: "A quiet desk with a phone, a notebook, and a laptop",
    href: "/services/sales",
    label: "Sales",
  },
];

export const ribbonTexts = [
  "Web development",
  "Brand identity",
  "Motion graphics",
  "Search engine optimization",
  "B2B lead generation",
  "Copywriting",
  "E-commerce",
  "UI/UX design",
  "YouTube editing",
  "Google Ads",
  "Cold email",
  "Case studies",
];

export const freeWebsite = {
  includes: [
    "Professional 4–5 page website",
    "Mobile-responsive design",
    "Home, About, Services, and Contact pages",
    "Quote and contact form",
    "Click-to-call buttons",
    "Social media links",
    "Basic website maintenance",
    "Contact-form lead notifications",
    "1–2 rounds of revisions",
  ],
  exclusion:
    "Anything beyond a standard business website, such as e-commerce, booking systems, customer portals, custom software, or advanced integrations, is quoted separately.",
};

export const contactDetails = {
  email: "Email address to be added",
  phone: "Phone number to be added",
  socials: ["LinkedIn", "Instagram", "YouTube"],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/free-website", label: "Free website" },
  { href: "/contact", label: "Contact" },
];

export function getPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}

export function relatedPillars(slugs: string[]) {
  return slugs
    .map((slug) => getPillar(slug))
    .filter((pillar): pillar is Pillar => Boolean(pillar));
}
