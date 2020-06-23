/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfoRow4_claim = {
    readonly insured: {
        readonly phone1: string | null;
        readonly phone2: string | null;
    } | null;
    readonly view: {
        readonly actions: {
            readonly cashSettle: {
                readonly label: string;
                readonly isDisplay: boolean;
                readonly isDisabled: boolean;
            };
            readonly claimFinalise: {
                readonly label: string;
                readonly isDisplay: boolean;
                readonly isDisabled: boolean;
            };
        };
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ClaimFinalise_claim">;
    readonly " $refType": "JobInfoCustomerInfoRow4_claim";
};
export type JobInfoCustomerInfoRow4_claim$data = JobInfoCustomerInfoRow4_claim;
export type JobInfoCustomerInfoRow4_claim$key = {
    readonly " $data"?: JobInfoCustomerInfoRow4_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow4_claim">;
};



const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "label",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isDisplay",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isDisabled",
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow4_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "ContactDetail",
      "kind": "LinkedField",
      "name": "insured",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "phone1",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "phone2",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClaimJobView",
      "kind": "LinkedField",
      "name": "view",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClaimJobAction",
          "kind": "LinkedField",
          "name": "actions",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ActionControl",
              "kind": "LinkedField",
              "name": "cashSettle",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "ActionControl",
              "kind": "LinkedField",
              "name": "claimFinalise",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClaimFinalise_claim"
    }
  ],
  "type": "ClaimJob"
};
})();
(node as any).hash = '4e2ee62aa1f4f527ffd37a1575508bf5';
export default node;
