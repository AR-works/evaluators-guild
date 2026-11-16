import type { Metadata } from 'next';
import Link from 'next/link';
import InfoPage from '@/components/InfoPage';

// Draft: kept out of search engines and the sitemap until a lawyer has reviewed it.
export const metadata: Metadata = {
  title: 'Terms of Use (Draft)',
  description: 'Draft terms of use for the Talent Collective website and Discord community.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <InfoPage title="Terms of use (draft)" notice="Draft. Have a lawyer review this before publishing.">
      <p>Effective date: [EFFECTIVE DATE]</p>
      <ol>
        <li>
          <strong>General information.</strong> What you find on this website and in our Discord community is
          general information. It is not professional, legal or financial advice.
        </li>
        <li>
          <strong>No guarantee of work or pay.</strong> Talent Collective does not hire people, place people or offer
          work. We make no guarantee of any work, contract, pay or outcome.
        </li>
        <li>
          <strong>Your decisions.</strong> You are responsible for your own decisions. Before you sign up for, accept
          or leave any work, read the platform&apos;s own terms and follow them. Follow any NDA you have signed.
        </li>
        <li>
          <strong>Confidential information.</strong> Do not share confidential project details in our community,
          including anything covered by an NDA.
        </li>
        <li>
          <strong>Community rules.</strong> The rules of our Discord server apply to everyone. We may remove posts or
          members who break them.
        </li>
        <li>
          <strong>Content may change.</strong> We may change, add or remove content at any time. We try to keep
          information up to date, but it may be out of date.
        </li>
        <li>
          <strong>Links.</strong> Some links go to other sites. We do not control those sites. We label referral
          links as described in our <Link href="/editorial-policy">Editorial and disclosure policy</Link>.
        </li>
        <li>
          <strong>Age.</strong> You must be at least [MINIMUM AGE] to use our Discord community.
        </li>
        <li>
          <strong>Who we are.</strong> Talent Collective is run by [OWNER OR COMPANY NAME], based in [COUNTRY].
        </li>
        <li>
          <strong>Governing law.</strong> These terms are governed by the law of [GOVERNING LAW].
        </li>
        <li>
          <strong>Contact.</strong> Write to [CONTACT EMAIL] with any question about these terms.
        </li>
      </ol>
    </InfoPage>
  );
}
