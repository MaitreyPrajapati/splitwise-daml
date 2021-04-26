// Generated from User.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Transaction from '../Transaction/module';

export declare type MakeTransaction = {
  lender: damlTypes.Party;
  amount: damlTypes.Numeric;
};

export declare const MakeTransaction:
  damlTypes.Serializable<MakeTransaction> & {
  }
;


export declare type Follow = {
  userToFollow: damlTypes.Party;
};

export declare const Follow:
  damlTypes.Serializable<Follow> & {
  }
;


export declare type User = {
  username: damlTypes.Party;
  following: damlTypes.Party[];
};

export declare const User:
  damlTypes.Template<User, User.Key, '5a532bde2939749e2f607147a14d150629664801770d0d97989514922c29b7cb:User:User'> & {
  Follow: damlTypes.Choice<User, Follow, damlTypes.ContractId<User>, User.Key>;
  Archive: damlTypes.Choice<User, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, User.Key>;
  MakeTransaction: damlTypes.Choice<User, MakeTransaction, damlTypes.ContractId<Transaction.Transaction>, User.Key>;
};

export declare namespace User {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<User, User.Key, typeof User.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<User, typeof User.templateId>
  export type Event = damlLedger.Event<User, User.Key, typeof User.templateId>
  export type QueryResult = damlLedger.QueryResult<User, User.Key, typeof User.templateId>
}


