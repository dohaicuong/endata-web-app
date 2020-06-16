/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfoRow5_claim = {
    readonly insured: {
        readonly phone3: string | null;
        readonly fax: string | null;
    } | null;
    readonly " $refType": "JobInfoCustomerInfoRow5_claim";
};
export type JobInfoCustomerInfoRow5_claim$data = JobInfoCustomerInfoRow5_claim;
export type JobInfoCustomerInfoRow5_claim$key = {
    readonly " $data"?: JobInfoCustomerInfoRow5_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow5_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfoRow5_claim",
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
          "name": "phone3",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "fax",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '19db3ff60fafe3ca87d0f10d1ff03925';
export default node;
