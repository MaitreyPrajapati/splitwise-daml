// Generated from User.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Transaction = {
  lender: damlTypes.Party;
  borrower: damlTypes.Party;
  amount: damlTypes.Numeric;
};

export declare const Transaction:
  damlTypes.Template<Transaction, undefined, '86afcffc147a68f3733bd5d0a41a337647cd5d4e3b83c191bf07590521263129:User:Transaction'> & {
  Archive: damlTypes.Choice<Transaction, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Transaction {
  export type CreateEvent = damlLedger.CreateEvent<Transaction, undefined, typeof Transaction.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Transaction, typeof Transaction.templateId>
  export type Event = damlLedger.Event<Transaction, undefined, typeof Transaction.templateId>
  export type QueryResult = damlLedger.QueryResult<Transaction, undefined, typeof Transaction.templateId>
}



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
  damlTypes.Template<User, User.Key, '86afcffc147a68f3733bd5d0a41a337647cd5d4e3b83c191bf07590521263129:User:User'> & {
  Archive: damlTypes.Choice<User, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, User.Key>;
  Follow: damlTypes.Choice<User, Follow, damlTypes.ContractId<User>, User.Key>;
  MakeTransaction: damlTypes.Choice<User, MakeTransaction, damlTypes.ContractId<Transaction>, User.Key>;
};

export declare namespace User {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<User, User.Key, typeof User.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<User, typeof User.templateId>
  export type Event = damlLedger.Event<User, User.Key, typeof User.templateId>
  export type QueryResult = damlLedger.QueryResult<User, User.Key, typeof User.templateId>
}


