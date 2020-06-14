/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfoRow1_claim = {
    readonly insured: {
        readonly salutation: string | null;
        readonly name: string | null;
        readonly email: string | null;
    } | null;
    readonly " $refType": "JobInfoCustomerInfoRow1_claim";
};
export type JobInfoCustomerInfoRow1_claim$data = JobInfoCustomerInfoRow1_claim;
export type JobInfoCustomerInfoRow1_claim$key = {
    readonly " $data"?: JobInfoCustomerInfoRow1_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow1_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow1_claim",
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
          "name": "salutation",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "email",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '7f3fbc5ad49d6d05588798be3c3274e4';
export default node;
