/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow2_claim = {
    readonly hasContents: boolean;
    readonly insurer: {
        readonly contentsref: boolean | null;
    } | null;
    readonly refNumber: string;
    readonly contentsRefNum: string | null;
    readonly building: {
        readonly jobSuppliers: ReadonlyArray<{
            readonly quote: {
                readonly supplier: {
                    readonly companyName: string;
                } | null;
            } | null;
        } | null> | null;
        readonly authorisedSupplier: {
            readonly companyName: string;
        } | null;
        readonly scopingSupplier: {
            readonly companyName: string;
        } | null;
    } | null;
    readonly restoration: {
        readonly jobSuppliers: ReadonlyArray<{
            readonly quote: {
                readonly supplier: {
                    readonly companyName: string;
                } | null;
            } | null;
        } | null> | null;
        readonly authorisedSupplier: {
            readonly companyName: string;
        } | null;
        readonly scopingSupplier: {
            readonly companyName: string;
        } | null;
    } | null;
    readonly " $refType": "JobInfoClaimDetailsRow2_claim";
};
export type JobInfoClaimDetailsRow2_claim$data = JobInfoClaimDetailsRow2_claim;
export type JobInfoClaimDetailsRow2_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow2_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow2_claim">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "companyName",
    "storageKey": null
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "JobSupplier",
    "kind": "LinkedField",
    "name": "jobSuppliers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "JobQuote",
        "kind": "LinkedField",
        "name": "quote",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Company",
            "kind": "LinkedField",
            "name": "supplier",
            "plural": false,
            "selections": (v0/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "authorisedSupplier",
    "plural": false,
    "selections": (v0/*: any*/),
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Company",
    "kind": "LinkedField",
    "name": "scopingSupplier",
    "plural": false,
    "selections": (v0/*: any*/),
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow2_claim",
  "selections": [
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
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "insurer",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "contentsref",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "refNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "contentsRefNum",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "building",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimPortfolio",
      "kind": "LinkedField",
      "name": "restoration",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
})();
(node as any).hash = '9522d29d0e104f83abca5c4453823aa7';
export default node;
