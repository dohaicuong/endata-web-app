/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfoClaimDetailsRow3_claim = {
    readonly lodgeDate: unknown | null;
    readonly " $refType": "JobInfoClaimDetailsRow3_claim";
};
export type JobInfoClaimDetailsRow3_claim$data = JobInfoClaimDetailsRow3_claim;
export type JobInfoClaimDetailsRow3_claim$key = {
    readonly " $data"?: JobInfoClaimDetailsRow3_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetailsRow3_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfoClaimDetailsRow3_claim",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lodgeDate",
      "storageKey": null
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '3c203df7b145d49b96f16d345a36ecf2';
export default node;
