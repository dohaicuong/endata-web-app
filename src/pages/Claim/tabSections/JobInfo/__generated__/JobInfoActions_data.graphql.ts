/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoActions_data = {
    readonly " $fragmentRefs": FragmentRefs<"NextStep_data" | "OfferAccept_data" | "OfferDecline_data" | "SupplierAllocate_data">;
    readonly " $refType": "JobInfoActions_data";
};
export type JobInfoActions_data$data = JobInfoActions_data;
export type JobInfoActions_data$key = {
    readonly " $data"?: JobInfoActions_data$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoActions_data">;
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
  "name": "JobInfoActions_data",
  "selections": [
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "NextStep_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "OfferAccept_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "OfferDecline_data"
    },
    {
      "args": (v0/*: any*/),
      "kind": "FragmentSpread",
      "name": "SupplierAllocate_data"
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'f8f920b077b5e164cfdc1c1f1978eb8d';
export default node;
