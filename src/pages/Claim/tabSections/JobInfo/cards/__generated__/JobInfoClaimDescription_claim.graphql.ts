/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDescription_claim = {
    readonly claimDescription: string | null;
    readonly " $refType": "JobInfoClaimDescription_claim";
};
export type JobInfoClaimDescription_claim$data = JobInfoClaimDescription_claim;
export type JobInfoClaimDescription_claim$key = {
    readonly " $data"?: JobInfoClaimDescription_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDescription_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDescription_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "claimDescription",
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '7d676dc2f580e4ab87460541cc304c1a';
export default node;
