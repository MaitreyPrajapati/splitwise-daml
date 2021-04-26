// Generated from Groups.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export declare type Group = {
  lender: damlTypes.Party;
  involvedParties: damlTypes.Party[];
};

export declare const Group:
  damlTypes.Template<Group, undefined, '3e1ff153922426dd892a88edb76ce5152b4a4ce97cf97939000e6b5b025557cc:Groups:Group'> & {
  Archive: damlTypes.Choice<Group, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Group {
  export type CreateEvent = damlLedger.CreateEvent<Group, undefined, typeof Group.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Group, typeof Group.templateId>
  export type Event = damlLedger.Event<Group, undefined, typeof Group.templateId>
  export type QueryResult = damlLedger.QueryResult<Group, undefined, typeof Group.templateId>
}


