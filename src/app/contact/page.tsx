import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';
import { CONTACT_EMAIL } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'How to contact Talent Collective with questions, press enquiries, partnership requests, scam reports and corrections.',
  alternates: {
    canonical: 'https://talent-collective.org/contact',
  },
};

export default function ContactPage() {
  return (
    <InfoPage title="Contact">
      <p>
        Send all messages to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Put the topic in the subject line so we can sort it quickly.
      </p>
      <ul>
        <li>
          <strong>General questions:</strong> use the subject &ldquo;General question&rdquo;.
        </li>
        <li>
          <strong>Press:</strong> use the subject &ldquo;Press&rdquo;.
        </li>
        <li>
          <strong>Partnerships:</strong> use the subject &ldquo;Partnership&rdquo;. We label all sponsored and
          partner content. No partner gets a say over our guides, posts or bot answers.
        </li>
        <li>
          <strong>Reporting a scam or a problem:</strong> use the subject &ldquo;Report&rdquo;. If someone asks you
          to pay them, or to share bank, ID or login details, do not send them anything. Tell us instead. Remove
          personal details from any screenshot first.
        </li>
        <li>
          <strong>Corrections:</strong> see the{' '}
          <Link href="/editorial-policy">Editorial and disclosure policy</Link> for how to ask us to fix a mistake.
        </li>
      </ul>
    </InfoPage>
  );
}
