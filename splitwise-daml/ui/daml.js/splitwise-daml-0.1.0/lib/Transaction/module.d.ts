// Generated from Transaction.daml
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
  damlTypes.Template<Transaction, undefined, '8065e0b8c30c043350a272375b1ed7094e0ebafca2db12b6069b03759d0d7dc8:Transaction:Transaction'> & {
  Archive: damlTypes.Choice<Transaction, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Transaction {
  export type CreateEvent = damlLedger.CreateEvent<Transaction, undefined, typeof Transaction.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Transaction, typeof Transaction.templateId>
  export type Event = damlLedger.Event<Transaction, undefined, typeof Transaction.templateId>
  export type QueryResult = damlLedger.QueryResult<Transaction, undefined, typeof Transaction.templateId>
}


