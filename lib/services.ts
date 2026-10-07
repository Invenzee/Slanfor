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
      "Websites, shops, apps, and the software a company actually runs on, plus hosting, email, and the integrations that keep those tools talking to each other.",
    detail:
      "A business is hard to take seriously if the site is slow, the shop cannot take an order, or the software behind the desk still lives in a spreadsheet. We build the public pages, the product, and the custom tools in between, then host them and join them to the systems you already pay for.",
    preview: [
      "Web Development",
      "E-Commerce Development",
      "App Development",
      "Custom Software Development",
      "Website Hosting",
    ],
    lede: "If a customer has to find you, buy from you, or log in, the work starts here. Slanfor designs and builds business websites, shops, apps, and the custom software sitting behind them. Hosting, domains, and business email are part of the same job, so the thing we ship has a place to live. When the site needs to talk to a payment tool, a CRM, or a booking system, we wire that in rather than leaving you with a pretty page that cannot do the work.",
    related: ["design", "marketing"],
    clusters: [
      {
        id: "build",
        title: "Build",
        summary:
          "The public face of the company: the site, the shop, the app, and the software staff use every day. This is the work visitors and customers actually touch.",
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
        summary:
          "A launch is not the end of the job. Hosting, domains, mailboxes, and ongoing support keep the site reachable, current, and recoverable when something breaks.",
        items: [
          "Website Maintenance & Support",
          "Website Hosting",
          "Domain & Business Email Setup",
        ],
      },
      {
        id: "connect",
        title: "Connect",
        summary:
          "Most companies already run payments, forms, or a CRM. We join those tools to the site so data does not have to be copied by hand.",
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
      "A mark, a set of rules, and the screens people actually use, so the company still looks like itself on a website, a reel, or a pitch deck.",
    detail:
      "A logo on its own is not a brand. We design the mark, the colours and type that sit around it, and the interfaces of the website or app. Campaign pieces, ads, and decks follow the same system, which is how a company stops looking different in every channel.",
    preview: [
      "Logo Design",
      "Brand Identity Design",
      "UI/UX Design",
      "Website Design",
      "Pitch Deck & Presentation Design",
    ],
    lede: "People decide whether they trust a company long before they read a paragraph. Slanfor designs logos, identity systems, and the screens of websites and apps so the look holds together. Guidelines travel with the work, so a founder, a designer, or a social intern can use the brand without guessing. When a campaign needs posts, banners, or a deck for the room, those pieces come out of the same system rather than a one-off template.",
    related: ["development", "content"],
    clusters: [
      {
        id: "identity",
        title: "Identity",
        summary:
          "The mark people remember, and the rules that stop it drifting. This is the work that makes every later page, post, and film recognisable.",
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
        summary:
          "How the website or app actually feels to use. Layout, flow, and interface design happen before a line of production code is locked.",
        items: ["UI/UX Design", "Website Design", "App UI Design"],
      },
      {
        id: "campaign",
        title: "Campaign",
        summary:
          "The pieces that leave the studio and go into feeds, ad slots, and sales meetings. They should look as considered as the website they point back to.",
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
      "Edits, motion, captions, colour, and a cut for every channel, so a film can actually be posted where it needs to run.",
    detail:
      "Footage sitting on a drive is not a film. We cut long pieces and short ones, add motion where live action is not enough, and finish the job with captions, sound, colour, and thumbnails. Each platform gets the size and pace it expects, instead of one master file squeezed into every slot.",
    preview: [
      "Video Editing",
      "Reels, TikTok & YouTube Shorts Editing",
      "Motion Graphics",
      "Explainer Videos",
      "Color Correction & Color Grading",
    ],
    lede: "A film has a job: hold attention, explain an offer, or make a brand feel finished. Slanfor edits long-form and short-form video, builds motion and animation when cameras are the wrong tool, and finishes the work so it can be published. Captions, audio cleanup, colour, thumbnails, and resized cuts are part of the same delivery. You do not get a timeline export and a list of things still to do.",
    related: ["content", "marketing"],
    clusters: [
      {
        id: "edit",
        title: "Edit",
        summary:
          "A cut built for the length and the place it will be watched, from a YouTube film to a nine-second reel. Pacing is the difference between a watch and a skip.",
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
        summary:
          "Films commissioned around a product, a launch, or an explanation. These are made to a brief, not rescued from leftover footage.",
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
        summary:
          "Graphics and animation for moments when live footage cannot carry the idea. Logos, type, and posts that move still have to look like the brand at rest.",
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
        summary:
          "The last mile that makes a film usable: captions, cleaner sound, colour, a thumbnail that reads small, and a recut for every other channel.",
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
      "A plan, then search, ads, social, and email measured against enquiries, not against how busy the calendar looked.",
    detail:
      "Spend without a plan is just noise with an invoice. We set the strategy, then run search, paid media, social, and email as one system. Reporting is written around what changed for the business: visits that became enquiries, not a screenshot of impressions.",
    preview: [
      "Search Engine Optimization (SEO)",
      "Google Ads",
      "Meta Ads",
      "Social Media Management",
      "Email Marketing",
    ],
    lede: "Being online is not the same as being found by the right people. Slanfor plans the marketing, then runs the channels that carry it: organic search, Google and Meta and LinkedIn ads, social, and email. Content and conversion work sit in the same brief, so the page a campaign sends people to is worth landing on. You get a report that explains the result, not a folder of screenshots.",
    related: ["content", "sales"],
    clusters: [
      {
        id: "strategy",
        title: "Strategy",
        summary:
          "Where the money goes, what the message is, and how you will know if it worked. This is the work that stops a campaign becoming a posting habit.",
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
        summary:
          "A presence that is planned, posted, and answered. The feed should sound like the company, not like a content calendar filling itself.",
        items: ["Social Media Marketing", "Social Media Management"],
      },
      {
        id: "search-ads",
        title: "Search and ads",
        summary:
          "People already looking, and people worth showing the offer to. Organic search and paid placements on Google, Meta, and LinkedIn are run against a budget and a target.",
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
        summary:
          "The messages after someone has already raised a hand. Email and automation keep the conversation going without a manual chase every time.",
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
      "Researched names, first contact by phone, email, or LinkedIn, and a pipeline that is worked in a CRM instead of left in a spreadsheet.",
    detail:
      "Traffic is not a conversation, and a bought list is not a pipeline. We research the accounts worth calling, send the first message, book the meeting, and keep the follow-up where the next step is visible. Outbound sits beside marketing, so the people who never clicked an ad still hear from you.",
    preview: [
      "B2B Lead Generation",
      "Cold Email Outreach",
      "LinkedIn Outreach",
      "Appointment Setting",
      "CRM Management",
    ],
    lede: "Plenty of businesses get visitors and still have an empty calendar. Slanfor does the outbound work: research the right accounts, write the first message, pick up the phone, and book the meeting. Qualification and follow-up live in the CRM, so a reply does not disappear into someone’s inbox. This is for companies that need conversations with other businesses, not another traffic report.",
    related: ["marketing", "content"],
    clusters: [
      {
        id: "outreach",
        title: "Outreach",
        summary:
          "First contact with people who have not asked to hear from you. Phone, email, and LinkedIn are used with a researched name, not a blasted list.",
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
        summary:
          "The quieter work that decides whether outreach turns into revenue: research, qualification, a clean database, and a CRM that shows the next step.",
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
      "Copy, scripts, and longer pieces written for the page, the campaign, or the sales conversation they will actually be used in.",
    detail:
      "Design cannot rescue empty pages, and ads cannot rescue a muddy offer. We write the website, the posts, the emails, the ads, and the scripts the films are cut to. Longer assets such as case studies, e-books, and leave-behinds are written so a salesperson can hand them over without rewriting them in the corridor.",
    preview: [
      "Copywriting",
      "Website Content",
      "Blog & SEO Content",
      "E-Book Writing & Design",
      "Case Studies",
    ],
    lede: "If the words are vague, the brand looks expensive and still says nothing. Slanfor writes the copy for websites, ads, emails, social, and film, in the voice of the company rather than in agency-speak. Longer pieces such as case studies, e-books, and sales sheets are written and laid out as assets a team can use. When a film or a campaign already exists, we recut the words into the next format instead of starting from a blank page every time.",
    related: ["design", "video"],
    clusters: [
      {
        id: "words",
        title: "Words",
        summary:
          "The lines that sit on pages, in feeds, in inboxes, and in films. Each piece is written for the place it will be read, not copied across from a homepage.",
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
        summary:
          "Longer pieces a sales or marketing team can put in someone’s hand. They should survive a meeting, not only a scroll.",
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
    word: "Development",
    text: "A company cannot market what it cannot show, and it cannot sell from a site that does not work on a phone.",
    body: "The first job is something a stranger can find, understand, and use. That might be a five-page business website, a shop that takes payment, an app, or software written around the way the team already works. Hosting, domains, and business email sit with the build, because a site with nowhere to live is not finished. We also join the new work to the tools you already rely on, so orders, forms, and contacts do not have to be copied by hand. Until this layer is solid, brand and campaigns are decoration on something that still leaks.",
    image: "/about-studio.jpg",
    imageAlt: "A dim studio desk with monitors glowing blue",
    href: "/services/development",
    label: "Development",
  },
  {
    index: "02",
    word: "Design and branding",
    text: "A name needs a mark, the mark needs rules, and the screens people touch have to obey those rules.",
    body: "Most businesses collect logos the way they collect unused domains: a file here, a slightly different colour there, a deck that looks like another company. Brand work at Slanfor starts with a mark that holds up small, then the type, colour, and spacing that sit around it. Guidelines travel with the identity so a founder, a freelancer, or an intern can use it without inventing a new version. Website and app interfaces are designed inside that system, not beside it. Campaign pieces, ads, and pitch decks come last, which is how the company still looks like itself in a feed and in a meeting room.",
    image: "/vision-brand.jpg",
    imageAlt: "A design desk with colour swatches and a sketchbook",
    href: "/services/design",
    label: "Design",
  },
  {
    index: "03",
    word: "Marketing",
    text: "Once the site and the brand exist, they still have to be found by people who have a reason to care.",
    body: "A finished website that nobody sees is a quiet expense. Marketing at Slanfor starts with a plan for where to show up and how the result will be judged, then the channels that carry that plan: search, paid ads, social, and email. Video and written content sit in the same brief, so the film, the landing page, and the ad are arguing for the same offer. We report on enquiries and the behaviour that leads to them, not on how many times a post was liked. The point is not to look busy. The point is to make the next conversation cheaper and more likely.",
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
    word: "Sales and lead generation",
    text: "Visitors are not meetings. Someone still has to research the names, send the first message, and work the follow-up.",
    body: "Plenty of companies invest in a site and a campaign, then wait for the inbox to fill itself. Sales work at Slanfor is outbound: find the accounts that fit, write to the person who can reply, pick up the phone, and put a meeting on the calendar. Qualification stops polite interest from being treated as a deal. The pipeline lives in a CRM with a next step attached, not in a spreadsheet that goes stale after a week. This is the layer that turns “we are getting traffic” into “we are speaking to the right people”.",
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
    "A professional four-to-five-page business website",
    "A layout that holds together on a phone",
    "Home, About, Services, and Contact pages",
    "A quote and contact form on the site",
    "Click-to-call buttons for mobile visitors",
    "Links through to your social profiles",
    "Basic maintenance through the year",
    "An email when someone submits the form",
    "One or two rounds of revisions on the first build",
  ],
  exclusion:
    "The complimentary build covers a standard brochure site. Shops, booking systems, client portals, custom software, and anything that has to talk to another platform in a non-standard way are scoped and quoted on their own. If you are not sure which side of the line your brief sits on, send it anyway and we will say so plainly.",
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

export function serviceSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[()]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function serviceImage(name: string) {
  return {
    src: `/services/${serviceSlug(name)}.jpg`,
    alt: `Photograph for ${name}`,
  };
}

export function relatedPillars(slugs: string[]) {
  return slugs
    .map((slug) => getPillar(slug))
    .filter((pillar): pillar is Pillar => Boolean(pillar));
}
