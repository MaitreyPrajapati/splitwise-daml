import React from "react";
import { List, ListItem } from "semantic-ui-react";
import { User } from "@daml.js/splitwise-daml";
import { Transaction } from "@daml.js/splitwise-daml";
import { useStreamQuery, useStreamFetchByKeys, useParty } from "@daml/react";

/**
 * React component displaying the list of messages for the current user.
 */

const TransactionList: React.FC = () => {
  const allTransactions = useStreamQuery(Transaction.Transaction);
  const username = useParty();
  const myUserResult = useStreamFetchByKeys(User.User, () => [username], [
    username,
  ]);
  const myUser = myUserResult.contracts[0]?.payload;
  let netValue = 0;

  const debtStatus = (debt: Number) => {
    return debt < 0 ? "red" : "green";
  };

  return (
    <List relaxed>
      {allTransactions.contracts.map((transaction) => {
        const { lender, borrower, amount } = transaction.payload;
        netValue +=
          myUser && lender === myUser.username
            ? parseFloat(amount)
            : -parseFloat(amount);
        return (
          <ListItem
            className="test-select-message-item"
            key={transaction.contractId}
            style={{
              color: myUser && myUser.username === lender ? "green" : "red",
            }}
          >
            <strong>
              {lender} &rarr; {borrower}:
            </strong>{" "}
            {amount}
          </ListItem>
        );
      })}
      <h3 style={{ color: debtStatus(netValue) }}>
        You {netValue <= 0 ? "owe" : "are owed"} ${" "}
        {netValue <= 0 ? -netValue : netValue}.
      </h3>
    </List>
  );
};

export default TransactionList;
