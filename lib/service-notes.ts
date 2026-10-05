const notes: Record<string, string> = {
  "Web Development":
    "A business website with the pages, structure, and mobile layout a company needs to be taken seriously.",
  "Landing Page Development":
    "A single page built around one offer, so the visit has a clear next step.",
  "E-Commerce Development":
    "A shop for products, payments, and orders. Quoted separately from a standard brochure site.",
  "App Development":
    "An app for the job the business needs done, on the phones people already carry.",
  "Custom Software Development":
    "Software written around how the company works, when an off-the-shelf tool will not fit.",
  "Website Maintenance & Support":
    "Updates, fixes, and a person to call when the site needs attention.",
  "Website Hosting":
    "A place for the site to live, kept online and looked after through the year.",
  "Domain & Business Email Setup":
    "The domain and mailboxes, set up so the business can be found and written to.",
  "API & Third-Party Integrations":
    "The site joined to the tools already in use, from forms and payments to a CRM.",
  "Logo Design":
    "A mark that holds up small, on a sign, and at the top of a website.",
  "Brand Identity Design":
    "The colours, type, and rules that sit around the logo.",
  "Brand Guidelines":
    "A short guide so the brand stays consistent when other people use it.",
  "Personal Branding":
    "A clear look and voice for a founder, consultant, or specialist.",
  "UI/UX Design":
    "Screens and flows that are easy to follow, before anything is built.",
  "Website Design":
    "The look of the pages, arranged so the offer is obvious.",
  "App UI Design":
    "The interface of an app, designed for the way it will actually be used.",
  "Social Media Post Design":
    "Posts that look like the brand, sized for the feed they will run in.",
  "Marketing Creatives":
    "The visual pieces a campaign needs, from a post to a sales sheet.",
  "Banner & Ad Design":
    "Banners and ads made to the sizes the placements require.",
  "Infographic Design":
    "A diagram or visual that makes a complicated point easy to scan.",
  "Pitch Deck & Presentation Design":
    "A deck that looks considered and stays readable in a room.",
  "Video Editing":
    "A cut of the footage, paced for the length and the place it will be watched.",
  "Short-Form Video Editing":
    "A short cut built for the pace of a feed, not a long film squeezed down.",
  "Reels, TikTok & YouTube Shorts Editing":
    "Edits made for Reels, TikTok, and Shorts, including the framing those apps expect.",
  "YouTube Video Editing":
    "A longer edit for YouTube, with a structure people can stay with.",
  "Corporate Video Editing":
    "A company film cut for clarity, for a site, an event, or an internal audience.",
  "Podcast Video Editing":
    "A recorded conversation turned into a watchable episode.",
  "Promotional Videos":
    "A film that presents an offer, a company, or a launch.",
  "Product Videos":
    "A clear look at a product, what it is, and why it matters.",
  "Social Media Video Ads":
    "Short ads cut for paid placement on social.",
  "Explainer Videos":
    "A film that walks someone through an idea, a product, or a process.",
  "Motion Graphics":
    "Graphics that move, when live footage is not the right tool.",
  "2D Animation":
    "Drawn animation for explainers, ads, and stories that need illustration.",
  "Logo Animation":
    "The logo brought into motion for an intro, an outro, or a sting.",
  "Intro & Outro Animation":
    "An opening and a close so a series of films feels like one channel.",
  "Animated Social Media Posts":
    "A post that moves, made for the feed rather than a full film.",
  "Kinetic Typography":
    "Words set in motion, when the message itself is the visual.",
  "Video Captions & Subtitles":
    "Captions and subtitles so the film can be watched without sound.",
  "Audio Cleanup and Enhancement":
    "Dialogue and sound cleaned up so the film is easier to listen to.",
  "Thumbnail Design":
    "A thumbnail that reads at a small size and matches the film.",
  "Video Resizing and Repurposing":
    "The same film resized and recut for the other places it needs to run.",
  "Color Correction & Color Grading":
    "Colour brought into line, then graded so the film has a consistent look.",
  "Digital Marketing Strategy":
    "Where to show up, what to say, and how the result will be judged.",
  "Content Marketing":
    "A plan for the articles, posts, and films that keep the offer visible.",
  "Conversion Rate Optimization":
    "Changes to a page or a flow so more of the visits turn into enquiries.",
  "Analytics and Performance Reporting":
    "A report of what happened, tied to enquiries rather than vanity numbers.",
  "Social Media Marketing":
    "Campaigns on social, planned around the offer rather than a posting quota.",
  "Social Media Management":
    "The feed posted, watched, and answered on a regular rhythm.",
  "Search Engine Optimization (SEO)":
    "The site and its pages shaped so the right searches can find them.",
  "Pay-Per-Click Advertising (PPC)":
    "Paid search and paid social, run against a budget and a target.",
  "Google Ads":
    "Campaigns on Google, for the searches that already show intent.",
  "Meta Ads":
    "Ads on Facebook and Instagram, aimed at the people who should see the offer.",
  "LinkedIn Ads":
    "Paid placement on LinkedIn, for offers that sell to businesses.",
  "Retargeting Campaigns":
    "Ads shown again to people who already visited and did not enquire.",
  "Email Marketing":
    "Email sent to people who asked to hear from the business.",
  "Marketing Automation":
    "Follow-up sequences that send the next message without a manual chase.",
  "B2B Lead Generation":
    "Named prospects in the right companies, not a bought list of addresses.",
  "Appointment Setting":
    "Meetings booked with people who fit, and put on a calendar.",
  "Cold Calling":
    "A first phone call to a prospect who has not asked to be contacted.",
  "Cold Email Outreach":
    "A first email written for a specific person, not a blast.",
  "LinkedIn Outreach":
    "A first message on LinkedIn, to the person who can actually reply.",
  "Sales Development":
    "The early sales work that turns a name into a live conversation.",
  "Prospect Research":
    "The reading done before anyone is contacted, so the list is worth calling.",
  "Lead Qualification":
    "A check that the reply is a real opportunity, not just a polite answer.",
  "Database Building":
    "A usable list of accounts and contacts, built and kept tidy.",
  "CRM Management":
    "The pipeline kept in the CRM, with the next step written down.",
  "Sales Follow-Ups":
    "The second and third message, sent because the first one rarely closes it.",
  "Pipeline Management":
    "A view of what is moving, what is stuck, and what should be dropped.",
  Copywriting:
    "The words for a page, a post, an ad, or an email, written for that place.",
  "Website Content":
    "The copy on the site, written so a visitor understands the offer.",
  "Social Media Content":
    "Posts written for the feed, in the voice of the brand.",
  "Blog & SEO Content":
    "Articles written to be useful and to be found in search.",
  "Email Copywriting":
    "The subject line and the body of an email someone will actually finish.",
  "Ad Copy":
    "Short lines for an ad, written to the space the placement allows.",
  Scriptwriting:
    "A script for a film, a presenter, or a recorded piece.",
  "Video Scripts":
    "The words a video is edited to, written before the cut is locked.",
  "E-Book Writing & Design":
    "A longer piece written and laid out, for a sales or marketing team to hand over.",
  "Case Studies":
    "A written account of a job, the problem, and what changed.",
  "Sales & Marketing Materials":
    "Leave-behinds, one-pagers, and sheets a team can use in a conversation.",
  "Content Repurposing":
    "An existing article, film, or deck turned into the next format it needs.",
};

export function serviceNote(name: string) {
  return notes[name] ?? `${name} is quoted and delivered as part of this practice.`;
}
