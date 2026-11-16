import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Talent Collective is an independent online community for AI evaluators, data annotators, RLHF contributors and remote freelancers.',
  alternates: {
    canonical: 'https://talent-collective.org/about',
  },
};

export default function AboutPage() {
  return (
    <InfoPage title="About Talent Collective">
      <p>
        Talent Collective is an independent online community for AI evaluators, data annotators, RLHF
        contributors and remote freelancers. We started in 2026 and have 1,800+ members.
      </p>
      <blockquote>
        <p>&ldquo;The independent home for AI evaluators and remote freelancers.&rdquo;</p>
      </blockquote>
      <p>
        Contract work in AI training can change without warning. Contract workers are often hired, paused or
        dropped with little or no explanation. Many are left asking what happened and what to do next.
      </p>
      <p>
        Talent Collective gives them two things: clear answers, and a group of people who understand the work.
      </p>
      <p>Our mission is to be the one independent place for everything about AI training and freelance work.</p>

      <h2>What members do here</h2>
      <p>Members use our Discord community to:</p>
      <ul>
        <li>ask questions about contracts, pay, pauses and project endings</li>
        <li>share what they have learned, in their own words</li>
        <li>read our guides, which show where each claim comes from</li>
        <li>find support from other freelancers</li>
      </ul>

      <h2>What we are not</h2>
      <ul>
        <li>We are not a recruiter. We do not hire for any AI training platform, and we do not offer work or pay.</li>
        <li>We are not a platform. We do not give any platform a verdict such as good or bad.</li>
        <li>We do not give legal or financial advice.</li>
        <li>We do not take a side. We are community-first and non-aligned.</li>
        <li>
          We have no sponsors at the moment. If that changes, we label it. See our{' '}
          <Link href="/editorial-policy">Editorial and disclosure policy</Link>.
        </li>
      </ul>

      <h2>Who runs it</h2>
      <p>Talent Collective is run by [OWNER OR COMPANY NAME]. We are not yet a registered company.</p>
    </InfoPage>
  );
}
