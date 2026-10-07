const notes: Record<string, string> = {
  "Web Development":
    "A business website is the first place a stranger decides whether you are real. We plan the pages, the structure, and the mobile layout around the offer, not around a generic five-block template. Navigation, forms, and the calls to action are built so a visitor can actually complete the next step. The site is developed to load cleanly, hold together on a phone, and be handed over in a state you can keep editing. If you already have copy and a brand, we build to that; if you do not, we say so before the first page is designed.",

  "Landing Page Development":
    "A landing page has one job: take a visitor from a single offer to a single next step. We write and build that page around the campaign it belongs to, not as a squeezed-down version of the homepage. The headline, the proof, the form, and the button are arranged so the visit has a clear end. Tracking is considered at the same time as the layout, because a page that cannot tell you what happened is only half a page. When the offer changes, the page can be revised without rebuilding the rest of the site.",

  "E-Commerce Development":
    "A shop is not a brochure with a payment button bolted on. We build catalogues, carts, checkout, and order flow around the products you actually sell, including the edge cases that break a template store. Payments, shipping options, and confirmation emails are part of the same piece of work. The result has to work on a phone, because that is where most first purchases now start. E-commerce is quoted separately from a standard business site, so you know what you are buying before development begins.",

  "App Development":
    "An app is only worth building if it does a job the website cannot do as well. We start from the task, such as booking, ordering, fieldwork, or client access, and design the screens around how people already use their phones. The build covers the flows that matter on day one, not a feature list copied from a competitor. Testing happens on the devices your customers carry, not only in a desktop preview. If a native app is the wrong tool and a well-made website would do, we will tell you that before you spend the money.",

  "Custom Software Development":
    "Off-the-shelf tools are fine until the company has to change how it works to fit the software. Custom development is for the processes that are already the business: quoting, scheduling, stock, client portals, internal tools. We map the real steps people take, then write software that follows those steps instead of inventing new ones. Integrations with the systems you already pay for are scoped in, so the new tool does not become another island. Delivery includes enough documentation that the work can be maintained, not a black box only we understand.",

  "Website Maintenance & Support":
    "A site that is never touched starts to rot: plugins age, forms stop arriving, pages break on a new phone. Maintenance is the unglamorous work of updates, backups, small fixes, and a person to call when something is wrong. We keep a record of what changed, so you are not guessing why a page looks different. Content edits and minor layout repairs sit inside the same arrangement rather than triggering a new project every time. The point is continuity. The site should still look and behave like itself a year after launch.",

  "Website Hosting":
    "Hosting is where the site actually lives, which is why it should not be an afterthought bought from a banner ad. We place the site on hosting that matches the build, with backups and a way back if a deploy goes wrong. Performance and uptime are watched, because a site that is down is a closed shop. Certificates, email routing, and the boring pieces that keep a domain resolving are handled with the hosting, not left on a checklist. You get a place for the site to live that we are willing to stand behind.",

  "Domain & Business Email Setup":
    "A company still using a free inbox looks unfinished, even if the website is not. We register or connect the domain, point it at the site, and set up mailboxes that match the brand. DNS, records, and the small technical steps that make mail actually arrive are done once, properly. Staff can send from a company address on the phones and laptops they already use. If you already own the domain and it is a mess of old records, we tidy that before adding anything new.",

  "API & Third-Party Integrations":
    "Most businesses already run payments, forms, a CRM, or a booking tool. The waste happens when those systems do not talk to the website. We join the site to the tools you already rely on, so a form submission, an order, or a booking lands where the team will see it. The integration is scoped against what the other platform actually allows, not against a wish list. Error handling and a simple way to tell that data moved are part of the job. You should not have to copy records from one tab to another.",

  "Logo Design":
    "A logo has to survive at the size of a tab icon and at the size of a sign. We design a mark that holds up in those conditions, in colour and in a single colour, on light and on dark. Sketches come before polish, so you are choosing a direction rather than decorating a weak idea. The files you receive are the ones a printer, a developer, and a social intern can actually use. If the name is hard to read at small sizes, we solve that in the drawing, not with a drop shadow.",

  "Brand Identity Design":
    "A logo without a system is a sticker. Identity design sets the colours, type, spacing, and graphic habits that make every later page look related. We build a small, usable kit rather than a 90-page manifesto nobody opens. The system is tested on a website header, a social post, and a document, because those are the places it will live. When the identity is finished, a stranger should be able to tell your work from a neighbour’s without reading the name.",

  "Brand Guidelines":
    "Guidelines exist so other people can use the brand without inventing a new one. We write a short, practical document covering the mark, colour, type, tone, and the mistakes to avoid. Examples show the identity on a page, a post, and a slide, not only on a white artboard. The file is written for a busy person, which means it can be followed in ten minutes. When someone outside the studio produces a deck next month, it should still look like the same company.",

  "Personal Branding":
    "Founders, consultants, and specialists are often the product, whether they like that or not. Personal branding gives that person a clear look, a clear line, and a set of materials that can be used on a site, a profile, and a talk. We do not invent a personality. We tighten the one that is already there so it is recognisable in a feed and in a room. Photographs, type, colour, and the way the name is written are treated as one system. The result should still feel like the person when they walk into a meeting.",

  "UI/UX Design":
    "People abandon sites and apps that make them think too hard. UI and UX work maps the job a user is trying to finish, then arranges screens so that job is obvious. We wireframe the flows before decorating them, which is how you avoid painting a confused structure. Buttons, forms, empty states, and error messages are designed as part of the same system. You see the interface as a set of decisions, not as a mood board. Development then has something precise to build.",

  "Website Design":
    "Website design is the look and the order of the pages a visitor will actually scroll. We arrange each page so the offer is obvious within a few seconds, including on a phone. Type, colour, imagery, and space come from the identity, so the site does not look like a theme with a logo dropped in. Hierarchy is treated as a craft: what is first, what is proof, what is the next step. The design is handed over in a state a developer can build without guessing.",

  "App UI Design":
    "An app interface has less room than a website and less patience from the person holding it. We design the screens around the actions that matter, with thumbs, one-handed use, and interrupted sessions in mind. Components stay consistent so a user does not have to relearn the app on every page. Empty states and errors are designed with the same care as the happy path. The files a developer receives are specified, not merely pretty.",

  "Social Media Post Design":
    "A post has about a second to look like it belongs to you. We design templates and individual pieces sized for the feed they will run in, using the identity rather than a trend overlay. Type is large enough to read with the sound off and the phone in a queue. A set of posts should feel like a series, not like eight unrelated images. When the campaign ends, you keep files you can adapt rather than a folder of locked pictures.",

  "Marketing Creatives":
    "A campaign needs more than a logo on a rectangle. We make the visual pieces the plan actually requires: posts, stories, covers, sales sheets, and the odd physical item if the brief calls for it. Each piece is built from the same identity so the campaign looks considered instead of assembled. Copy and design are handled together, because a beautiful layout with a weak line still fails. You receive files ready for the placements you named, not a single master that does not fit any of them.",

  "Banner & Ad Design":
    "Ads are cropped, compressed, and ignored. The design has to survive that. We make banners and paid placements at the sizes the platform requires, with a focal point that still reads at a glance. The offer and the brand are both visible; one should not erase the other. Variations are produced when a campaign needs them, rather than stretching one layout across every slot. What you get is ready to upload, not a concept that still needs a production pass.",

  "Infographic Design":
    "Some arguments are easier to see than to read. An infographic turns a process, a comparison, or a set of figures into a picture a busy person can scan. We start from the point you need to make, then give it a structure, not a decoration of icons. Type, colour, and hierarchy follow the brand, so the piece can live on the site, in a deck, or in a post. The finished file should still make sense if someone only looks at it for twenty seconds.",

  "Pitch Deck & Presentation Design":
    "A deck is read in a room, on a laptop, and sometimes forwarded without you there to narrate it. We design slides that stay readable at all three distances. The story has an order: the problem, the offer, the proof, the ask. Charts and screenshots are cleaned up so they support the point instead of filling space. You leave with a file you can present this week and adapt next quarter without the design falling apart.",

  "Video Editing":
    "Editing is the difference between footage and a film people will finish. We cut to the length and the place the piece will be watched, which is not the same decision for a website as it is for a feed. Pacing, reaction, and the moments that should land are treated as craft, not as a trim of the longest take. Colour, captions, and sound are considered with the cut, so you are not handed a timeline that still needs three other people. The delivery is a film you can publish.",

  "Short-Form Video Editing":
    "Short-form is not a long film with the middle deleted. We cut for the pace of a feed: a first second that earns the second, a structure that does not wander, an ending that is a decision rather than a fade. On-screen type, jump cuts, and B-roll are used because they serve the hook, not because they are fashionable. Each piece is made to the aspect ratio and length the platform rewards. You get a clip that feels native to the feed, not a widescreen advert squeezed into a phone.",

  "Reels, TikTok & YouTube Shorts Editing":
    "Reels, TikTok, and Shorts each have habits a viewer can feel even if they cannot name them. We edit for those habits: framing, captions, pacing, and the safe areas those apps cover with buttons. Hooks are tested in the cut rather than promised in a comment. Series and repeating formats are available when you need the channel to feel like one place. The files you receive are ready to post, with the right size for each app, not a single export you have to crop yourself.",

  "YouTube Video Editing":
    "A YouTube film has to hold someone who could leave at any second. We build a structure with an opening that states the stake, a middle that earns its length, and a close that points somewhere. Pattern interrupts, B-roll, and on-screen type are used to keep the cut alive without turning it into noise. End screens, chapters, and a thumbnail that matches the film are part of the same job. The result should feel like a channel, not like a one-off upload.",

  "Corporate Video Editing":
    "A company film is often watched by people who did not choose to be there: staff, a conference room, a procurement panel. We cut for clarity first. Talking heads are paced, branded, and supported with the shots and graphics that make the point land. Jargon is trimmed where the picture can carry the meaning. Versions can be made for a website, an event screen, and an internal audience without starting from nothing each time. You get a film that represents the company without sounding like a brochure being read aloud.",

  "Podcast Video Editing":
    "A recorded conversation is not automatically watchable. We cut podcast video so the episode has a rhythm: clean edits, multicam switches when they help, lower-thirds, and a hold on the moments that deserve one. Filler is removed without making the guests sound unlike themselves. Audio is brought into line with the picture, because a podcast that looks fine and sounds thin still fails. You leave with an episode that can live on YouTube as well as in a feed.",

  "Promotional Videos":
    "A promotional film has to present an offer, a company, or a launch without becoming a list of adjectives. We write or work from a brief, shoot or assemble from what you have, and cut a piece with a beginning, a proof, and an ask. Motion and type support the story rather than decorating it. Length is decided by the place it will run: a homepage, an ad, an event. The finished film should make a stranger understand what you do and why it might matter this month.",

  "Product Videos":
    "People buy more confidently when they have seen the thing work. A product film shows what it is, how it is used, and why that is better than the alternative, without a three-minute prologue. We plan shots around the details a listing photograph cannot carry: scale, motion, texture, the awkward bit that usually gets skipped. Voice, type, or both can carry the explanation. You get a piece that can sit on a product page, in an ad, or in a sales conversation.",

  "Social Media Video Ads":
    "A video ad in a feed is competing with a friend’s holiday and a dog. The first second has to earn the rest. We cut short ads for paid social with a hook, a proof, and a button-worthy end, in the sizes those placements demand. Captions are on because most people will not unmute. Variations can be made for audiences and offers without inventing a new film each time. The point is a click or a conversion, not a festival cut.",

  "Explainer Videos":
    "An explainer exists because the idea is easier to follow in motion than in a paragraph. We script the walkthrough, design the pictures or animation that carry it, and cut to a length a first-time viewer will finish. Jargon is translated into steps a stranger can repeat. The brand’s type and colour are used so the film still looks like the company. You can put the result on a homepage, in a sales sequence, or in an onboarding email and it will still make the same argument.",

  "Motion Graphics":
    "Some ideas should never have been filmed. Motion graphics are for diagrams, numbers, processes, and brand moments that need to move. We design the frames so they still look like the identity at rest, then animate them with a pace that matches the film or the post. Lower-thirds, stings, and full sequences are all in scope when the brief needs them. Delivery includes the sizes you named. You should not have to commission a second designer to make the graphics match the logo.",

  "2D Animation":
    "Drawn animation can explain, sell, or tell a short story when live action would be expensive or the wrong tone. We develop the look with you, then animate to a script rather than decorating a voiceover after the fact. Characters, icons, or purely graphic worlds are all possible; the constraint is whether the style will still look like the brand in a year. Timing and sound are treated as part of the animation, not as extras. The finished piece can stand alone or sit inside a longer film.",

  "Logo Animation":
    "A still mark on a freeze-frame looks unfinished once everything around it is moving. We animate the logo for intros, outros, and stings, using motion that fits the identity rather than a stock swirl. Versions can be made for a website, a reel, and a YouTube end card from the same idea. Timing is short on purpose; a logo animation should announce, not delay. You receive files that drop onto an edit without another round of interpretation.",

  "Intro & Outro Animation":
    "A channel feels like a channel when the opening and the close are the same every time. We design an intro and outro that carry the name, the mark, and a beat of motion, then deliver them at the lengths you actually cut to. The pair should still look like the brand if someone skips the first second. Lower-thirds and a simple sting can sit in the same pack so the editor is not inventing chrome. Once these exist, every later film looks more expensive than it did the week before.",

  "Animated Social Media Posts":
    "A still post disappears in a feed that moves. We animate short pieces, such as type, a product, or a simple scene, at the size and length each network expects. The motion is designed to loop or to end on the offer, not to wander. Brand colour and type stay intact, so the post still looks like you when it pauses. These are not full films. They are posts that earn a second look without asking someone to sit through a pre-roll.",

  "Kinetic Typography":
    "Sometimes the line is the picture. Kinetic type sets words in motion so the rhythm of the sentence is visible. We design the type to match the brand, then animate it to a voiceover, a piece of music, or a silent feed. Hierarchy still matters: the viewer should know which words to take with them. The result can be a whole short film or a sequence inside a longer edit. It should remain readable, which is the part most kinetic type forgets.",

  "Video Captions & Subtitles":
    "Most video is watched without sound. Captions are therefore not a courtesy; they are how the film is understood. We time and style captions so they can be read at a glance and do not cover the faces or the product. Subtitles for another language are handled as a separate, careful pass, not as a machine dump left unchecked. The look follows the brand rather than the platform default. You get files that sit on the film, and versions the platforms will accept.",

  "Audio Cleanup and Enhancement":
    "Viewers will forgive a slightly rough picture. They will not stay with thin, noisy, or echoing speech. We clean dialogue, reduce the room, and balance the mix so the film is comfortable to hear on a laptop and on a phone. Music, if it is used, is held under the words rather than competing with them. The aim is not a cinema mix. The aim is a film people can finish without turning it down. Delivery matches the picture, not a separate experiment.",

  "Thumbnail Design":
    "On YouTube, the thumbnail is the advert for the film. It has to read at the size of a stamp, with a face or an object and a few words at most. We design thumbnails that match the episode rather than promising a different one. Type, crop, and colour are tested at small size, because that is how they are chosen. A set of thumbnails should look like one channel. You receive files ready to upload, not a layered file that still needs a production pass.",

  "Video Resizing and Repurposing":
    "One master file cannot serve a website, a Reel, a Short, and a LinkedIn ad. We recut and resize the film for the places it actually has to run, reframing the action so nothing important sits under an interface. Captions and type are rebuilt for the new aspect ratio rather than squashed. Where a shorter hook is needed, we cut one from the same material. You get a set of usable versions, not a folder of stretched exports.",

  "Color Correction & Color Grading":
    "Cameras disagree with each other, and rooms disagree with cameras. Colour correction brings shots into the same world so a cut does not flicker between them. Grading then gives the film a consistent look that matches the brand or the mood the story needs. Skin, product, and skies are treated with more care than a preset can manage. The grade should survive compression on the platforms you publish to. You receive a film that looks intended, not like a collection of clips.",

  "Digital Marketing Strategy":
    "A strategy is a set of choices: where you will show up, who you are speaking to, what you will spend, and how you will know it worked. We write that plan against the business you have, not against a generic funnel diagram. Channels are recommended because they fit the offer, not because they are fashionable. The document names what will not be done this quarter, which is the part that keeps a budget intact. You should be able to brief the rest of the work from it without starting the argument again.",

  "Content Marketing":
    "Content marketing is a plan for the articles, posts, and films that keep an offer visible between campaigns. We map topics to the questions your buyers already ask, then set a rhythm a team can keep. Each piece has a job: to be found, to explain, or to be handed over in a sales conversation. Measurement is tied to the behaviour you care about, not to a vanity count of posts. The calendar is a working document. It changes when the offer changes.",

  "Conversion Rate Optimization":
    "Traffic that does not enquire is an expensive habit. Conversion work looks at the page or the flow and changes the things that stop people finishing: unclear offers, buried forms, slow steps, copy that argues with itself. We work from evidence where you have it, and from structured tests where you do not. Recommendations are specific enough to build, not a list of best practices. The aim is more of the visits you already pay for turning into a conversation.",

  "Analytics and Performance Reporting":
    "A report should answer whether the work changed anything that matters. We set up tracking that can be trusted, then write reports around enquiries, costs, and the behaviour that leads to both. Vanity figures are left out unless they explain a decision. When something is down, the report says so and names a next step. You should be able to read it in a sitting and know whether to keep, cut, or change a channel.",

  "Social Media Marketing":
    "Social marketing is campaign work, not a posting quota. We plan the offer, the audience, and the creative for the networks that actually reach your buyers. Organic and paid can sit in the same brief so the feed and the ads do not contradict each other. Community replies are treated as part of the work, because a campaign that is never answered still fails. You get a plan, the pieces to run it, and a way to tell if it earned its keep.",

  "Social Media Management":
    "A neglected profile looks like a closed shop. Management is the weekly work of posting, watching, and answering in the voice of the company. We run a calendar you can see, so nothing surprises you on a Monday morning. Comments and messages are handled, not left to age. Reporting is honest about what the feed did, including when it did little. The aim is a presence that still looks looked-after when you have not opened the app.",

  "Search Engine Optimization (SEO)":
    "SEO is the slow, structural work of making the right searches able to find the right pages. We look at the site, the pages, and the queries people already type, then fix the technical and editorial problems that bury you. New pages are written to be useful first and findable second, which is the order search engines have learned to reward. This is not a promise of overnight rank. It is a plan you can keep working. Results are reported against the terms and the pages that matter to the business.",

  "Pay-Per-Click Advertising (PPC)":
    "Paid search and paid social only work if the targeting, the line, and the landing page agree with each other. We build campaigns against a budget and a target, then watch them closely enough to move money when a group is wasting it. Copy, audiences, and the page they hit are treated as one system. You see spend, results, and the decisions behind both. PPC is a tap you can turn. It should never be a subscription to hope.",

  "Google Ads":
    "Google Ads sit in front of people who have already typed an intention. We structure campaigns around those searches, the match types that waste money, and the pages that can actually convert the click. Negatives, extensions, and the boring hygiene that keeps a account clean are part of the work. Landing pages are reviewed with the ads, because a good click on a weak page is still a loss. You get reporting that names the terms that pay and the ones that should be cut.",

  "Meta Ads":
    "Facebook and Instagram are useful when the offer can be shown to people who have not searched yet. We build Meta campaigns around audiences, creative that earns a stop-scroll, and a landing experience that matches the promise. Creative is refreshed rather than left to fatigue. Tracking is set so you can tell a cheap click from a useful one. The account should still make sense if someone on your side opens it. You are not renting a black box.",

  "LinkedIn Ads":
    "LinkedIn is expensive, which is why it only belongs on offers that sell to businesses and can stand the cost of a click. We target by role, company, and the other filters that actually describe a buyer, then write ads that sound like a professional speaking, not like a banner. Lead forms and landing pages are chosen for the motion you want next. Spend is watched at a grain that lets you stop a poor audience quickly. The report should tell you whether the channel is earning meetings, not only impressions.",

  "Retargeting Campaigns":
    "Most first visits do not convert. Retargeting exists to speak again to people who already showed interest, with a tighter message and a reason to come back. We build those campaigns with frequency caps and exclusions, so you are not chasing someone who already bought or who bounced in a second. Creative is written for a second look, not a first introduction. The work sits beside the rest of the paid media, not as a forgotten pixel. You should see cheaper conversations from traffic you have already paid for.",

  "Email Marketing":
    "Email reaches people who already agreed to hear from you, which is a different job from advertising. We write and send campaigns that a subscriber will finish: a subject that is true, a body that has a point, a next step that is easy. Lists are kept in a state that does not punish you for neglect. Design follows the brand without turning every mail into a poster. Reporting covers opens only as context; clicks and replies are the figures that matter.",

  "Marketing Automation":
    "Automation is for the follow-up that should happen even when nobody is at the desk. We design sequences around the action someone took, such as a download, a trial, or a quote request, and write the messages that come next. Timing, branching, and the moment a human should take over are decided on purpose. The system is documented so it can be changed, not worshipped. You get fewer dropped conversations without sounding like a machine that cannot stop.",

  "B2B Lead Generation":
    "B2B lead generation is a researched list of people in companies that fit, not a purchased dump of addresses. We define the account, the role, and the signals that make a name worth time, then build that list by hand and from sources that can be checked. Each record is useful to a salesperson: a name, a reason, a way to reach them. Volume is secondary to fit. You should be able to open the file and start work, not spend a week cleaning it.",

  "Appointment Setting":
    "The job is a meeting on a calendar with someone who fits, not a vague “they seemed interested”. We take qualified names, make the contact, and book the slot against times you can actually keep. Confirmations and reminders are part of the same motion, because a set meeting that nobody attends is not a result. Notes from the call travel with the booking so the person who runs it is not starting from zero. You see appointments, not activity for its own sake.",

  "Cold Calling":
    "A cold call is a first conversation with someone who did not ask for it, which is why it has to be short, specific, and honest. We work from a researched list and a reason to ring that person, not from a script that could be read to anyone. Objections are handled without an argument. Outcomes are logged so the next attempt is informed. The aim is a meeting or a clean no, not a long polite stall. You get calls made, and a record of what came of them.",

  "Cold Email Outreach":
    "Cold email only works when it is written to a person, about a problem that person might have. We research, write, and send in small, considered batches rather than blasting a bought list. The first line has to earn the second. Follow-ups are planned, then stopped, so you are not famous for nagging. Deliverability is treated as part of the craft. You see replies and meetings, and you see the copy that produced them.",

  "LinkedIn Outreach":
    "LinkedIn outreach is a first message to someone who can actually reply, written like a professional, not like a funnel. We find the right profiles, open with a reason that is specific, and keep the thread short. Connection spam and fake familiarity are not part of the method. Replies are handled, and the ones that belong in the CRM are moved there. You get conversations that could become meetings, from the network where your buyers already spend time.",

  "Sales Development":
    "Sales development is the early work that turns a name into a live conversation: research, first contact, qualification, and a clean handoff. We run that motion against a definition of a good account, so the pipeline is not full of polite dead ends. Activity is visible. So is the reason a name was dropped. The people who take the meeting should not have to repeat the discovery. You get a working front end for sales, not a pile of “leads” in a spreadsheet.",

  "Prospect Research":
    "Calling the wrong people is more expensive than calling no one. Research is the reading done before outreach: the company, the role, the trigger, the reason this month might be different. We build that context into the list so a first message has something true to stand on. Sources are noted. Guesswork is labelled as such. A salesperson should be able to pick up a record and sound as if they did the homework, because someone did.",

  "Lead Qualification":
    "A reply is not an opportunity until it fits. Qualification is a short, honest check: right company, right role, a problem you can actually solve, a next step that is real. We use criteria you agree in advance, so “interesting” does not sneak into the pipeline. Disqualified names are closed with a reason, which is how you stop fishing the same pond twice. The meetings that remain should be worth a senior person’s hour.",

  "Database Building":
    "A usable database is a list of accounts and contacts that is complete enough to work and tidy enough to trust. We build it to a structure your CRM can swallow: fields that mean something, duplicates removed, sources attached. Enrichment is done where it changes a decision, not for the sake of a full row. The file is kept in a state a human can scan. You should not need a morning of cleaning before the first call.",

  "CRM Management":
    "A CRM that nobody updates is an expensive notebook. We set the pipeline, the fields that matter, and the habit of writing the next step on every live record. Hygiene, including duplicates, stale stages, and missing owners, is treated as ongoing work. Reporting then reflects the real funnel rather than a fiction. The team should be able to open the system on a Monday and know what to do. That is the test. Everything else is decoration.",

  "Sales Follow-Ups":
    "The first message rarely closes anything. Follow-up is the second, third, and fourth contact, sent because the timing was wrong rather than because the offer was. We write those notes so they add something: a detail, a question, a reason to reply now. Cadence is agreed, then respected, including the stop. Everything is logged, so two people do not chase the same name. You get persistence without becoming a nuisance.",

  "Pipeline Management":
    "A pipeline is a view of what is moving, what is stuck, and what should be dropped. We keep that view honest: stages that mean something, dates that are real, amounts that have not been rounded up for morale. Reviews are about decisions, not about theatre. Stuck deals get a next step or an exit. Forecasts are only as good as the records underneath them, which is why the records are the work. You should be able to answer “what will close” without inventing a slide.",

  Copywriting:
    "Copywriting is the words for a specific place: a page, a post, an ad, a letter, a script. We write in the voice of the company, toward a reader who is busy and slightly suspicious. Claims are made only where they can be stood up. The line that sounds clever in a meeting is often the line we cut. You receive copy that can go live, with a rationale short enough to brief a designer. If the offer itself is unclear, we will say so rather than decorating the confusion.",

  "Website Content":
    "Website copy has to explain the offer before it entertains. We write the pages a visitor will actually read, including home, services, about, and the awkward ones in between, so each has a job and a next step. Headings carry the argument if someone only scans. Proof sits near the claim it supports. The voice matches the brand, including on the contact page, which is where many sites suddenly sound like a different firm. You should be able to publish without a rewrite in committee.",

  "Social Media Content":
    "Social copy is written for a thumb on a glass rectangle, not for a brochure. We plan and write posts in the company’s voice, with a reason to stop and a reason to care this week. Hashtags and trends are used only when they do not make you look borrowed. A month of content should feel like one speaker, not like four interns. Captions, on-image lines, and the odd longer piece are all in scope. You get words that can be posted, not a brainstorm in a document.",

  "Blog & SEO Content":
    "An article has to be worth reading and possible to find. We pick subjects your buyers already search for, then write them properly: a point of view, useful detail, a structure that search and a human can both follow. Keyword stuffing is not a strategy. Neither is a thin post published for the calendar. Each piece should earn a link from somewhere on the site that already has traffic. You get articles that can sit for years, not filler dated to a month.",

  "Email Copywriting":
    "An email is won or lost in the subject line and the first two sentences. We write both, then the body, so a busy person can finish it and know what to do. The voice is human. The ask is singular. Legal and footer requirements are respected without turning the letter into a poster of disclaimers. Sequences are written as a set, so the third mail does not repeat the first. You should be willing to send it to someone you respect.",

  "Ad Copy":
    "Ad copy has to work in a small space, against people who did not ask to read it. We write headlines, descriptions, and primary text to the limits of the placement, with one idea per line. The promise matches the page the click hits. Variants are produced so a campaign can learn without starting from nothing. Cleverness is optional. Clarity is not. You get lines that can go into the account today.",

  Scriptwriting:
    "A script is the film before anyone presses record. We write for the voice that will deliver it, the pictures that will cover it, and the length the slot allows. Dialogue sounds like speech. Claims are given to the picture where the picture can carry them. Stage directions are practical enough for a shoot or an animation team to use. You leave with a document that can be approved in a sitting and shot without a second interpretation.",

  "Video Scripts":
    "A video script is written to be edited to, which is a different craft from an essay. We structure the hook, the proof, and the close, and we mark what should be said and what should be shown. Timing is estimated so you know whether you have a thirty-second piece or a three-minute one. On-screen type is specified where it matters. The editor should be able to cut from the page. That is the test of whether the script was finished.",

  "E-Book Writing & Design":
    "An e-book is a longer argument a sales or marketing team can hand over. We write the piece, give it a structure a reader can finish, and design the pages so they look like the brand rather than a Word export. Chapters do real work: a problem, a method, proof, a next step. The file is light enough to email and clear enough to skim. You get something a salesperson is willing to attach, which is rarer than it sounds.",

  "Case Studies":
    "A case study is the story of a job: the situation, what was done, and what changed, told so a prospect can see themselves in it. We interview, write, and edit until the claims are specific enough to believe. Numbers are used where you will stand behind them. Design follows, so the piece can live on the site and as a leave-behind. Permission and names are handled with care. You should be able to send it after a call without writing a covering essay.",

  "Sales & Marketing Materials":
    "Teams still need paper and PDFs: one-pagers, leave-behinds, capability sheets, the document that gets forwarded internally. We write and design those pieces so they survive a meeting. The offer is obvious. The proof is close to the claim. The next step is not buried in a footer. Files are produced in the formats you actually send. A salesperson should be able to talk from the page without apologising for it.",

  "Content Repurposing":
    "Good work dies when it only lives in one format. Repurposing takes an article, a film, or a deck and turns it into the next useful shape: a thread, a short, a landing section, an email. We keep the argument intact and change the craft to fit the channel. This is editing, not spinning. The original still has to be strong enough to survive the cut. You get more use from work you have already paid for, without pretending it is a new idea.",
};

export function serviceNote(name: string) {
  return (
    notes[name] ??
    `${name} is quoted and delivered as part of this practice. We will scope the brief with you, say plainly what sits inside the work and what does not, and give you a written outline before anything is produced. Delivery includes the files and access a team can actually use, not a handover that still needs a translator. If the job belongs better under another practice, we will say so rather than stretching this one to fit. Send the context you have; a messy brief is enough to start.`
  );
}

export function serviceNoteLines(name: string) {
  return serviceNote(name)
    .split(/(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
}
