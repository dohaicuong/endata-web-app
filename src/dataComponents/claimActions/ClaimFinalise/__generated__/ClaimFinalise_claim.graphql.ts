/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClaimFinalise_claim = {
    readonly id: string;
    readonly hasBuilding: boolean;
    readonly building: {
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseResetForm_data">;
    } | null;
    readonly hasContents: boolean;
    readonly contents: {
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseResetForm_data">;
    } | null;
    readonly hasRestoration: boolean;
    readonly restoration: {
        readonly claimStatus: {
            readonly statusName: string | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"ClaimFinaliseResetForm_data">;
    } | null;
    readonly " $refType": "ClaimFinalise_claim";
};
export type ClaimFinalise_claim$data = ClaimFinalise_claim;
export type ClaimFinalise_claim$key = {
    readonly " $data"?: ClaimFinalise_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinalise_claim">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ClaimStatus",
    "kind": "LinkedField",
    "name": "claimStatus",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "statusName",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "args": null,
    "kind": "FragmentSpread",
    "name": "ClaimFinaliseResetForm_data"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClaimFinalise_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasBuilding",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "building",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasContents",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "contents",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasRestoration",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "restoration",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
})();
(node as any).hash = '7b137c502b0fb31f62aac268fb07e077';
export default node;
