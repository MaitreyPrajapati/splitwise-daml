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


exports.MakeGroupTransaction = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({currGroupName: damlTypes.Text.decoder, totalAmount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    currGroupName: damlTypes.Text.encode(__typed__.currGroupName),
    totalAmount: damlTypes.Numeric(10).encode(__typed__.totalAmount),
  };
}
,
};



exports.Group = {
  templateId: '8065e0b8c30c043350a272375b1ed7094e0ebafca2db12b6069b03759d0d7dc8:Group:Group',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return damlTypes.Party.decoder; }); }),
  keyEncode: function (__typed__) { return damlTypes.Party.encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({lender: damlTypes.Party.decoder, involvedParties: damlTypes.List(damlTypes.Party).decoder, groupName: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    lender: damlTypes.Party.encode(__typed__.lender),
    involvedParties: damlTypes.List(damlTypes.Party).encode(__typed__.involvedParties),
    groupName: damlTypes.Text.encode(__typed__.groupName),
  };
}
,
  Archive: {
    template: function () { return exports.Group; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  MakeGroupTransaction: {
    template: function () { return exports.Group; },
    choiceName: 'MakeGroupTransaction',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.MakeGroupTransaction.decoder; }),
    argumentEncode: function (__typed__) { return exports.MakeGroupTransaction.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Group);

