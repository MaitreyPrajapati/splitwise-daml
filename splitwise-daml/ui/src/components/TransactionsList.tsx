import React from "react";
import { List, ListItem } from "semantic-ui-react";
import { User } from "@daml.js/splitwise-daml";
import { useStreamQuery, useParty } from "@daml/react";

/**
 * React component displaying the list of messages for the current user.
 */
const TransactionList: React.FC = () => {
  const allTransactions = useStreamQuery(User.Transaction);
  const currUser = useParty();

  return (
    <List relaxed>
      {allTransactions.contracts.map((transaction) => {
        const { lender, borrower, amount } = transaction.payload;
        return (
          <ListItem
            className="test-select-message-item"
            key={transaction.contractId}
          >
            <strong color={currUser == lender ? "green" : "red"}>
              {lender} &rarr; {borrower}:
            </strong>{" "}
            {amount}
          </ListItem>
        );
      })}
    </List>
  );
};

export default TransactionList;
