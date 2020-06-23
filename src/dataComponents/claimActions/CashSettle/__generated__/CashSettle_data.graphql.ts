/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CashSettle_data = {
    readonly " $fragmentRefs": FragmentRefs<"PaymentTypeSelect_data" | "PaymentMethodSelect_data">;
    readonly " $refType": "CashSettle_data";
};
export type CashSettle_data$data = CashSettle_data;
export type CashSettle_data$key = {
    readonly " $data"?: CashSettle_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CashSettle_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Variable",
    "name": "claimId",
    "variableName": "claimId"
  }
];
return {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "claimId",
      "type": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "CashSettle_data",
  "selections": [
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "PaymentTypeSelect_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "PaymentMethodSelect_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'f936aff573ce3ff7251fd0d7a76df8dd';
export default node;
