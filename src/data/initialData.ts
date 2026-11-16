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
    description: 'A practical primer on AI evaluation work, task types, platform choice, and how to build a sane first-month plan.',
    category: 'starting',
    readTime: '14 min read',
    date: '2026-04-10',
    content: `### What AI Evaluation Work Actually Is

AI evaluation is paid judgment work. Companies building large language models, coding agents, image systems, search tools, and domain-specific AI products need people to test model behavior before users rely on it.

You might compare two answers, label one as better, and explain why. You might check whether a medical answer overstates certainty. You might write prompts that expose a model's weak spots. You might review code, search results, images, policy compliance, or factual claims.

The work sounds simple until you do it. Good evaluators notice small failures: a model answers the wrong question, hides uncertainty, invents a source, misses a formatting constraint, or gives advice outside the user's context.

#### The Main Task Types

- **Response ranking**: Choose the better answer and justify your choice.
- **Rubric scoring**: Score helpfulness, factuality, instruction following, safety, style, or completeness.
- **Prompt writing**: Create tasks that test reasoning, creativity, coding, domain knowledge, or constraint following.
- **Fact checking**: Verify claims against reliable sources and mark unsupported statements.
- **Specialist review**: Use expertise in law, medicine, finance, engineering, writing, math, or coding to judge domain-specific outputs.
- **Annotation**: Label text, images, audio, video, search results, or conversation data.
- **Search quality rating**: Judge whether search results or AI summaries satisfy a user's intent.

#### The Difference Between Entry Work and Expert Work

Entry-level work usually tests writing quality, attention to detail, and guideline-following. DataAnnotation, Appen, Telus Digital, Mindrift/Toloka, and some generalist roles can fit beginners.

Expert work pays more because the platform needs judgment that a general worker cannot fake. Micro1, Mercor, Alignerr, Outlier AI specialist projects, Handshake AI, Surge AI, and similar platforms often look for coding skill, STEM depth, medical knowledge, legal training, finance experience, advanced writing, or language expertise.

If you are new, do not chase only the highest advertised rate. Start with the platform that matches your evidence. A software engineer should target code evaluation roles sooner.

#### How Contracts Usually Work

Most AI evaluation roles are freelance or contract work. You may not receive guaranteed hours, benefits, paid leave, or a stable queue. A platform can approve your account and still have no tasks for your profile that week.

Expect these patterns:

- Some platforms pay hourly.
- Some pay per task.
- Some pay project rates or retainers.
- Some track active work time with software.
- Some require ID verification before paid tasks.
- Some require extra qualification tests for each project.

Read the contract before assuming anything about pay timing, dispute handling, taxes, or task ownership.

#### A First-Month Plan

1. **Pick two platform types.** Apply to one accessible platform and one higher-ceiling platform that matches your background.
2. **Write a clean evaluator resume.** Emphasize writing, research, domain expertise, coding, languages, QA, editing, teaching, moderation, or analysis.
3. **Create a source-checking workflow.** Keep a browser profile with bookmarks for official docs, search operators, scientific sources, and citation notes.
4. **Practice explanations.** Write short justifications for why one answer is better than another. Avoid vague lines like "A is more detailed." Name the exact improvement.
5. **Track every application.** Record platform, email used, date, assessment status, pay claim, payment method, and ID verification status.
6. **Do not depend on one queue.** Empty queues happen. Platform diversification protects you from sudden income gaps.

#### What Makes Someone Good at This

Good evaluators do not reward confident answers. They reward answers that satisfy the user's request, respect constraints, make correct claims, and admit uncertainty when needed.

A useful evaluator can explain:

- Which instruction the model missed
- Which claim needs evidence
- Which answer creates risk
- Which response better matches the user's intent
- Which formatting or style constraint changed the outcome

If you can do that in clear language, you already have the core skill. The rest is platform process, domain knowledge, and consistency.`
  },
  {
    id: 'res-2',
    title: 'Acing Your Evaluation Entry Exams',
    description: 'A field guide to screening tests, AI interviews, writing samples, rubric questions, and the mistakes that fail applicants.',
    category: 'resume',
    readTime: '12 min read',
    date: '2026-05-02',
    content: `### What Entry Exams Try to Measure

Platform exams do not only test whether you can read English or click the right rating. They test whether you can follow a private rulebook under time pressure.

Most failures come from three habits:

- The applicant skims the guidelines.
- The applicant rates based on vibes instead of rubric language.
- The applicant writes a justification that sounds plausible but does not prove the rating.

You need to treat the assessment like a work sample, not a quiz.

#### Build Your Exam Setup

Before you start, prepare your workspace.

1. Open the guidelines in a separate window.
2. Keep a notes file for edge cases.
3. Use a timer, but do not rush the first examples.
4. Turn off notifications.
5. Use a browser profile without extensions that can interfere with proctoring.

If a platform warns you about screen sharing, camera use, or full desktop access, decide before the exam whether you accept that tradeoff. Micro1-style proctored assessments can require full desktop sharing. Do not discover that requirement mid-session.

#### Learn the Rubric Vocabulary

Most evaluation rubrics reuse the same categories under different names.

- **Instruction following**: Did the model do what the user asked?
- **Factuality**: Are the claims true and supported?
- **Completeness**: Did the answer cover the important parts?
- **Safety**: Did the answer avoid dangerous or disallowed help?
- **Style and tone**: Did the answer match the user and task?
- **Formatting**: Did the answer respect structure, length, language, or output constraints?

Do not merge these into one vague "quality" judgment. A response can sound polished and still fail factuality. A short response can beat a longer one if the longer answer invents details.

#### The Justification Formula That Works

A strong justification has four parts:

1. State the winner.
2. Name the decisive criterion.
3. Cite the concrete evidence.
4. Mention the weaker response's specific failure.

Example:

**Response B is better because it follows the user's requested table format and includes all three comparison points. Response A gives useful background, but it omits the pricing column and adds unsupported claims about availability.**

That is better than:

**B is better because it is more helpful.**

Platforms pay for the first version.

#### How to Handle Open-Book Guidelines

Open-book does not mean easy. Platforms often test edge cases buried in examples.

As you read, mark:

- Tie-breaker rules
- Safety exceptions
- When to choose "cannot determine"
- Whether minor grammar matters
- Whether missing citations affect the score
- Whether formatting errors outweigh factual accuracy

If a question feels ambiguous, the guideline probably contains a rule for that exact ambiguity.

#### Writing Samples

For writing-heavy platforms, your sample should show clean reasoning. Avoid trying to sound academic. Use direct sentences. Define the problem, solve it, and stop.

Before submitting:

- Remove filler.
- Check every factual claim.
- Use consistent terms.
- Avoid slang unless the prompt asks for it.
- Do not overstate certainty.

#### AI Interviews

Micro1, Mercor, Alignerr, and other platforms may use AI-led interviews. The systems often evaluate clarity, domain depth, and reasoning process.

Prepare short stories using this structure:

1. The task or problem
2. The constraint
3. The action you took
4. The result
5. What you would improve

For technical roles, practice explaining your thought process out loud. The platform may care as much about communication as the final answer.

#### Red Flags During Assessments

Pause and reread if you catch yourself doing any of these:

- Picking the longer answer without checking accuracy
- Ignoring a missed instruction because the answer sounds useful
- Letting one typo decide the whole rating
- Assuming a source exists because the model named it
- Writing "more detailed" as your main reason
- Treating every safety warning as equally severe

#### If You Fail

Do not immediately reapply with the same materials. Write down what the assessment tested, which parts felt hard, and what examples you remember. Then practice that skill.

Some platforms offer feedback. Micro1, for example, is noted for allowing rejected candidates to request constructive feedback. Use that feedback as a study plan, not as a verdict on whether you belong in the field.`
  },
  {
    id: 'res-3',
    title: 'Freelancing Best Practices: Taxes and Workspace',
    description: 'A practical operating system for freelance AI work: taxes, time tracking, platform risk, payments, and burnout.',
    category: 'bestPractices',
    readTime: '13 min read',
    date: '2026-05-20',
    content: `### Treat This Like Freelance Work

AI evaluation can feel informal because you work through dashboards, queues, and short tasks. The money still works like freelance income.

You need a system for taxes, time, records, payments, platform risk, and energy. Without one, you can earn money for a month and still have no idea whether the work made sense.

#### Track Gross Pay, Net Pay, and Active Time

Many platforms advertise hourly rates, but your real rate depends on unpaid time.

Track:

- Time spent applying
- Time spent training
- Time spent waiting for tasks
- Time spent reading guidelines
- Time spent fixing rejected work
- Paid task time
- Payment received

If a project pays $25/hr but you spend ten unpaid hours qualifying for three paid hours, your real rate for that week looks different. You need the full picture before deciding whether to keep going.

#### Build a Basic Spreadsheet

Use one row per platform or project.

Columns to include:

1. Platform
2. Email used
3. Application date
4. Status
5. Pay claim
6. Actual pay received
7. Payment method
8. ID verification status
9. Contract type
10. Notes on task availability
11. Support contact
12. Tax form or invoice status

This takes 10 minutes to set up and saves hours later.

#### Taxes

If you work as an independent contractor, the platform may not withhold taxes. Rules differ by country, so check your local obligations.

For US contractors, many freelancers set aside 25-30% of payouts until they understand their tax situation. That number is not tax advice, but it gives you a buffer. You may also need to track home office costs, software, hardware, internet, payment fees, and professional subscriptions.

Keep records from day one. Screenshots and payout emails are better than memory.

#### Payment Hygiene

Use stable payment accounts and keep them in good standing. Platforms may use PayPal, Stripe Connect, bank transfer, or platform-processed payouts.

Before you rely on a platform, confirm:

- Minimum payout threshold
- Payment schedule
- Currency
- Fees
- Tax forms
- Whether the name on your payment account must match your ID
- Whether your country is supported

Do not wait until payday to discover a payment mismatch.

#### Platform Risk

Empty queues are normal. Projects pause. Guidelines change. Accounts can lose access with little explanation. Pay rates can compress when more contributors enter the pool.

Use three layers:

1. **Primary platform**: Your best current source of paid work.
2. **Secondary platform**: A backup with active onboarding or occasional tasks.
3. **Pipeline platform**: A higher-ceiling option where you are still applying or qualifying.

This setup reduces panic when one queue dries up.

#### Workspace

You do not need a fancy office. You need a repeatable environment.

- One clean browser profile for platform work
- Password manager
- Quiet audio setup for interviews
- Stable internet
- Notes app for guidelines
- Spreadsheet for earnings
- Folder for contracts and tax documents
- Calendar reminders for retakes, renewals, and payment checks

If a platform uses proctoring or time tracking, consider a separate device or user profile when possible. Mercor-related research mentions Insightful time tracking for some roles. Treat tools like that as part of the contract, not an afterthought.

#### Burnout

Evaluation work drains attention. You read flawed model outputs, make small judgments, and justify them for hours. That creates a different kind of fatigue than meetings or coding.

Set stopping rules:

- Stop after a fixed error count.
- Stop when you reread the same prompt three times.
- Stop when your justifications get vague.
- Stop when you start guessing.

Bad ratings can cost you access. Rest protects your account.`
  },
  {
    id: 'res-4',
    title: 'Guidelines and Prompt Engineering 101',
    description: 'How to read rating guidelines, write useful test prompts, and produce feedback that platforms can trust.',
    category: 'guides',
    readTime: '12 min read',
    date: '2026-06-15',
    content: `### Guidelines Are the Job

New evaluators often think the job is "judge which answer is better." The real job is applying the customer's guideline to a messy case.

A guideline tells you what the platform values. Some projects reward concise instruction following. Some punish unsupported facts. Some care about tone. Some care about formatting more than style. Some ask you to ignore minor grammar unless it changes meaning.

Read the guideline like a contract.

#### Build a Guideline Map

For any new project, make a one-page map before you start paid tasks.

Include:

- Rating categories
- Tie-breaker rules
- Safety categories
- Examples of major errors
- Examples of minor errors
- When to mark "cannot determine"
- What evidence you need for factual claims
- Formatting requirements
- Required justification style

This map keeps you consistent when tasks start blending together.

#### Prompt Engineering for Evaluators

Prompt writing in evaluation is not about tricking a model. It is about creating a fair test.

A useful prompt has:

1. A clear user goal
2. Enough context to answer
3. A constraint that matters
4. A way to judge success

Weak prompt:

**Write about climate change.**

Better prompt:

**Write a 180-word explanation of how heat pumps reduce home emissions for a renter who cannot replace major appliances. Include two actions they can take this month.**

The second prompt gives the model a target, audience, length, and practical constraint.

#### Good Constraints

Good constraints reveal whether the model can follow instructions.

- Length: "Use 120-150 words."
- Structure: "Return a table with three columns."
- Audience: "Explain it to a first-year nursing student."
- Source limits: "Use only the information in the passage."
- Format: "Answer in JSON with keys named risk, evidence, and next_step."
- Tradeoff: "Give the cheapest option and the most reliable option."

Bad constraints feel artificial unless the project asks for stress tests. A prompt that bans a common letter might test constraint following, but it rarely reflects a real user need.

#### Multiturn Testing

Many models look good on one-turn prompts and fail when the user follows up.

A good multiturn test checks whether the model remembers:

- The user's earlier preference
- A previous number or constraint
- A changed instruction
- A correction
- A requested tone or format

Example sequence:

1. "Give me three vegetarian dinner ideas under 30 minutes."
2. "Replace the second one with something high-protein."
3. "Now make the final list gluten-free and keep the prep times."

The model must update without losing the original constraints.

#### Fact-Checking Workflow

Use primary sources when possible. For software, use official docs. For laws, use government or legal sources. For medicine, use clinical institutions or peer-reviewed sources. For company claims, use the company's page and note that it is official, not independently verified.

Your notes should capture:

- Claim checked
- Source used
- Whether the source supports the claim
- Any uncertainty
- Why the uncertainty matters

Do not cite a source you did not read.

#### Feedback That Helps Model Teams

Good feedback tells a model team what failed and how to reproduce it.

Weak feedback:

**The answer is confusing and inaccurate.**

Useful feedback:

**The answer fails the user's request for a beginner explanation. It introduces "vector databases" without defining them, then claims PostgreSQL cannot store embeddings, which is false because pgvector supports embedding storage.**

That feedback names the audience mismatch and the factual error. A model team can act on it.

#### Quality Check Before Submission

Before you submit a rating, ask:

- Did I rate against the rubric instead of preference?
- Did I check factual claims that affect the outcome?
- Did I explain the deciding factor?
- Did I mention only errors that matter?
- Would another evaluator understand my reasoning?

If the answer is no, revise before you submit.`
  },
  {
    id: 'res-5',
    title: 'Talent Collective Mission and Non-Alignment',
    description: 'Why Talent Collective exists, how neutrality protects members, and what the community is trying to become.',
    category: 'starting',
    readTime: '11 min read',
    date: '2026-07-08',
    content: `### Why Talent Collective Exists

Talent Collective was founded on 17 June 2026 to solve a fragmentation problem in AI freelancing.

AI evaluators, RLHF contributors, data annotators, prompt engineers, students, recruiters, and companies often work across several platforms at once. Useful questions about verification, pay, interviews, task availability, and whether a platform is worth applying to are scattered across Reddit, private messages, company Discords, Slack workspaces, and platform-specific communities.

Talent Collective exists as the shared space connecting those conversations.

#### The Mission

Talent Collective aims to become the most trusted independent community for AI freelancers worldwide.

That means helping members find information, opportunities, collaborators, and professional support without forcing them into one platform's private community.

#### Core Principle: Non-Alignment

Talent Collective does not officially represent any single hiring platform.

Companies, recruiters, and sponsors are welcome, but the community itself remains independent. This neutrality allows honest discussion about every platform without forcing members into a company-controlled narrative.

Non-alignment matters because most workers use more than one platform. A contributor might test for Outlier AI, wait on Mercor, apply to Micro1, and keep DataAnnotation open for steadier work. A company-specific community cannot serve that whole reality.

#### What Members Should Be Able to Ask

- How long did verification take?
- Did the platform pay on time?
- What did the interview test?
- What happens when the queue goes empty?
- Which roles fit beginners?
- Which roles need coding, STEM, law, medicine, or finance?
- Is this recruiter legitimate?
- What should I do after a rejection?

Those questions deserve direct answers, not marketing copy.

#### The Culture

- Friendly
- Helpful
- Respectful
- Welcoming
- Honest
- Community-driven

The intended atmosphere is experienced freelancers helping newer freelancers, not corporate customer support.

Members should answer each other's questions, correct outdated information, share what they can without violating NDAs, and separate personal experience from verified fact.

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

#### What the Website Should Do

The website should introduce the community, explain the mission, publish platform guides, help users discover resources, improve search visibility, and bring serious contributors into Discord.

Over time, it should become the primary knowledge base for AI freelancers.

That requires more than platform reviews. The site needs salary benchmarks, interview prep, scam safety, payment guides, verification notes, recruiter vetting standards, and practical resources members can use before they ask the same question in chat.

#### Current and Future Ecosystem

Talent Collective began as a Discord community and is evolving into a broader organization: website, resource library, platform guides, newsletter, media publication, company directory, freelancer directory, hiring initiatives, and social channels.

Current technical context includes Next.js, Vercel hosting, Vercel Analytics, and the domain talent-collective.org. Planned improvements include a newsletter, analytics, better search, stronger resources, and email infrastructure.

#### SEO and Public Voice

The long-term SEO goal is to become Google's best independent resource for topics around AI freelancing: AI evaluator, AI evaluation guide, freelance AI jobs, data annotation, RLHF, platform guides, payment guides, interview guides, and verification guides.

Talent Collective's social presence should not feel like a corporate account. It should become the public voice of AI freelancers: warm, helpful, professional, occasionally humorous, and human.

Useful public content includes career tips, platform explainers, interview experiences, salary discussions, community wins, news, and short educational videos.

#### Success Metrics

Important metrics include Discord members, daily active users, member retention, organic traffic, search rankings, returning visitors, guide readership, recruiters onboarded, successful hires, job placements, newsletter subscribers, Instagram growth, and website referrals.

#### The Long-Term Bet

Talent Collective should become the place an AI freelancer checks before applying, accepting a contract, trusting a recruiter, or giving up after a rejection.

The ambition is simple: someone entering AI evaluation should naturally think, "Join Talent Collective first."`
  },
  {
    id: 'res-6',
    title: 'AI Evaluation Platform Market Map',
    description: 'How the platform ecosystem breaks down by task type, difficulty, pay ceiling, and applicant fit.',
    category: 'guides',
    readTime: '13 min read',
    date: '2026-07-08',
    content: `### Market Overview

Paid AI training platforms are remote freelance marketplaces where people contribute human judgment to improve AI models.

Common work includes data annotation, model evaluation, prompt creation, output review, rubric-based scoring, content review, and specialist domain assessment.

The market is growing quickly because AI labs need human feedback for increasingly complex and specialized systems. Demand is especially strong for people with domain expertise in coding, STEM, medicine, law, finance, languages, and advanced writing.

#### Four Platform Types

1. **Premium expert networks**: Micro1, Mercor, Alignerr, Handshake AI, and Surge AI focus on higher-skill contributors, domain experts, and more selective screening.
2. **Large contributor platforms**: Outlier AI and Scale AI-related programs use large pools of contributors for RLHF, ranking, specialist tasks, and data operations.
3. **Accessible entry platforms**: DataAnnotation, Appen, Telus Digital, Mindrift/Toloka, and similar platforms are often easier starting points for beginners.
4. **Aggregators and marketplaces**: OpenTrain AI aggregates opportunities across many underlying platforms rather than acting as a single direct employer.

Do not judge a platform only by its top pay claim. A beginner-friendly platform with steady work may beat a premium platform where you pass onboarding and receive no tasks.

#### Core Task Types

- Writing and evaluating prompts
- Ranking model responses
- Reviewing output accuracy and helpfulness
- Applying detailed scoring rubrics
- Creating domain-specific examples
- Evaluating medical, legal, finance, STEM, coding, or language outputs
- Annotating text, images, audio, or video
- Search quality rating and web relevance evaluation

#### Platform Snapshot by Fit

- **Micro1**: Global expert network using Zara, an asynchronous AI interviewer, plus proctored assessments and certification.
- **Outlier AI**: Scale AI contributor platform with domain roles, general reasoning screening, and flexible no-minimum-hours work.
- **Alignerr**: Labelbox-powered platform with AI training, search quality, coding, accounting, video, and language roles.
- **Mercor**: AI talent platform with a reusable AI interview, domain expert matching, and weekly Stripe Connect payments.
- **DataAnnotation**: Conversation rating and annotation work, with weekly PayPal payments.
- **Handshake AI**: Expert work in prompt engineering and domain-specific reasoning. Research on it is limited.
- **OpenTrain AI**: Aggregator for jobs across 20+ platforms, working as a discovery layer rather than a direct employer.

#### How to Choose Your First Targets

Start with your strongest evidence.

If you have strong writing but no technical background, apply to accessible annotation, conversation rating, search quality, and general AI training roles.

If you code, prioritize code evaluator roles. Keep examples ready: languages used, projects shipped, tests written, bugs fixed, and any experience reviewing code.

If you have medical, legal, finance, STEM, or graduate-level domain expertise, do not hide it in a generic resume.

If you are multilingual, track platforms that support your language. Mindrift/Toloka and language-specific roles can matter more than US-centric generalist platforms.

#### What Makes Platforms Feel Different

- **Screening style**: writing sample, reasoning test, AI interview, coding task, ID check, or proctored assessment
- **Work assignment**: open task queue, project matching, recruiter matching, or client placement
- **Pay model**: hourly, per task, retainer, fixed project, or platform-processed billing
- **Stability**: steady low-ceiling tasks versus rare high-ceiling expert projects
- **Support model**: human support, algorithmic management, community channels, or little recourse

#### Questions to Ask Before Applying

1. Does this platform fit my background?
2. Does the payment method work in my country?
3. Does the platform require ID, camera, screen sharing, or time tracking?
4. Does the platform publish realistic role requirements?
5. Do contributors report empty queues?
6. Can I use this as primary work, backup work, or a long-term pipeline?

#### Search Topics Talent Collective Tracks

- AI evaluator jobs remote
- RLHF pay rates
- Data annotation work
- Prompt engineer freelance jobs
- Platform comparisons
- AI interview preparation
- Empty queues and task shortages
- Account bans, deactivations, and appeals
- Realistic AI evaluation income

#### Bottom Line

The right platform depends on your background and risk tolerance. Beginners should optimize for access and feedback. Specialists should optimize for proof of expertise and rate negotiation. Everyone should diversify.`
  },
  {
    id: 'res-7',
    title: 'AI Evaluator Pay, Stability, and Platform Diversification',
    description: 'Real hourly rates, empty-queue planning, and how to build a safer platform mix.',
    category: 'bestPractices',
    readTime: '12 min read',
    date: '2026-07-08',
    content: `### What Pay Depends On

AI evaluation pay varies by task complexity, contributor expertise, location, platform demand, and project availability.

#### Hourly Rate vs Real Rate

Advertised hourly rate does not equal take-home efficiency.

Your real rate includes unpaid time:

- Applying
- Taking tests
- Reading guidelines
- Waiting for tasks
- Retaking qualifications
- Handling payment issues
- Reworking rejected tasks

If you earn $90 for three paid hours but spent six unpaid hours qualifying that week, you did not make $30/hr for the full effort. You made $10/hr for that week's platform time.

That does not mean the platform is bad. It means you need to track the ramp-up cost.

#### Why Empty Queues Happen

An empty queue does not always mean you did something wrong.

Projects fill. Client budgets pause. Quality thresholds change. The platform may have more qualified contributors than active tasks. A language queue may dry up while a coding queue stays full.

Still, you should document patterns:

- Which days have tasks?
- Which project types vanish first?
- Did your quality score change?
- Did other members report the same issue?
- Did the platform announce a pause?

Pattern tracking helps you tell the difference between a personal account issue and a market slowdown.

#### Diversification Advice

Do not rely on one marketplace.

Projects open, fill, pause, restart, and disappear without much notice. Empty queues and task shortages are normal in this industry. Combining 2-3 platforms can smooth earnings and reduce the risk of a sudden income gap.

Build a portfolio like this:

1. **Stable base**: lower-ceiling platform with more consistent tasks.
2. **Specialist upside**: harder platform that matches your strongest skill.
3. **Pipeline option**: platform where you are still interviewing, qualifying, or waiting for matching.

Rotate effort based on actual pay received, not brand reputation.

#### Skills That Unlock Higher Pay

- Coding
- STEM knowledge
- Advanced language ability
- Medicine, law, or finance expertise
- Strong written reasoning
- Rubric-based scoring experience
- Consistent quality history
- Ability to explain decisions clearly

#### Weekly Review Template

At the end of each week, write five numbers:

1. Gross pay received
2. Paid hours
3. Unpaid platform hours
4. Highest effective platform rate
5. Lowest effective platform rate

Then write one sentence:

**Next week I will spend more time on ___ because ___.**

That sentence forces a decision. Freelancers lose money when they keep feeding time into a platform out of habit.

#### Stability Warning

Most AI evaluation platforms work best as supplemental income unless you have high-demand specialization and multiple active accounts. Treat pay ranges as approximate and time-sensitive, not guaranteed income.

If you need stable income, keep a separate primary income source until the numbers prove this work can carry more weight.`
  },
  {
    id: 'res-8',
    title: 'Additional AI Work Platforms to Watch',
    description: 'A research-backed watchlist of secondary AI work platforms that need deeper review before full guide pages.',
    category: 'guides',
    readTime: '10 min read',
    date: '2026-07-08',
    content: `### Why These Platforms Matter

The main platform guides cover Micro1, Outlier AI, Alignerr, Mercor, DataAnnotation, Handshake AI, and OpenTrain AI. The research dossier also identified several additional platforms that are worth monitoring.

These are not full reviews yet. Treat this as a watchlist for future dedicated research.

#### How to Use a Watchlist

A watchlist helps you spot opportunities without pretending the research is complete.

Before applying, verify:

- Current website and application URL
- Pay range
- Country eligibility
- Payment method
- Whether the role is freelance or employee
- Whether ID, camera, screen sharing, or time tracking is required
- Recent community sentiment

Do not rely on old screenshots or recycled job posts.

#### Appen

Appen is one of the oldest and largest AI data companies globally. It offers AI evaluation projects under various codenames, including search rating work. Prompt-specific work may appear under LLM quality or conversational AI projects.

#### Telus Digital

Telus Digital, formerly associated with Telus International and Lionbridge, runs AI Trainer and Internet Analyst programs, including search quality rating. It is often grouped with beginner-accessible platforms.

#### Mindrift / Toloka

Mindrift by Toloka focuses on human evaluation of AI outputs, requiring precision and analytical thinking. Toloka operates globally across 100+ languages, making it especially relevant for non-English speakers.

#### Surge AI

Surge AI offers advanced AI training tasks. It hires experts in fields such as medicine, law, journalism, venture capital, and finance. The application process is less transparent in the available research.

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

Communities worth monitoring for ongoing sentiment include r/beermoney, r/WorkOnline, r/outlierAI, r/mturk, and r/AIJobs. Compensation data should be treated as time-sensitive and reverified before publication.

#### What Talent Collective Should Research Next

For each watchlist platform, a full guide needs:

1. Current official role pages
2. Payment method and timing
3. Country eligibility
4. Application steps
5. Assessment details
6. Community complaints
7. Realistic pay after unpaid time
8. Scam or impersonation risks

Until those questions have answers, use this article as a map, not a recommendation.`
  },
  {
    id: 'res-9',
    title: 'Trust, Vetting, and Scam Safety for AI Freelancers',
    description: 'How to vet recruiters, job posts, platform claims, and community opportunities without killing useful discussion.',
    category: 'bestPractices',
    readTime: '11 min read',
    date: '2026-07-08',
    content: `### Trust Comes First

Talent Collective earns trust through transparency, independent moderation, honest discussions, community expertise, public feedback, quality resources, and careful vetting of recruiters.

The community is not designed to maximize referral spam or push one platform. It exists to help AI freelancers make better decisions across the whole ecosystem.

#### The Scam Pattern

Scams in AI freelancing usually borrow legitimacy from real platform names. A fake recruiter claims to represent a known company, pushes you to a private chat, asks for an upfront fee, sends a strange file, or promises high pay without a clear assessment.

Slow down when a job post creates urgency.

Common warning signs:

- Upfront payment required
- No company domain email
- Vague job description
- Pay far above market with no specialist requirement
- Telegram-only or WhatsApp-only recruiting
- Pressure to share ID before platform verification
- Requests to bypass official application pages
- Promises of guaranteed task access

#### Vetting Job Posts

Basic vetting questions:

1. Is the recruiter or company identifiable?
2. Does the opportunity clearly explain pay, task type, eligibility, and application steps?
3. Are payment methods and contract terms plausible?
4. Does the post avoid requiring suspicious upfront fees?
5. Does the role respect platform NDAs and worker safety?

Add two more checks:

6. Does the recruiter use a domain that matches the company?
7. Can members verify the opportunity through an official page or known platform channel?

If the answer is no, moderators should hold the post for review.

#### Community Safety Standards

Talent Collective has zero tolerance for harassment, fraud, spam, scams, fake recruiters, and MLM-style schemes.

Members should feel comfortable asking beginner questions, comparing companies, discussing pay, and seeking career advice without being pushed into one platform's marketing funnel.

#### How to Discuss Platforms Without Spreading Bad Information

Use labels when you share claims:

- **Official**: The company says this.
- **Verified**: A named independent source supports this.
- **Community**: Workers report this, but experiences vary.
- **Unknown**: We do not have enough evidence.

This keeps the community honest. One person's queue problem may not describe the whole platform. One company's pay page may not describe what contributors actually receive.

#### Revenue Without Bias

Future revenue could include sponsorships, donations, recruiter partnerships, a premium job board, educational courses, events, consulting, or newsletter advertising.

The rule is that revenue should never compromise community neutrality. If a sponsor or recruiter participates, the community still needs room for honest worker discussion.

#### Member Checklist Before Applying

Before you apply through a link someone posted, check:

1. The domain
2. The recruiter's identity
3. The payment method
4. The assessment process
5. The contract type
6. Whether the platform asks for fees
7. Whether other members have recent experience

Take screenshots of pay claims and role descriptions. If the terms change later, you need records.

#### Public Voice

Talent Collective's social presence should feel warm, helpful, professional, occasionally humorous, and human. The public voice should reflect AI freelancers themselves, not a corporate brand trying to control the conversation.

Useful public content includes career tips, platform explainers, interview experiences, salary discussions, community wins, industry news, and short educational videos.

#### The Moderation Standard

Good moderation does not mean removing every negative platform comment. It means asking for evidence, preventing harassment, stopping scams, and keeping discussion useful.

Members should be able to say, "My account was deactivated and I cannot get support." They should not be able to post private data, encourage NDA violations, impersonate recruiters, or spam referral links.

That balance is the community's advantage.`
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
