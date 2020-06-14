/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetails_claim = {
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow1_claim" | "JobInfoClaimDetailsRow2_claim" | "JobInfoClaimDetailsRow3_claim" | "JobInfoClaimDetailsRow4_claim" | "JobInfoClaimDetailsRow5_claim" | "JobInfoClaimDetailsRow6_claim">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow4_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow5_claim"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetailsRow6_claim"
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = 'f9e1df6b4e0dc18cf03bfaed24dcf0ef';
export default node;
