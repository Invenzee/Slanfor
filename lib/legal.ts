export type LegalSection = {
  title: string;
  paragraphs: string[];
};

export const privacyPolicy = {
  title: "Privacy policy",
  eyebrow: "Legal",
  lede: "This page explains what Slanfor collects when you use the website or send an enquiry, why we hold it, and how you can ask us about it.",
  updated: "12 October 2026",
  sections: [
    {
      title: "Who we are",
      paragraphs: [
        "Slanfor is a digital studio. We design and build websites and software, shape brands, produce video and copy, run campaigns, and work outbound sales lists. If you write to us, the controller of that information is Slanfor. You can reach us at info@slanfor.com or +44 33148312.",
      ],
    },
    {
      title: "What we collect",
      paragraphs: [
        "When you use the enquiry form we ask for your name, email address, phone number, the kind of work you need, and a short message. We keep that so we can reply. We do not ask for payment details through this site.",
        "The site also records ordinary technical data that a browser sends: pages visited, approximate location from IP address, device type, and how you arrived. That helps us keep the site working and see which pages are useful.",
      ],
    },
    {
      title: "How we use it",
      paragraphs: [
        "We use enquiry details to answer you, to prepare a quote, and to keep a record of the brief you sent. We use technical data to run, protect, and improve the website. We do not sell your details, and we do not buy lists to write to people who have never contacted us from this site.",
        "If we later send you a project update or a follow-up about work you asked for, that is because you opened the conversation. You can tell us to stop at any time.",
      ],
    },
    {
      title: "Who sees it",
      paragraphs: [
        "Your enquiry is seen by the people at Slanfor who need it to reply. Hosting, form, and email tools may process the same data on our behalf. They are not free to use it for their own marketing. We will only share information if the law requires it, or if you ask us to introduce you to another supplier.",
      ],
    },
    {
      title: "Cookies",
      paragraphs: [
        "We use cookies that are needed for the site to load and remember basic preferences, such as whether you have already closed the homepage enquiry window. If we add analytics later, we will say so here. You can block cookies in your browser; some parts of the site may then work less well.",
      ],
    },
    {
      title: "How long we keep it",
      paragraphs: [
        "Enquiries that do not become a project are kept for up to two years so we can pick up a thread if you write again. Records that sit inside a live or finished job are kept for as long as we need them to deliver the work, raise invoices, and meet tax and accounting rules, then deleted or archived.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You can ask what we hold about you, ask us to correct it, ask us to delete it, or ask us to stop using it for a follow-up. Write to info@slanfor.com or call +44 33148312 and say what you want done. If you are in the UK and you are not satisfied with our reply, you can contact the Information Commissioner’s Office.",
      ],
    },
    {
      title: "Changes",
      paragraphs: [
        "If this policy changes in a way that affects how we use your information, we will update this page and the date at the top. The version published here is the one that applies.",
      ],
    },
  ] satisfies LegalSection[],
};

export const termsAndConditions = {
  title: "Terms and conditions",
  eyebrow: "Legal",
  lede: "These terms cover how Slanfor takes on work, how we quote, who owns what, and what happens if something goes wrong. A signed proposal or statement of work sits on top of this page and wins if the two differ.",
  updated: "12 October 2026",
  sections: [
    {
      title: "The studio",
      paragraphs: [
        "Slanfor provides websites and software, identity and design, video and copy, marketing, and outbound sales support. The site is an introduction to that work. Sending an enquiry does not create a contract. A contract starts when both sides agree a written scope and fee, usually by email or a signed proposal.",
      ],
    },
    {
      title: "Quotes and fees",
      paragraphs: [
        "Prices are given in writing before work starts. Unless we say otherwise, a quote is an estimate based on the brief you gave us. If the brief grows, we stop and agree the extra before we do it. We do not start a stage until the fee for that stage is clear.",
        "The free website package, where it applies, covers a standard four-to-five-page brochure site. Hosting, upkeep, and form notifications are billed separately as published on that page. Shops, booking tools, portals, and custom software are quoted on their own.",
      ],
    },
    {
      title: "Your brief",
      paragraphs: [
        "You are responsible for the accuracy of the material you send: copy, images, product facts, claims, and access to accounts we need. We will not invent testimonials, results, or legal statements. If a delay on your side holds the work, dates move with it.",
      ],
    },
    {
      title: "Approvals",
      paragraphs: [
        "You review and approve the main deliverables before they go live or to print: edited text, designs, film cuts, and formatted files. Once you approve a stage, further changes to that stage are a new piece of work unless we agreed a round of revisions in the quote.",
      ],
    },
    {
      title: "What you own",
      paragraphs: [
        "When an invoice for a deliverable is paid, you own that finished work: the site we built for you, the mark we drew, the film we cut, the copy we wrote for the brief. You do not own our unused sketches, internal tools, or methods. Third-party fonts, stock, plugins, and platform accounts stay under their own licences. We will tell you what we used.",
        "Until invoices are paid, Slanfor retains the files. We may pause publishing or hand-over if a fee is overdue.",
      ],
    },
    {
      title: "Our name",
      paragraphs: [
        "We may list the finished work in our portfolio unless you ask us not to in writing before the project starts. We will not share confidential commercial detail you marked as confidential.",
      ],
    },
    {
      title: "Websites and hosting",
      paragraphs: [
        "A site depends on hosting, domains, browsers, and third-party services. We build for the browsers and conditions named in the quote. We are not responsible for outages or policy changes at Amazon, Google, Meta, a host, or any other platform we publish to on your behalf.",
      ],
    },
    {
      title: "Marketing and sales work",
      paragraphs: [
        "Campaigns and outbound work can improve the chance of enquiries. They cannot guarantee a number of leads, sales, or rankings. Results depend on the offer, the market, and how quickly you follow up. Reports will say what happened, not dress it up.",
      ],
    },
    {
      title: "Liability",
      paragraphs: [
        "We do the work with reasonable care and skill. We are not liable for loss of profit, loss of data, or indirect loss. Our total liability for a project is limited to the fees you paid us for that project in the three months before the claim. Nothing in these terms limits liability for death, personal injury, or fraud.",
      ],
    },
    {
      title: "Ending the work",
      paragraphs: [
        "Either side can end a project in writing. You pay for work done and costs committed up to that point. We will hand over paid-for files in the state they are in. We can end the work immediately if invoices stay unpaid after a reminder, or if the brief asks us to do something unlawful.",
      ],
    },
    {
      title: "Law",
      paragraphs: [
        "These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction, except that we may still seek to recover an unpaid invoice in another court if we need to.",
        "Questions about these terms: info@slanfor.com or +44 33148312.",
      ],
    },
  ] satisfies LegalSection[],
};
