/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoCustomerInfo_claim = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfoRow1_claim" | "JobInfoCustomerInfoRow2_claim" | "JobInfoCustomerInfoRow3_claim" | "JobInfoCustomerInfoRow4_claim" | "JobInfoCustomerInfoRow5_claim">;
    readonly " $refType": "JobInfoCustomerInfo_claim";
};
export type JobInfoCustomerInfo_claim$data = JobInfoCustomerInfo_claim;
export type JobInfoCustomerInfo_claim$key = {
    readonly " $data"?: JobInfoCustomerInfo_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoCustomerInfo_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoCustomerInfo_claim",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow1_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow2_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow3_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow4_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoCustomerInfoRow5_claim"
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '280220977c71957be171b3763c6b2257';
export default node;
