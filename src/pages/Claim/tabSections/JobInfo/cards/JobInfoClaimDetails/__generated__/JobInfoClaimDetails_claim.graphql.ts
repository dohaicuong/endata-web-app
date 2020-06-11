/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_claim = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_claim" | "JobInfoClaimDetailsRow2_claim" | "JobInfoClaimDetailsRow3_claim">;
    readonly " $refType": "JobInfoClaimDetails_claim";
};
export type JobInfoClaimDetails_claim$data = JobInfoClaimDetails_claim;
export type JobInfoClaimDetails_claim$key = {
    readonly " $data"?: JobInfoClaimDetails_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetails_claim",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow1_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow2_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow3_claim"
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = 'd1e778cf37874f13c9104715a4d2a0cf';
export default node;
