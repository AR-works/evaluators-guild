import type { Metadata } from 'next';
import InfoPage from '@/components/InfoPage';
import { CONTACT_EMAIL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Editorial and Disclosure Policy',
  description:
    'How Talent Collective researches, labels and corrects its guides, posts and Discord bot answers, and how sponsorship and referral links are disclosed.',
  alternates: {
    canonical: 'https://talent-collective.org/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage title="Editorial and disclosure policy">
      <p>
        This page explains how we research, label and correct what we publish. It covers our guides, our posts and
        the answers our Discord bot gives.
      </p>

      <h2>How guides are researched</h2>
      <p>
        We start with the platform&apos;s own pages, where they exist, and note the date we checked them. We add
        reporting from independent outlets where it helps. We record where each claim comes from. We do not give
        any platform a verdict such as good or bad.
      </p>

      <h2>How we label sources</h2>
      <p>Every claim gets one of four labels, the same ones our guides use:</p>
      <ul>
        <li>
          <strong>Official:</strong> stated by the company itself. We have not checked it independently.
        </li>
        <li>
          <strong>Verified:</strong> confirmed by an independent, named source, such as a news outlet.
        </li>
        <li>
          <strong>Community:</strong> from worker reviews, forums or what members have told us. We have not
          checked it.
        </li>
        <li>
          <strong>Unknown:</strong> we could not find or confirm it.
        </li>
      </ul>

      <h2>Pay figures</h2>
      <p>
        Pay figures are approximate. We show one only with a source and the date we checked it. Pay can change
        quickly, so check the source before you rely on a figure.
      </p>

      <h2>Lawsuits and disputes</h2>
      <p>
        We describe a lawsuit as an allegation unless a court has ruled. We say who made the claim and who reported
        it.
      </p>

      <h2>Sponsors and partners</h2>
      <p>
        We label sponsored and partner content clearly, in the post or page itself. Sponsors and partners have no
        say over our guides, posts or Discord bot answers. If a guide criticises a sponsor, the criticism stays. We
        have no sponsors at the moment. In future we may accept sponsorship or referral income, and we will label
        it when we do.
      </p>

      <h2>Referral links</h2>
      <p>
        If we earn money when a reader signs up through a link, we label that link as a referral link and say that
        we earn from it.
      </p>

      <h2>Member stories</h2>
      <p>
        We share a member&apos;s story only with their written permission, and only the details they approve. We
        never share Discord messages, usernames or screenshots without consent. We never publish confidential
        project details, including project names a member received under an NDA.
      </p>

      <h2>Our Discord bot</h2>
      <p>
        The bot answers some questions with AI. Its answers are labelled as AI summaries and link to their sources.
        AI answers can be wrong, and staff do not check each one before it is posted. The bot&apos;s scam warnings
        and referral replies use fixed wording, not AI.
      </p>

      <h2>Corrections</h2>
      <p>
        If you find a mistake, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the page, the claim and a source. We check it against the
        source. If we were wrong, we fix the page and add a note with the date of the change.
      </p>
    </InfoPage>
  );
}
