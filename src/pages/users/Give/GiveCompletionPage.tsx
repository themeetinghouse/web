import { Link as ClickableText } from 'components/Link/Link';
import './GiveCompletionPage.scss';
type Props = {
  giveAmount: string;
  giveStatus: string;
  giveFrequency: string;
  giveFund: string;
  giveType: string;
};
export default function GiveCompletionPage(props: Props) {
  const { giveStatus, giveAmount, giveFrequency, giveFund, giveType } = props;
  // We can customize success message based on props
  console.log(
    `giveStatus: ${giveStatus}\n giveAmount: ${giveAmount}\n giveFrequency: ${giveFrequency}\ngiveFund: ${giveFund}\n giveType: ${giveType}`
  );
  return giveStatus === 'complete' ? (
    <>
      <h1 className="CompletionHeader">Thank You</h1>
      <p>Thank you for your gift of ${giveAmount}.</p>
      <p className="CompletionMessage">
        A few clicks later and you are now part of this great mission of growing
        loving communities of Jesus followers who live and share his irreligious
        message.
      </p>
      <ClickableText className="ManageRecurringButton" to={'/account/give'}>
        Manage my recurring giving
      </ClickableText>
    </>
  ) : (
    <>
      <h1 className="CompletionHeader">Something went wrong</h1>
      <p className="CompletionMessage">
        Please contact support at donate@themeetinghouse.com
      </p>

      <ClickableText className="ManageRecurringButton" to={'/account/give'}>
        Go back
      </ClickableText>
    </>
  );
}
