import React from "react";
import { Button, Form } from "semantic-ui-react";
import { User, Group } from "@daml.js/splitwise-daml";
import { useParty, useLedger } from "@daml/react";
import Select from "react-select";

type Props = {
  followers: User.User[];
};

const GroupBox: React.FC<Props> = ({ followers }) => {
  const lender = useParty();
  const [groupName, setGroupName] = React.useState("");
  const [isSelected, setIsSelected] = React.useState([]);

  const ledger = useLedger();

  // List for all the connections
  const options = followers.map((follower) => ({
    value: follower.username,
    label: follower.username,
    key: follower.username,
  }));

  const addToSelect = async (event: any) => {
    const newGroupMembers = event.map((follower: any) => follower.value);
    setIsSelected((prev) => newGroupMembers);
  };

  // Creating a group if a similar group doesn't already exist, key for the contract is everyone in the group
  const submitMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await ledger.create(Group.Group, {
        lender,
        groupName: groupName,
        involvedParties: isSelected,
      });
    } catch (error) {
      console.log("error", error);
    } finally {
      setGroupName("");
      setIsSelected([]);
    }
  };

  return (
    <Form onSubmit={(event) => submitMessage(event)}>
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
        value={groupName}
        onChange={(event: any) => {
          setGroupName(event.currentTarget.value);
        }}
      />
      <Button
        fluid
        className="test-select-message-send-button"
        type="submit"
        disabled={
          groupName === "" || isSelected === [] || isSelected.length < 2
        }
        content="Create Transaction"
      />
    </Form>
  );
};

export default GroupBox;
