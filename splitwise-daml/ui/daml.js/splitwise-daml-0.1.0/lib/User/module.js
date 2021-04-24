"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Transaction = require('../Transaction/module');


exports.MakeTransaction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, amount: damlTypes.Numeric(2).decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    amount: damlTypes.Numeric(2).encode(__typed__.amount),
  };
}
,
};



exports.Follow = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({userToFollow: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    userToFollow: damlTypes.Party.encode(__typed__.userToFollow),
  };
}
,
};



exports.User = {
  templateId: '5c83130736076f7c4d74bf04510317d4df8db68d5ad00b11fd50d5a0c52948e9:User:User',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({username: damlTypes.Party.decoder, following: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    username: damlTypes.Party.encode(__typed__.username),
    following: damlTypes.List(damlTypes.Party).encode(__typed__.following),
  };
}
,
  Follow: {
    template: function () { return exports.User; },
    choiceName: 'Follow',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Follow.decoder; }),
    argumentEncode: function (__typed__) { return exports.Follow.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.User).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.User).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.User; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  MakeTransaction: {
    template: function () { return exports.User; },
    choiceName: 'MakeTransaction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.MakeTransaction.decoder; }),
    argumentEncode: function (__typed__) { return exports.MakeTransaction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Transaction.Transaction).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Transaction.Transaction).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.User);

