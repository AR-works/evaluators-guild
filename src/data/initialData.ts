export interface SuccessStory {
  id: string;
  author: string;
  role: string;
  content: string;
  date: string;
  tag: string;
  isInitial?: boolean;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: 'starting' | 'resume' | 'guides' | 'bestPractices';
  readTime: string;
  content: string;
  date: string;
}

// Empty — user will provide community voices content later
export const initialSuccessStories: SuccessStory[] = [];

export const initialResources: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Getting Started in AI Evaluation',
    description: 'A comprehensive primer on what AI evaluation is, the primary platforms (Outlier, Alignerr, DataAnnotation), and how contracts work.',
    category: 'starting',
    readTime: '8 min read',
    date: '2026-04-10',
    content: `### Introduction to AI Evaluation

AI models like Large Language Models (LLMs) learn by predicting the next word. However, to make them safe, helpful, and accurate, companies use a process called **Reinforcement Learning from Human Feedback (RLHF)**.

As an AI Evaluator, your job is to review prompts and model responses, score them on various dimensions (such as accuracy, safety, and helpfulness), and write detailed explanations.

#### Key Platforms to Apply:
1. **DataAnnotation.tech**: Known for high-quality prompt/response rating.
2. **Outlier.ai**: Massive scale projects, onboarding tests are rigorous but pay is competitive.
3. **Alignerr.com**: Specialized evaluation across mathematics, writing, and coding.
4. **Remotasks / Appen / Telus**: Micro-tasking and long-term search engine evaluation.

#### Core Skills Required:
- Excellent written English (and/or native competency in target languages).
- Critical thinking and attention to detail (spotting subtle hallucinations).
- Basic research skills to verify facts.`
  },
  {
    id: 'res-2',
    title: 'Acing Your Evaluation Entry Exams',
    description: 'Learn the exact strategies to pass strict screening exams and quality assessments on major micro-work networks.',
    category: 'resume',
    readTime: '6 min read',
    date: '2026-05-02',
    content: `### Preparing for Screening Exams

Most platforms use automated screening tests that test your analytical reasoning, writing speed, and guideline comprehension. Here is how to pass them:

#### 1. Read the Guidelines Thoroughly
Do not skim the documentation. Platform exams are open-book, but they design questions around edge cases in their manuals. Keep the PDF guidelines open in a side window.

#### 2. Master the Core Rubric:
- **Helpfulness**: Does the response follow instructions? Is the tone appropriate?
- **Truthfulness (Accuracy)**: Check every single claim made by the model. Do not assume any fact is correct.
- **Harmlessness**: Flag toxic content, self-harm advice, and copyright violations.

#### 3. Write Exhaustive Justifications:
When justifying your ratings, do not write "Response A is better because it is longer." Write structured analyses:
- Identify formatting discrepancies.
- Cite specific guideline sections.
- Point out minor grammar, style, or syntax issues.`
  },
  {
    id: 'res-3',
    title: 'Freelancing Best Practices: Taxes and Workspace',
    description: 'Essential business advice for remote evaluators, managing 1099 contracts, self-employment taxes, and productivity.',
    category: 'bestPractices',
    readTime: '10 min read',
    date: '2026-05-20',
    content: `### The Business Side of AI Evaluation

Working as an independent contractor gives you complete location freedom, but you must treat it like a business.

#### 1. Tax Preparation (US 1099 / Global Self-Employment)
- **Set Aside 25-30%**: As an independent contractor, taxes are not withheld from your payouts. Put a percentage of every transfer into a separate savings account.
- **Track Deductions**: Deduct a portion of your internet bill, home office utilities, computer hardware, and desk setup.

#### 2. Manage Platform Risk
Platforms can experience "project pauses" or "empty queues" (EQ). Never rely on a single platform. We recommend maintaining active accounts on at least **two** platforms to smooth out earnings gaps.

#### 3. Time Management
Create a dedicated workspace and use an app to track active hours. Set a daily revenue target and shut off your computer once met to avoid burnout.`
  },
  {
    id: 'res-4',
    title: 'Guidelines and Prompt Engineering 101',
    description: 'An advanced guide to understanding instructions, rating constraints, and how to write quality prompts to evaluate models.',
    category: 'guides',
    readTime: '7 min read',
    date: '2026-06-15',
    content: `### Understanding Guidelines & Prompts

Modern models are evaluated against complex prompts. Writing test prompts is a specialized skill within the evaluation industry.

#### Writing High-Quality Prompts:
- **Constraints**: Force models to output in strict structures (e.g., "Write a 3-paragraph summary using no words containing the letter 'e'").
- **Intent**: Prompts must represent realistic user inquiries, spanning coding, creative writing, or technical troubleshooting.
- **Multiturn Conversations**: Test if a model retains context. Ask a question, get an answer, then ask a follow-up referencing the previous turn ("Now rephrase your second bullet point in Spanish").

#### Fact-Checking Workflows:
1. Search Google using search operators (quotes, site filters).
2. Check primary sources (scientific journals, official documentation) over Wikipedia or blogs.
3. Keep logs of sources cited in your justifications.`
  },
  {
    id: 'res-5',
    title: 'Talent Collective Mission and Non-Alignment',
    description: 'The canonical project context: why Talent Collective exists, who it serves, and why neutrality matters.',
    category: 'starting',
    readTime: '9 min read',
    date: '2026-07-08',
    content: `### Why Talent Collective Exists

Talent Collective was founded on 17 June 2026 to solve a fragmentation problem in AI freelancing.

AI evaluators, RLHF contributors, data annotators, prompt engineers, students, recruiters, and companies often work across several platforms at once. Useful questions about verification, pay, interviews, task availability, and whether a platform is worth applying to are scattered across Reddit, private messages, company Discords, Slack workspaces, and platform-specific communities.

Talent Collective exists as the shared space connecting those conversations.

#### Mission

To build the most trusted independent community for AI freelancers worldwide.

The goal is to make finding information, opportunities, collaborators, and professional support significantly easier than relying on isolated company communities.

#### Core Principle: Non-Alignment

Talent Collective does not officially represent any single hiring platform.

Companies, recruiters, and sponsors are welcome, but the community itself remains independent. This neutrality allows honest discussion about every platform without forcing members into a company-controlled narrative.

#### What the Community Should Feel Like

- Friendly
- Helpful
- Respectful
- Welcoming
- Honest
- Community-driven

The intended atmosphere is experienced freelancers helping newer freelancers, not corporate customer support.

#### Who Talent Collective Serves

- AI evaluators
- RLHF contributors
- Prompt engineers
- Data annotators
- AI trainers
- Freelancers
- Students
- Full-time professionals exploring AI work
- Recruiters
- Companies and agencies hiring responsible AI talent

Secondary audiences include researchers, startup founders, technical writers, and hiring managers.

#### Who Talent Collective Does Not Serve

Talent Collective has zero tolerance for MLM schemes, scammers, fake recruiters, spam, fraud, harassment, and unvetted job posts.

Job postings should be vetted before publication, and revenue opportunities should never compromise community neutrality.

#### Current and Future Ecosystem

Talent Collective began as a Discord community and is evolving into a broader organization: website, resource library, platform guides, newsletter, media publication, company directory, freelancer directory, hiring initiatives, and social channels.

#### Website Purpose

The website exists to introduce Talent Collective, explain the community, help users discover resources, publish platform guides, improve SEO, and drive Discord membership.

Over time, the website should become the primary knowledge base for AI freelancers.

Current technical context includes Next.js, Vercel hosting, Vercel Analytics, and the domain talent-collective.org. Planned improvements include a newsletter, analytics, better search, stronger resources, and email infrastructure.

#### SEO and Public Voice

The long-term SEO goal is to become Google's best independent resource for topics around AI freelancing: AI evaluator, AI evaluation guide, freelance AI jobs, data annotation, RLHF, platform guides, payment guides, interview guides, and verification guides.

Talent Collective's social presence should not feel like a corporate account. It should become the public voice of AI freelancers: warm, helpful, professional, occasionally humorous, and human.

Useful public content includes career tips, platform explainers, interview experiences, salary discussions, community wins, news, and short educational videos.

#### Success Metrics

Important metrics include Discord members, daily active users, member retention, organic traffic, search rankings, returning visitors, guide readership, recruiters onboarded, successful hires, job placements, newsletter subscribers, Instagram growth, and website referrals.

The long-term ambition is simple: someone entering AI evaluation should naturally think, "Join Talent Collective first."`
  },
  {
    id: 'res-6',
    title: 'AI Evaluation Platform Market Map',
    description: 'A cross-platform overview of how AI evaluator, trainer, annotator, and prompt engineering platforms differ.',
    category: 'guides',
    readTime: '10 min read',
    date: '2026-07-08',
    content: `### Market Overview

Paid AI training platforms are remote freelance marketplaces where people contribute human judgment to improve AI models.

Common work includes data annotation, model evaluation, prompt creation, output review, rubric-based scoring, content review, and specialist domain assessment.

The market is growing quickly because AI labs need human feedback for increasingly complex and specialized systems. Demand is especially strong for people with domain expertise in coding, STEM, medicine, law, finance, languages, and advanced writing.

#### Main Platform Types

1. **Premium expert networks**: Micro1, Mercor, Alignerr, Handshake AI, and Surge AI focus on higher-skill contributors, domain experts, and more selective screening.
2. **Large contributor platforms**: Outlier AI and Scale AI-related programs use large pools of contributors for RLHF, ranking, specialist tasks, and data operations.
3. **Accessible entry platforms**: DataAnnotation, Appen, Telus Digital, Mindrift/Toloka, and similar platforms are often easier starting points for beginners.
4. **Aggregators and marketplaces**: OpenTrain AI aggregates opportunities across many underlying platforms rather than acting as a single direct employer.

#### Core Task Types

- Writing and evaluating prompts
- Ranking model responses
- Reviewing output accuracy and helpfulness
- Applying detailed scoring rubrics
- Creating domain-specific examples
- Evaluating medical, legal, finance, STEM, coding, or language outputs
- Annotating text, images, audio, or video
- Search quality rating and web relevance evaluation

#### Platform Snapshot

- **Micro1**: Global expert network using Zara, an asynchronous AI interviewer, plus proctored assessments and certification.
- **Outlier AI**: Scale AI contributor platform with domain roles, general reasoning screening, and flexible no-minimum-hours work.
- **Alignerr**: Labelbox-powered platform with AI training, search quality, coding, accounting, video, and language roles.
- **Mercor**: AI talent platform with a reusable AI interview, domain expert matching, weekly Stripe Connect payments, and strong funding signals.
- **DataAnnotation**: Beginner-friendly conversation rating and annotation work, weekly PayPal payments, and a lower pay ceiling.
- **Handshake AI**: Secondary research positions it as high-ceiling expert work for prompt engineering and domain-specific reasoning.
- **OpenTrain AI**: Aggregator for jobs across 20+ platforms, best treated as a discovery layer rather than a direct employer.

#### Search Topics Talent Collective Tracks

- Best AI evaluator platforms
- AI evaluator jobs remote
- RLHF pay rates
- Data annotation work
- Prompt engineer freelance jobs
- Platform comparisons
- AI interview preparation
- Empty queues and task shortages
- Account bans, deactivations, and appeals
- Realistic AI evaluation income`
  },
  {
    id: 'res-7',
    title: 'AI Evaluator Pay, Stability, and Platform Diversification',
    description: 'Realistic pay bands, income expectations, and why contributors should not rely on one platform.',
    category: 'bestPractices',
    readTime: '8 min read',
    date: '2026-07-08',
    content: `### Realistic Pay Bands

AI evaluation pay varies by task complexity, contributor expertise, location, platform demand, and project availability.

Common benchmarks from the research dossier:

- Basic annotation: roughly $8-$20/hr
- Mid-level evaluation work: roughly $20-$50/hr
- Specialized STEM, coding, medical, legal, or finance work: roughly $50-$300+/hr
- Accessible prompt evaluator jobs: often around $12-$40/hr

The headline "$50/hr AI jobs for anyone" is misleading. Those rates exist, but usually for verified subject-matter experts with strong writing skills and reliable platform history.

#### Platform-Level Examples

- Micro1: roughly $20-$150/hr depending on role, with AI trainer/annotator roles around $20-$40/hr and engineering roles higher.
- Outlier AI: advertised around $15-$50/hr, with effective community-reported rates often lower after unpaid time and task gaps.
- Alignerr: community-reported general range around $15-$60/hr, with a higher advertised specialist ceiling.
- Mercor: broad range from entry AI model specialist rates around $16/hr to engineering contracts above $70/hr, depending on role.
- DataAnnotation: roughly $15-$23/hr, paid weekly via PayPal.
- Handshake AI: secondary research groups high-end expert work in the $50-$300+/hr range, but platform-specific verification is limited.

#### Beginner Income Expectations

A beginner working around 20 hours per week on accessible platforms such as Telus or DataAnnotation may realistically earn around $240-$400/week.

Experienced evaluators with STEM or legal backgrounds working across multiple premium platforms can sometimes reach $2,500-$5,000/month at 25-30 hours per week, but that is not typical for beginners and usually takes time to build.

#### Diversification Advice

Do not rely on one marketplace.

Projects open, fill, pause, restart, and disappear without much notice. Empty queues and task shortages are normal in this industry. Combining 2-3 platforms can smooth earnings and reduce the risk of a sudden income gap.

#### Skills That Unlock Higher Pay

- Coding
- STEM knowledge
- Advanced language ability
- Medicine, law, or finance expertise
- Strong written reasoning
- Rubric-based scoring experience
- Consistent quality history
- Ability to explain decisions clearly

#### Stability Warning

Most AI evaluation platforms work best as supplemental income unless you have high-demand specialization and multiple active accounts. Treat pay ranges as approximate and time-sensitive, not guaranteed income.`
  },
  {
    id: 'res-8',
    title: 'Additional AI Work Platforms to Watch',
    description: 'A short research-backed snapshot of secondary platforms discovered in the PDF dossier.',
    category: 'guides',
    readTime: '7 min read',
    date: '2026-07-08',
    content: `### Why These Platforms Matter

The main platform guides cover Micro1, Outlier AI, Alignerr, Mercor, DataAnnotation, Handshake AI, and OpenTrain AI. The research dossier also identified several additional platforms that are worth monitoring.

These are not full reviews yet. Treat this as a watchlist for future dedicated research.

#### Appen

Appen is one of the oldest and largest AI data companies globally. It offers AI evaluation projects under various codenames, including search rating work. Prompt-specific work may appear under LLM quality or conversational AI projects. Research suggests typical pay around $14-$20/hr.

#### Telus Digital

Telus Digital, formerly associated with Telus International and Lionbridge, runs AI Trainer and Internet Analyst programs, including search quality rating. It is often grouped with beginner-accessible platforms.

#### Mindrift / Toloka

Mindrift by Toloka focuses on human evaluation of AI outputs, requiring precision and analytical thinking. Toloka operates globally across 100+ languages, making it especially relevant for non-English speakers. Pay can be lower per task, but volume and language coverage are strengths.

#### Surge AI

Surge AI is positioned as a higher-paying freelance AI site for advanced AI training tasks. It hires experts in fields such as medicine, law, journalism, venture capital, and finance. The application process is less transparent in the available research.

#### TaskUs

TaskUs recruits full-time and part-time remote content and AI reviewers. Unlike many crowdwork platforms, some TaskUs roles may include employee-style benefits.

#### Scale AI Direct

Scale AI manages AI data labeling and evaluation programs directly. It is most relevant for managed AI data operations rather than broad freelancer recruiting. Outlier AI is part of the Scale ecosystem but should be understood separately from direct Scale AI programs.

#### Afterquery

Afterquery looks for software engineers, PhDs, and experienced professionals in finance, law, data science, health, and business to evaluate real-world outputs.

#### Meridial AI

Meridial AI specializes in projects that require skillset or domain expertise.

#### Research Gaps

These platforms need dedicated research before Talent Collective should publish full review pages. Current notes are directional and should be verified before being used for application decisions.

Communities worth monitoring for ongoing sentiment include r/beermoney, r/WorkOnline, r/outlierAI, r/mturk, and r/AIJobs. Compensation data should be treated as time-sensitive and reverified before publication.`
  },
  {
    id: 'res-9',
    title: 'Trust, Vetting, and Scam Safety for AI Freelancers',
    description: 'How Talent Collective thinks about recruiter vetting, platform neutrality, and safe community growth.',
    category: 'bestPractices',
    readTime: '6 min read',
    date: '2026-07-08',
    content: `### Trust Comes First

Talent Collective earns trust through transparency, independent moderation, honest discussions, community expertise, public feedback, quality resources, and careful vetting of recruiters.

The community is not designed to maximize referral spam or push one platform. It exists to help AI freelancers make better decisions across the whole ecosystem.

#### Vetting Job Posts

Job postings should be checked before publication. The goal is to keep scammers, fake recruiters, spam, fraud, and exploitative schemes out of the community.

Basic vetting questions:

1. Is the recruiter or company identifiable?
2. Does the opportunity clearly explain pay, task type, eligibility, and application steps?
3. Are payment methods and contract terms plausible?
4. Does the post avoid requiring suspicious upfront fees?
5. Does the role respect platform NDAs and worker safety?

#### Community Safety Standards

Talent Collective has zero tolerance for harassment, fraud, spam, scams, fake recruiters, and MLM-style schemes.

Members should feel comfortable asking beginner questions, comparing companies, discussing pay, and seeking career advice without being pushed into one platform's marketing funnel.

#### Revenue Without Bias

Future revenue could include sponsorships, donations, recruiter partnerships, a premium job board, educational courses, events, consulting, or newsletter advertising.

The rule is that revenue should never compromise community neutrality. If a sponsor or recruiter participates, the community still needs room for honest worker discussion.

#### Public Voice

Talent Collective's social presence should feel warm, helpful, professional, occasionally humorous, and human. The public voice should reflect AI freelancers themselves, not a corporate brand trying to control the conversation.

Useful public content includes career tips, platform explainers, interview experiences, salary discussions, community wins, industry news, and short educational videos.`
  }
];

export const mockMetrics = {
  activeUsersToday: 342,
  guildApplicationsThisMonth: 120,
  trafficGrowth: [
    { month: 'Jan', pageviews: 2400 },
    { month: 'Feb', pageviews: 3100 },
    { month: 'Mar', pageviews: 4500 },
    { month: 'Apr', pageviews: 5800 },
    { month: 'May', pageviews: 7900 },
    { month: 'Jun', pageviews: 9400 }
  ]
};
