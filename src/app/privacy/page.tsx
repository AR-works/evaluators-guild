import type { Metadata } from 'next';
import InfoPage from '@/components/InfoPage';

// Draft: kept out of search engines and the sitemap until a lawyer has reviewed it.
export const metadata: Metadata = {
  title: 'Privacy Policy (Draft)',
  description: 'Draft privacy policy for the Talent Collective website and Discord community.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy policy (draft)" notice="Draft. Have a lawyer review this before publishing.">
      <p>Effective date: [EFFECTIVE DATE]</p>
      <p>
        This policy explains what information we collect and how we use it. It covers this website and our Discord
        community. Talent Collective is run by [OWNER OR COMPANY NAME], based in [COUNTRY]. Contact us at [CONTACT
        EMAIL].
      </p>

      <h2>Our website</h2>
      <p>Analytics and cookies: [WEBSITE ANALYTICS AND COOKIES: say what the site uses, or say it uses none]</p>
      <p>
        If you email us, we receive your email address and what you write. We use it only to reply to you and to
        handle your request.
      </p>

      <h2>Our Discord community</h2>
      <p>
        Messages you post in our Discord server can be seen by other members of the channels you post in, and by
        staff. Discord, which hosts our server, has its own privacy policy. Please read it too.
      </p>

      <h2>What our bot does</h2>
      <p>Our Discord bot does four things. It does not send direct messages.</p>
      <ol>
        <li>
          <strong>Daily summary.</strong> The bot reads only channels that staff have approved. It makes a daily
          summary made of counts only: how much activity there is, how often platforms are mentioned, and common
          question words. Names and message text are not stored in or shown by this summary. We keep the daily
          counts to track growth over time.
        </li>
        <li>
          <strong>Replies.</strong> The bot replies only when a member tags it or replies to one of its messages, and
          only in one forum channel. A reply can say what share of members hold a server role, such as a platform
          role. It never says who holds a role, and it gives no percentage for small groups.
        </li>
        <li>
          <strong>Sending messages to an AI provider.</strong> When a message tags the bot, the message is sent to
          DeepSeek, an outside AI provider. DeepSeek is used to work out what is being asked and to write some
          answers. Before sending, we remove Discord tags, email addresses and long numbers. Usernames and chat
          history are not sent. DeepSeek handles the message under its own privacy terms.
        </li>
        <li>
          <strong>Staff-only log.</strong> The bot keeps a log on the computer that runs it. Only staff can see it.
          For each tagged message, the log records the time, a link to the message, up to the first 200 characters
          of the question, and how the bot handled it. We keep this log for [HOW LONG LOGS ARE KEPT].
        </li>
      </ol>
      <p>
        AI-written answers can be wrong. They are labelled as AI summaries and link to their sources. Check the
        sources before you act on an answer.
      </p>
      <p>
        Please do not post passwords, bank details, ID numbers or other sensitive information in Discord or to the
        bot.
      </p>

      <h2>What we do not do</h2>
      <p>We do not sell personal information.</p>

      <h2>Your choices</h2>
      <p>
        You can ask us what information we hold about you, and ask us to correct or delete it. Write to [CONTACT
        EMAIL]. We will tell you what we can and cannot remove. A message you posted on Discord may still be visible
        there unless you or a staff member delete it.
      </p>

      <h2>Children</h2>
      <p>You must be at least [MINIMUM AGE] to join our Discord community.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy. When we do, we will change the effective date at the top.</p>
    </InfoPage>
  );
}
