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

export const initialSuccessStories: SuccessStory[] = [
  {
    id: 'story-1',
    author: 'Elena Rostova',
    role: 'AI Quality Evaluator at Outlier',
    content: 'I found my very first high-paying AI evaluation opportunity through the job board channel in the Guild. The members helped me understand the onboarding requirements and navigate the difficult tier-qualification exam. Now, I am averaging $35/hour and working fully remote from Montenegro!',
    date: '2026-05-12',
    tag: 'Job Referral',
    isInitial: true
  },
  {
    id: 'story-2',
    author: 'Marcus Chen',
    role: 'Language Specialist at Alignerr',
    content: 'The resume review and preparation guides here are top-tier. I received invaluable peer feedback on my application materials, which led to a successful onboarding. Having an active community of professionals to check in with keeps me motivated in an otherwise isolated freelancing environment.',
    date: '2026-06-03',
    tag: 'Interview Prep',
    isInitial: true
  },
  {
    id: 'story-3',
    author: 'Sarah Jenkins',
    role: 'Senior Prompt Analyst (Freelance)',
    content: 'Evaluating AI responses can be highly subjective. The deep-dive guideline discussions in the Guild have helped me align with platform expectations and avoid quality audits. It is like having a water cooler and HR department rolled into one global Slack/Discord server.',
    date: '2026-06-18',
    tag: 'Mentorship',
    isInitial: true
  }
];

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
  }
];

export const mockMetrics = {
  activeUsersToday: 342,
  newsletterSubscribers: 184,
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
