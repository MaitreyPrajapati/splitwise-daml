import React from "react";
import { Button, Form, Icon, List, ListItem } from "semantic-ui-react";
import { User, Transaction } from "@daml.js/splitwise-daml";
import { ContractId, Party } from "@daml/types";
import {
  useStreamQuery,
  useStreamFetchByKeys,
  useParty,
  useLedger,
} from "@daml/react";
import Select from "react-select";

type Props = {
  followers: User.User[];
};

const GroupBox: React.FC<Props> = ({ followers }) => {
  const lender = useParty();
  const [groupName, setGroupName] = React.useState("");
  const [isSelected, setIsSelected] = React.useState([]);

  const ledger = useLedger();

  const options = followers.map((follower) => ({
    value: follower.username,
    label: follower.username,
    key: follower.username,
  }));

  const addToSelect = async (event: any) => {
    const newGroupMembers = event.map((follower: any) => follower.key);
    setIsSelected((prev) => newGroupMembers);
  };

  const submitMessage = () => {
    console.log(isSelected);
  };

  return (
    <Form onSubmit={submitMessage}>
      <Select
        isMulti
        options={options}
        onChange={(event) => {
          addToSelect(event);
        }}
      ></Select>
      <Form.Input
        className="test-select-message-content"
        placeholder="Group name"
        onChange={(event: any) => {
          console.log(event);
          setGroupName(event.currentTarget.value);
        }}
      />
      <Button
        fluid
        className="test-select-message-send-button"
        type="submit"
        disabled={groupName === "" || isSelected === []}
        content="Create Transaction"
      />
    </Form>
  );
};

export default GroupBox;
