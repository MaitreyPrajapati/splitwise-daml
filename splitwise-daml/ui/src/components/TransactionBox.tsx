import React from "react";
import { Form, Button } from "semantic-ui-react";
import { Party } from "@daml/types";
import { Group, User } from "@daml.js/splitwise-daml";
import { useParty, useLedger } from "@daml/react";

type Props = {
  followers: Party[];
  allGroups: Group.Group[];
};

/**
 * React component to make transaction with other user
 */
const MessageEdit: React.FC<Props> = ({ followers, allGroups }) => {
  const lender = useParty();
  const [borrower, setBorrower] = React.useState<string | undefined>();
  const [amount, setAmount] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isGroup, setIsGroup] = React.useState(false);
  const ledger = useLedger();

  let transactionTargetOptions = followers.map((follower) => ({
    key: follower,
    text: follower,
    value: follower,
  }));

  const groupNames = allGroups.map((group) => group.groupName);

  let allGroupsTragetOptions = allGroups.map((group) => ({
    key: group.groupName,
    text: group.groupName,
    value: group.groupName,
    isgroup: true,
  }));

  transactionTargetOptions = transactionTargetOptions.concat(
    allGroupsTragetOptions
  );

  const submitMessage = async (event: React.FormEvent) => {
    try {
      if (isGroup) {
        return submitGroupTransaction(event);
      }
      event.preventDefault();
      console.log("Here", borrower);
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
      setIsGroup(false);
    }
  };

  const submitGroupTransaction = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      event.preventDefault();
      console.log("Group", borrower);
      if (borrower === undefined) {
        return;
      }
      setIsSubmitting(true);
      await ledger.exerciseByKey(Group.Group.MakeGroupTransaction, lender, {
        currGroupName: borrower,
        totalAmount: amount,
      });
      setAmount("");
    } catch (error) {
      alert(`Error sending message:\n${JSON.stringify(error)}`);
    } finally {
      setIsSubmitting(false);
      setIsGroup(false);
      setBorrower("");
    }
  };

  const setAmountForTrnsaction = (event: any) => {
    setAmount(event.currentTarget.value);
  };

  return (
    <Form onSubmit={submitMessage}>
      <Form.Dropdown
        selection
        className="test-select-message-receiver"
        placeholder="Select your friend"
        options={transactionTargetOptions}
        value={borrower}
        onChange={(event) => {
          setBorrower(event.currentTarget.textContent ?? undefined);
          setIsGroup(
            groupNames.includes(event.currentTarget.textContent ?? "")
          );
          console.log(event.currentTarget);
        }}
      />
      <Form.Input
        className="test-select-message-content"
        placeholder="Enter an amount"
        value={amount}
        onChange={(event) => setAmountForTrnsaction(event)}
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
