import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Party } from "@daml/types";
import { User } from "@daml.js/splitwise-daml";
import { useParty, useLedger } from "@daml/react";

type Props = {
  followers: Party[];
};

/**
 * React component to make transaction with other user
 */
const MessageEdit: React.FC<Props> = ({ followers }) => {
  const lender = useParty();
  const [borrower, setBorrower] = React.useState<string | undefined>();
  const [amount, setAmount] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const ledger = useLedger();

  const submitMessage = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      if (borrower === undefined) {
        return;
      }
      setIsSubmitting(true);
      await ledger.exerciseByKey(User.User.MakeTransaction, borrower, {
        lender,
        amount,
      });
      setAmount("");
    } catch (error) {
      alert(`Error sending message:\n${JSON.stringify(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={submitMessage}>
      <Form.Dropdown
        selection
        className="test-select-message-receiver"
        placeholder="Select your friend"
        options={followers.map((follower) => ({
          key: follower,
          text: follower,
          value: follower,
        }))}
        value={borrower}
        onChange={(event) =>
          setBorrower(event.currentTarget.textContent ?? undefined)
        }
      />
      <Form.Input
        className="test-select-message-content"
        placeholder="Enter an amount"
        value={amount}
        onChange={(event) => setAmount(event.currentTarget.value)}
      />
      <Button
        fluid
        className="test-select-message-send-button"
        type="submit"
        disabled={isSubmitting || borrower === undefined || amount === ""}
        loading={isSubmitting}
        content="Create Transaction"
      />
    </Form>
  );
};

export default MessageEdit;
