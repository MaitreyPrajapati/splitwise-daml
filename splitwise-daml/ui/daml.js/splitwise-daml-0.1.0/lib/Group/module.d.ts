// Generated from Group.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type MakeGroupTransaction = {
  currGroupName: string;
  totalAmount: damlTypes.Numeric;
};

export declare const MakeGroupTransaction:
  damlTypes.Serializable<MakeGroupTransaction> & {
  }
;


export declare type Group = {
  lender: damlTypes.Party;
  involvedParties: damlTypes.Party[];
  groupName: string;
};

export declare const Group:
  damlTypes.Template<Group, Group.Key, '4e06debd8433252c6774258551a323596c51e1b61458250797d476b4763a88bb:Group:Group'> & {
  Archive: damlTypes.Choice<Group, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Group.Key>;
  MakeGroupTransaction: damlTypes.Choice<Group, MakeGroupTransaction, {}, Group.Key>;
};

export declare namespace Group {
  export type Key = damlTypes.Party
  export type CreateEvent = damlLedger.CreateEvent<Group, Group.Key, typeof Group.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Group, typeof Group.templateId>
  export type Event = damlLedger.Event<Group, Group.Key, typeof Group.templateId>
  export type QueryResult = damlLedger.QueryResult<Group, Group.Key, typeof Group.templateId>
}


