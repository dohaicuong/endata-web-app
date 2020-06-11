/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type JobInfo_claim = {
    readonly insurer: {
        readonly companyId: number;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"JobInfoClaimDetails_claim">;
    readonly " $refType": "JobInfo_claim";
};
export type JobInfo_claim$data = JobInfo_claim;
export type JobInfo_claim$key = {
    readonly " $data"?: JobInfo_claim$data;
    readonly " $fragmentRefs": FragmentRefs<"JobInfo_claim">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "JobInfo_claim",
  "selections": [
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
          "name": "companyId",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "JobInfoClaimDetails_claim"
    }
  ],
  "type": "ClaimJob"
};
(node as any).hash = '2be82471e87ad1c5721980afb2e823cb';
export default node;
