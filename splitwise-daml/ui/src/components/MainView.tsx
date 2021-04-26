// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  Divider,
} from "semantic-ui-react";
import { Party } from "@daml/types";
import { User } from "@daml.js/splitwise-daml";
import {
  useParty,
  useLedger,
  useStreamFetchByKeys,
  useStreamQueries,
} from "@daml/react";
import UserList from "./UserList";
import PartyListEdit from "./PartyListEdit";
import TransactionList from "./TransactionsList";
import TransactionBox from "./TransactionBox";
import GroupBox from "./GroupBox";

// USERS_BEGIN
const MainView: React.FC = () => {
  const username = useParty();
  const myUserResult = useStreamFetchByKeys(User.User, () => [username], [
    username,
  ]);
  const myUser = myUserResult.contracts[0]?.payload;
  const allUsers = useStreamQueries(User.User).contracts;
  // USERS_END

  // Sorted list of users that are following the current user
  const followers = useMemo(
    () =>
      allUsers
        .map((user) => user.payload)
        .filter((user) => user.username !== username)
        .sort((x, y) => x.username.localeCompare(y.username)),
    [allUsers, username]
  );

  // FOLLOW_BEGIN
  const ledger = useLedger();

  const follow = async (userToFollow: Party): Promise<boolean> => {
    try {
      await ledger.exerciseByKey(User.User.Follow, username, { userToFollow });
      return true;
    } catch (error) {
      alert(`Unknown error:\n${error}`);
      return false;
    }
  };
  // FOLLOW_END

  return (
    <Container>
      <Grid centered columns={3}>
        <Grid.Row stretched>
          <Grid.Column>
            <Header
              as="h1"
              size="huge"
              color="blue"
              textAlign="center"
              style={{ padding: "1ex 0em 0ex 0em" }}
            >
              {myUser ? `Welcome, ${myUser.username}!` : "Loading..."}
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Header as="h2">
                <Icon name="user" />
                <Header.Content>
                  {myUser?.username ?? "Loading..."}
                  <Header.Subheader>Users I'm following</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider />
              <PartyListEdit
                parties={myUser?.following ?? []}
                onAddParty={follow}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h2">
                <Icon name="globe" />
                <Header.Content>
                  The Network
                  <Header.Subheader>
                    My followers and users they are following
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <Divider />
              {/* USERLIST_BEGIN */}
              <UserList users={followers} onFollow={follow} />
              {/* USERLIST_END */}
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header as="h2">
                <Icon name="pencil square" />
                <Header.Content>
                  Transactions
                  <Header.Subheader>
                    Make a transaction with a follower
                  </Header.Subheader>
                </Header.Content>
              </Header>
              <TransactionBox
                followers={followers.map((follower) => follower.username)}
              />
              <Divider />
              <TransactionList />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <Header as="h2">
                <Icon name="pencil square" />
                <Header.Content>
                  Groups
                  <Header.Subheader>Create a Group</Header.Subheader>
                </Header.Content>
              </Header>
              <GroupBox followers={followers} />
              <Divider />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default MainView;
